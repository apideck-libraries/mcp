/**
 * Tests for `apideck-pay-bill`. Covers:
 *   - registers as a workflow tool with write scope
 *   - happy path: fetches bill, posts payment with bill-allocation,
 *     echoes payment id + amount + currency
 *   - missing bill (404): isError=true, failingStep=accounting-bills-get
 *   - partial payment: explicit amount < bill total → partial:true
 *   - bill with zero total + no override → validate-amount error
 *   - propagates x-apideck-service-id to both upstream calls
 */

import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";
import { workflowTools } from "../esm/src/gen/workflows/index.js";

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) {
    console.error(`  FAIL: ${msg}`);
    failures++;
  } else {
    console.log(`  PASS: ${msg}`);
  }
};

const logger = {
  level: "info",
  debug() {},
  info() {},
  warning() {},
  error() {},
};

const fakeSDK = () => ({
  _options: {
    appId: "app",
    consumerId: "consumer",
    security: async () => ({ apiKey: "sk_test_paybill" }),
  },
});

function stubFetch(routes) {
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, opts = {}) => {
    const url = input instanceof Request ? input.url : String(input);
    const body = opts.body && typeof opts.body === "string"
      ? (() => {
        try {
          return JSON.parse(opts.body);
        } catch {
          return opts.body;
        }
      })()
      : undefined;
    calls.push({ url, method: opts.method, headers: Object.fromEntries(opts.headers?.entries?.() ?? []), body });
    for (const [pattern, route] of Object.entries(routes)) {
      if (url.includes(pattern)) {
        const status = route.__status ?? 200;
        return new Response(JSON.stringify(route), {
          status,
          headers: { "content-type": "application/json" },
        });
      }
    }
    return new Response("not stubbed", { status: 500 });
  };
  return { calls, restore: () => (globalThis.fetch = orig) };
}

function bootDefault() {
  return createGeneratedMCPServer({
    logger,
    dynamic: true,
    getSDK: fakeSDK,
  });
}

// ---------------------------------------------------------------------------
// 1. Registered with write scope
// ---------------------------------------------------------------------------
console.log("Test: apideck-pay-bill registered with write scope");
{
  const booted = bootDefault();
  assert(
    booted.tools.some((t) => t.name === "apideck-pay-bill"),
    "tool registered in booted server",
  );
  // scopes/annotations live on the source ToolDefinition (the public `tools`
  // array intentionally only carries name + description).
  const def = workflowTools.find((t) => t.name === "apideck-pay-bill");
  assert(def, "workflow definition exported");
  assert(def.scopes?.includes("write"), "scope includes write");
  assert(def.annotations?.readOnlyHint === false, "not read-only");
  assert(def.annotations?.idempotentHint === false, "not idempotent");
}

// ---------------------------------------------------------------------------
// 2. Happy path: full payment of a bill
// ---------------------------------------------------------------------------
console.log("Test: pays full bill amount and links allocation");
{
  const stub = stubFetch({
    "/accounting/bills/bill-42": {
      data: {
        id: "bill-42",
        total_amount: 250.5,
        currency: "EUR",
        supplier: { id: "supp-9", display_name: "ACME Co" },
      },
    },
    "/accounting/payments": {
      data: { id: "pay-77", total_amount: 250.5 },
    },
  });

  const booted = bootDefault();
  const exec = booted.server._registeredTools.execute_tool;
  const res = await exec.handler(
    {
      name: "apideck-pay-bill",
      arguments: {
        bill_id: "bill-42",
        account_id: "acc-bank",
        transaction_date: "2026-04-25",
        reference: "Q2 settle",
        "x-apideck-service-id": "xero",
      },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError !== true, "not an error");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.bill_id === "bill-42", "bill_id echoed");
  assert(payload.payment_id === "pay-77", "payment_id from upstream");
  assert(payload.amount === 250.5, "amount defaulted to bill total");
  assert(payload.currency === "EUR", "currency from bill");
  assert(payload.partial === false, "full payment → partial:false");
  assert(payload.service_id === "xero", "service_id echoed");

  // Upstream calls
  assert(stub.calls.length === 2, `2 upstream calls (got ${stub.calls.length})`);
  const [billCall, payCall] = stub.calls;
  assert(billCall.method === "GET" && billCall.url.includes("/bills/bill-42"), "GET bill");
  assert(payCall.method === "POST" && payCall.url.includes("/payments"), "POST payment");
  assert(payCall.headers["x-apideck-service-id"] === "xero", "service_id forwarded to payment call");
  assert(payCall.body?.total_amount === 250.5, "payment total_amount set");
  assert(payCall.body?.currency === "EUR", "payment currency set");
  assert(payCall.body?.account?.id === "acc-bank", "payment account.id set");
  assert(payCall.body?.transaction_date === "2026-04-25", "transaction_date set");
  assert(payCall.body?.reference === "Q2 settle", "reference forwarded");
  assert(Array.isArray(payCall.body?.allocations) && payCall.body.allocations.length === 1, "1 allocation");
  assert(payCall.body.allocations[0].id === "bill-42", "allocation points at bill");
  assert(payCall.body.allocations[0].type === "bill", "allocation type=bill");
  assert(payCall.body.allocations[0].amount === 250.5, "allocation amount = total");
  assert(payCall.body?.supplier?.id === "supp-9", "supplier carried from bill");
}

