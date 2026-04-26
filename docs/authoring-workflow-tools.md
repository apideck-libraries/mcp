# Authoring workflow tools

Workflow tools are **intent-grouped composites** over the 330+ generated endpoint tools. One workflow tool replaces a chain of low-level calls the agent would otherwise have to orchestrate (and routinely get wrong).

> *"A single create_issue_from_thread tool beats get_thread + parse_messages + create_issue + link_attachment."*  
> — *Building agents that reach production systems with MCP*

This page describes the pattern, the helpers, and the tradeoffs.

## When to add one

A new workflow earns its place when **all four** are true:

1. **The chain is canonical.** A real user task ("pay this bill", "close the books", "onboard this hire") naturally maps to N upstream calls in a fixed order.
2. **The agent gets the chain wrong without you.** Either it picks the wrong sibling endpoint (we've seen `accounting-payments-create` vs `accounting-bill-payments-create` confusion), or it constructs nested payloads incorrectly (allocations arrays, customer-vs-supplier refs).
3. **Field plumbing is non-trivial.** The output of step N feeds step N+1 with reshaping — picking `data` envelopes, extracting nested ids, mapping ATS field names to HRIS field names.
4. **It's a real round-trip win.** 2-5 upstream calls collapsed into one MCP call. Below 2 the agent might as well call directly; above 5 you're probably re-implementing the unified API.

If only some of these are true, a richer description on the underlying endpoint tool is usually enough.

## Where workflow tools live

```
src/gen/workflows/
├── helpers.ts            # callTool, runStep, pickData, extractServiceContext, …
├── index.ts              # registers each workflow in workflowTools[]
├── monthEndClose.ts      # read fan-out (4 endpoints in parallel)
├── payBill.ts            # AP write (lookup → write with allocation)
├── receivePayment.ts     # AR write (mirror of pay-bill)
└── onboardEmployee.ts    # cross-API write (ATS → HRIS, optional follow-up)
```

`workflowTools` is consumed by `src/gen/create-server.ts` and registered immediately after the 330 endpoint tools, so they appear together in `tools/list` (when not in dynamic mode) or in `list_tools` results (when dynamic mode is on).

## Anatomy of a workflow

Every workflow exports a single `WorkflowTool` with five required fields:

```ts
export const apideckPayBill: WorkflowTool = {
  name: "apideck-pay-bill",
  description: [...].join("\n"),
  scopes: ["write"],         // "read" | "write" | "destructive"
  annotations: {
    title: "Pay vendor bill",
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,    // Always false for create workflows
    openWorldHint: false,
  },
  args,                       // ZodRawShape — top-level args, NOT wrapped in `request`
  async tool(client, a, ctx) { /* … */ },
};
```

### Naming

- **Tool name**: kebab-case, prefixed `apideck-`. Names reflect the **intent**, not the implementation: `apideck-pay-bill` (intent) not `apideck-bills-and-payments` (implementation).
- **File name**: camelCase singular noun phrase: `payBill.ts`, `receivePayment.ts`, `onboardEmployee.ts`.
- **Argument names**: snake_case to match the underlying Apideck unified spec.

### Description

Five sections, separated by blank lines:

1. **One-line summary** — what the workflow accomplishes in human terms.
2. **The substitution** — explicitly call out which low-level chain this replaces and *why* the agent would otherwise get it wrong.
3. **Mutation warning** (write workflows only). State idempotency and side-effect intent so the client can prompt for confirmation.
4. **Use-when / use-instead** — point the agent to siblings for adjacent intents.
5. **Connection context** — which unified APIs are required, how `x-apideck-service-id` works, where auth comes from.

This shape directly addresses Glama's TDQS rubric: Purpose → Behavioural Transparency → Usage Guidelines → Contextual Completeness.

### Schema

Top-level Zod args. Each arg has a `.describe()`. Connector quirks belong in the description (e.g. QuickBooks' capitalisation requirement on `payment_method`).

For workflows that span two unified APIs (`onboardEmployee.ts`), use **two separate service-id headers**:

```ts
"x-apideck-ats-service-id": z.string().optional().describe("…"),
"x-apideck-hris-service-id": z.string().optional().describe("…"),
```

This sidesteps the single-tenant assumption baked into `extractServiceContext`.

## Shared helpers (`helpers.ts`)

| Helper | Use it for |
|---|---|
| `callTool(client, name, args, ctx)` | Direct invocation of a generated endpoint tool. Throws `WorkflowStepError` on isError. Use only when you genuinely need the throw — most callers want `runStep`. |
| `runStep(client, name, args, ctx, pick?)` | The default. Catches errors and classifies them: `{ ok: true, data }`, `{ ok: false, unsupported, reason }`, or `{ ok: false, error }`. **Re-throws `McpError` so URL elicitations reach the client unchanged.** |
| `pickData(body)` | Unwrap Apideck's `{ data: ... }` envelope. Default `pick` for `runStep`. |
| `workflowJsonResult(obj, isError?)` | Return the standard MCP content shape. |
| `extractServiceContext(args)` | Pull `x-apideck-service-id` out of args and produce the `common` header object. Single-tenant only — skip for cross-API workflows. |

### The `runStep` outcome shape is load-bearing

```ts
type StepOutcome<T> =
  | { ok: true; data: T }
  | { ok: false; unsupported: true; reason: string; upstream?: unknown }
  | { ok: false; unsupported: false; error: string; upstream?: unknown };
```

**Do not collapse `unsupported` into `error`.** They are different signals:

- `unsupported` (404 ConnectorExecutionError, UnsupportedFiltersError) → the connector doesn't implement this resource. Retrying won't help. Surface to the agent as a "supported by this connector" gap, not as a transient failure.
- `error` (auth, validation, 5xx) → may be transient or fixable with different inputs.

Workflows like `monthEndClose` use this distinction to return *partial* snapshots when some steps are unsupported but others succeed, while still flagging hard errors.

### McpError pass-through is non-negotiable

Inside `runStep`:

```ts
if (err instanceof Error && err.name === "McpError") throw err;
```

This is the only correct behaviour. URL elicitations (`UrlElicitationRequiredError`) carry a Vault session URL that the client renders as a "Connect your account" button. Wrapping it in a `{ error }` envelope strips the URL and breaks Phase 2 entirely.

If you find yourself catching errors broadly inside a workflow, double-check you're not swallowing this case.

## Result envelope

Every workflow returns a JSON object with at least these keys:

| Key | Meaning |
|---|---|
| Identity keys (`bill_id`, `invoice_id`, `applicant_id`, …) | Echo the inputs so the agent can reason about *which* record it acted on. |
| `service_id` (or `ats_service_id` + `hris_service_id` for cross-API) | Echo the targeted connector. |
| `failingStep` *(error case only)* | The name of the underlying tool that failed: `accounting-bills-get`, `validate-amount`, etc. Helps the agent decide retry vs reformulate. |
| `error` *(error case only)* | One-line human explanation lifted from the upstream response. |
| `upstream` *(error case only)* | Verbatim upstream payload. The agent uses this to extract connector-specific details (QB Fault.Error, Xero ValidationFault, …). |
| `warnings` *(soft-fail case)* | Array of strings. Use when a non-load-bearing step failed but the load-bearing one succeeded — e.g. employee created but ATS stage update failed. |

`isError: true` is reserved for **load-bearing** failures. A soft-fail (employee created, stage move failed) returns `isError: false` plus a `warnings` array, because aborting would leave the workspace in a worse state than partial success.

## Connector-quirk handling

Real connectors disagree with the unified spec at the margins. Three patterns we've used:

### 1. Field-name fallbacks

QuickBooks returns `total` where Apideck's spec says `total_amount`:

```ts
const billTotal = Number(
  bill["balance"] ?? bill["total_amount"] ?? bill["total"] ?? 0,
);
```

Prefer `balance` (outstanding) over `total` (gross) so partial-paid records aren't double-paid.

### 2. Document quirks in descriptions

QuickBooks rejects lower-case `payment_method: "check"` at the JSON-parser layer; capitalised `"Check"` works. Don't normalise silently — tell the agent:

```ts
.describe(
  "Payment method label. QuickBooks requires capitalized values: " +
  "\"Check\", \"CreditCard\", \"Cash\". Other connectors accept lower-case " +
  "\"check\" / \"credit_card\" / \"ach\" / \"wire\". When omitted, " +
  "QuickBooks rejects the payment with a parse error — pass an explicit " +
  "value for QB.",
)
```

### 3. Endpoint selection

AR vs AP, list vs get vs filter — Apideck splits these into distinct unified endpoints. Use the right one and document it. `apideck-pay-bill` routes to `accounting-bill-payments-create` (AP); `apideck-receive-customer-payment` routes to `accounting-payments-create` (AR). Mixing them up makes QuickBooks reject with `CustomerRef missing` when there's really a vendor on the other end.

## Testing

One test file per workflow, alongside `test/gen-workflow-<name>.test.mjs`. Required cases:

1. **Registration** — tool appears in `booted.tools` and source `workflowTools[]`; scope and annotation flags correct.
2. **Happy path** — full upstream chain stubbed; assert each upstream call's URL, method, headers (especially `x-apideck-service-id`), and body shape.
3. **Lookup failure** — first step fails; assert no subsequent calls; assert `failingStep` in result.
4. **Validation failure** — caller-supplied data is invalid (e.g. zero balance); assert no upstream calls past validation.
5. **Mutating step failure** — last step fails; assert error envelope.
6. **Connector quirk** — at least one test with the connector-quirky shape (e.g. `total` instead of `total_amount`).
7. **McpError pass-through** — stub a connection issue + Vault session mint; assert the call **throws** rather than returning a tool result, and the URL is in `thrown.data.elicitations[0].url`.

Tests should:

- Hoist `bootDefault()` to module scope (reuse across cases). State isolation is via `stubFetch`, not via fresh server boots — saves 5× tool registrations per case.
- Stub `globalThis.fetch` directly. Match by URL substring; honour `__status` for non-200 responses.

## CI registration

Add the new test to `.github/workflows/ci.yaml`:

```yaml
- name: Custom generator tests
  run: |
    …
    node test/gen-workflow-<name>.test.mjs
```

## Live verification

Stub tests cover the logic. **Always** also run the workflow live against a real Apideck consumer before merging. The connector layer surfaces issues stubs never will:

- field-name drift (`total` vs `total_amount`)
- endpoint routing (AR vs AP)
- capitalisation requirements (`Check` not `check`)
- coverage gaps (Moneybird's `financial_mutations` instead of `payments`)
- per-connector validation quirks (QB needing `CustomerRef`)

Three of the four shipped workflows had a real bug discovered only at the live boundary. The unit suite passing is necessary but not sufficient.

A minimal live runner:

```bash
APIDECK_CONSUMER_ID=<your-consumer> node --input-type=module -e '
import { createGeneratedMCPServer } from "./esm/src/gen/create-server.js";
const booted = createGeneratedMCPServer({
  logger: { level:"info", debug(){}, info(){}, warning(){}, error(){} },
  dynamic: true,
  getSDK: () => ({ _options: {
    appId: process.env.APIDECK_APP_ID,
    consumerId: process.env.APIDECK_CONSUMER_ID,
    security: { apiKey: process.env.APIDECK_API_KEY },
  } }),
});
const exec = booted.server._registeredTools.execute_tool;
const res = await exec.handler({
  name: "<workflow-name>",
  arguments: { /* … */ },
}, { signal: AbortSignal.timeout(60_000) });
console.log("isError=" + res.isError);
console.log(res.content[0].text);
'
```

## Checklist before opening a PR

- [ ] Workflow file in `src/gen/workflows/<name>.ts` exporting a `WorkflowTool`
- [ ] Registered in `src/gen/workflows/index.ts`
- [ ] Description follows the five-section pattern
- [ ] All args have `.describe()` strings
- [ ] Mutating workflows: `idempotentHint: false` and a confirmation paragraph in the description
- [ ] Test file with all 7 required cases; module-scope server boot
- [ ] CI step added in `.github/workflows/ci.yaml`
- [ ] `npm run lint` clean
- [ ] **Live verification** against a real Apideck consumer (note connector + outcome in the PR description)