// ---------------------------------------------------------------------------
// 3. Missing bill → fail-fast on bills-get, no payment created
// ---------------------------------------------------------------------------
console.log("Test: missing bill aborts, no payment posted");
{
  const stub = stubFetch({
    "/accounting/bills/bill-missing": {
      __status: 404,
      status_code: 404,
      type_name: "EntityNotFoundError",
      message: "Bill not found",
    },
    // intentionally no payments stub — we expect zero payment calls
  });

  const booted = bootDefault();
  const exec = booted.server._registeredTools.execute_tool;
  const res = await exec.handler(
    {
      name: "apideck-pay-bill",
      arguments: { bill_id: "bill-missing", account_id: "acc-bank" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "accounting-bills-get", "failingStep names bill lookup");
  assert(payload.bill_id === "bill-missing", "bill_id echoed in error");
  assert(
    stub.calls.length === 1,
    `only the bill GET happened — no payment POST after lookup failed (got ${stub.calls.length})`,
  );
}

// ---------------------------------------------------------------------------
// 4. Partial payment: explicit amount < bill total
// ---------------------------------------------------------------------------
console.log("Test: explicit amount < bill total → partial:true");
{
  const stub = stubFetch({
    "/accounting/bills/bill-1": {
      data: { id: "bill-1", total_amount: 1000, currency: "USD", supplier: { id: "s1" } },
    },
    "/accounting/payments": { data: { id: "pay-p1" } },
  });

  const booted = bootDefault();
  const exec = booted.server._registeredTools.execute_tool;
  const res = await exec.handler(
    {
      name: "apideck-pay-bill",
      arguments: { bill_id: "bill-1", account_id: "acc-1", amount: 400 },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(payload.partial === true, "partial:true on under-payment");
  assert(payload.amount === 400, "amount honoured");
  assert(payload.bill_total === 1000, "bill_total preserved");
  const payCall = stub.calls.find((c) => c.url.includes("/payments"));
  assert(payCall?.body?.allocations[0].amount === 400, "allocation amount = explicit amount, not bill total");
}

// ---------------------------------------------------------------------------
// 5. Bill with zero total + no override → validate-amount error
// ---------------------------------------------------------------------------
console.log("Test: zero-total bill without explicit amount errors out before posting");
{
  const stub = stubFetch({
    "/accounting/bills/bill-zero": {
      data: { id: "bill-zero", total_amount: 0, currency: "USD", supplier: { id: "s1" } },
    },
  });

  const booted = bootDefault();
  const exec = booted.server._registeredTools.execute_tool;
  const res = await exec.handler(
    {
      name: "apideck-pay-bill",
      arguments: { bill_id: "bill-zero", account_id: "acc-1" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "validate-amount", "failingStep is validate-amount");
  assert(stub.calls.length === 1, "no payment POST attempted");
}

// ---------------------------------------------------------------------------
// 6. Payment-create failure surfaces as failingStep
// ---------------------------------------------------------------------------
console.log("Test: payment-create failure carries failingStep + upstream");
{
  const stub = stubFetch({
    "/accounting/bills/bill-99": {
      data: { id: "bill-99", total_amount: 100, currency: "USD", supplier: { id: "s2" } },
    },
    "/accounting/payments": {
      __status: 422,
      status_code: 422,
      type_name: "ValidationError",
      message: "account.id is invalid",
    },
  });

  const booted = bootDefault();
  const exec = booted.server._registeredTools.execute_tool;
  const res = await exec.handler(
    {
      name: "apideck-pay-bill",
      arguments: { bill_id: "bill-99", account_id: "acc-bad" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "accounting-payments-create", "failingStep on payment");
  assert(
    typeof payload.error === "string" && payload.error.includes("account.id"),
    "upstream error text bubbles up",
  );
}

console.log(
  `\n${failures === 0 ? "All pay-bill tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
