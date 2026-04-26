/**
 * Tests for `apideck-receive-customer-payment`. AR mirror of pay-bill.
 * Covers: registration + write scope, happy-path full payment,
 * missing invoice, partial payment, zero-balance guard, payment-create
 * failure, McpError elicitation pass-through.
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
    security: async () => ({ apiKey: "sk_test_recv" }),
  },
});

function stubFetch(routes) {
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, opts = {}) => {
    const url = input instanceof Request ? input.url : String(input);
    const body = opts.body && typeof opts.body === "string"
      ? (() => { try { return JSON.parse(opts.body); } catch { return opts.body; } })()
      : undefined;
    calls.push({
      url,
      method: opts.method,
      headers: Object.fromEntries(opts.headers?.entries?.() ?? []),
      body,
    });
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

const booted = createGeneratedMCPServer({
  logger,
  dynamic: true,
  getSDK: fakeSDK,
});
const exec = booted.server._registeredTools.execute_tool;

// ---------------------------------------------------------------------------
// 1. Registered with write scope, mirrors pay-bill annotations
// ---------------------------------------------------------------------------
console.log("Test: apideck-receive-customer-payment registered with write scope");
{
  assert(
    booted.tools.some((t) => t.name === "apideck-receive-customer-payment"),
    "tool registered in booted server",
  );
  const def = workflowTools.find((t) => t.name === "apideck-receive-customer-payment");
  assert(def, "workflow definition exported");
  assert(def.scopes?.includes("write"), "scope includes write");
  assert(def.annotations?.readOnlyHint === false, "not read-only");
  assert(def.annotations?.idempotentHint === false, "not idempotent");
}

// ---------------------------------------------------------------------------
// 2. Happy path: full payment of an invoice routes to AR endpoint
// ---------------------------------------------------------------------------
console.log("Test: receives full invoice amount and links allocation type=invoice");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-42": {
      data: {
        id: "inv-42",
        total_amount: 250.5,
        currency: "EUR",
        customer: { id: "cust-9", display_name: "ACME Co" },
      },
    },
    "/accounting/payments": {
      data: { id: "pay-77", total_amount: 250.5 },
    },
  });

  const res = await exec.handler(
    {
      name: "apideck-receive-customer-payment",
      arguments: {
        invoice_id: "inv-42",
        account_id: "acc-bank",
        transaction_date: "2026-04-26",
        reference: "Q2 receivable",
        "x-apideck-service-id": "xero",
      },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError !== true, "not an error");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.invoice_id === "inv-42", "invoice_id echoed");
  assert(payload.payment_id === "pay-77", "payment_id from upstream");
  assert(payload.amount === 250.5, "amount defaulted to invoice total");
  assert(payload.currency === "EUR", "currency from invoice");
  assert(payload.partial === false, "full payment → partial:false");
  assert(payload.service_id === "xero", "service_id echoed");

  assert(stub.calls.length === 2, `2 upstream calls (got ${stub.calls.length})`);
  const [invCall, payCall] = stub.calls;
  assert(invCall.method === "GET" && invCall.url.includes("/invoices/inv-42"), "GET invoice");
  // AR endpoint — `/payments`, NOT `/bill-payments`
  assert(
    payCall.method === "POST" && payCall.url.includes("/payments") && !payCall.url.includes("/bill-payments"),
    `POST to AR /payments (got ${payCall.url})`,
  );
  assert(payCall.headers["x-apideck-service-id"] === "xero", "service_id forwarded to payment call");
  assert(payCall.body?.total_amount === 250.5, "payment total_amount set");
  assert(payCall.body?.currency === "EUR", "payment currency set");
  assert(payCall.body?.account?.id === "acc-bank", "payment account.id set");
  assert(payCall.body?.transaction_date === "2026-04-26", "transaction_date set");
  assert(payCall.body?.reference === "Q2 receivable", "reference forwarded");
  assert(Array.isArray(payCall.body?.allocations) && payCall.body.allocations.length === 1, "1 allocation");
  assert(payCall.body.allocations[0].id === "inv-42", "allocation points at invoice");
  assert(payCall.body.allocations[0].type === "invoice", "allocation type=invoice");
  assert(payCall.body.allocations[0].amount === 250.5, "allocation amount = total");
  assert(payCall.body?.customer?.id === "cust-9", "customer carried from invoice");
  assert(!payCall.body?.supplier, "no supplier on AR payment");
}

// ---------------------------------------------------------------------------
// 3. Missing invoice → fail-fast on invoices-get, no payment created
// ---------------------------------------------------------------------------
console.log("Test: missing invoice aborts, no payment posted");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-missing": {
      __status: 404,
      status_code: 404,
      type_name: "EntityNotFoundError",
      message: "Invoice not found",
    },
  });

  const res = await exec.handler(
    {
      name: "apideck-receive-customer-payment",
      arguments: { invoice_id: "inv-missing", account_id: "acc-bank" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "accounting-invoices-get", "failingStep names invoice lookup");
  assert(payload.invoice_id === "inv-missing", "invoice_id echoed in error");
  assert(stub.calls.length === 1, "no payment POST after lookup failed");
}

// ---------------------------------------------------------------------------
// 4. Connector-quirk: invoice has `total` not `total_amount` (QB shape)
// ---------------------------------------------------------------------------
console.log("Test: falls back to `balance` then `total` when total_amount absent");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-qb": {
      data: {
        id: "inv-qb",
        // NO total_amount; QB-style fields
        balance: 50,
        total: 100,
        currency: "USD",
        customer: { id: "c1" },
      },
    },
    "/accounting/payments": { data: { id: "pay-q1" } },
  });

  const res = await exec.handler(
    { name: "apideck-receive-customer-payment", arguments: { invoice_id: "inv-qb", account_id: "a1" } },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(payload.amount === 50, `amount = balance (50), got ${payload.amount}`);
  assert(payload.invoice_total === 50, "invoice_total reflects balance");
}

// ---------------------------------------------------------------------------
// 5. Partial payment: explicit amount < outstanding → partial:true
// ---------------------------------------------------------------------------
console.log("Test: explicit amount < invoice total → partial:true");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-1": {
      data: { id: "inv-1", total_amount: 1000, currency: "USD", customer: { id: "c1" } },
    },
    "/accounting/payments": { data: { id: "pay-p1" } },
  });

  const res = await exec.handler(
    {
      name: "apideck-receive-customer-payment",
      arguments: { invoice_id: "inv-1", account_id: "acc-1", amount: 400 },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(payload.partial === true, "partial:true on under-payment");
  assert(payload.amount === 400, "amount honoured");
  const payCall = stub.calls.find((c) => c.url.includes("/payments"));
  assert(payCall?.body?.allocations[0].amount === 400, "allocation amount = explicit amount");
}

// ---------------------------------------------------------------------------
// 6. Zero-balance invoice without override → validate-amount error
// ---------------------------------------------------------------------------
console.log("Test: zero-balance invoice without explicit amount errors out");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-zero": {
      data: { id: "inv-zero", balance: 0, total: 100, currency: "USD", customer: { id: "c1" } },
    },
  });

  const res = await exec.handler(
    { name: "apideck-receive-customer-payment", arguments: { invoice_id: "inv-zero", account_id: "a1" } },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "validate-amount", "failingStep is validate-amount");
  assert(stub.calls.length === 1, "no payment POST attempted");
}

// ---------------------------------------------------------------------------
// 7. Payment-create failure surfaces as failingStep
// ---------------------------------------------------------------------------
console.log("Test: payment-create failure carries failingStep + upstream");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-99": {
      data: { id: "inv-99", total_amount: 100, currency: "USD", customer: { id: "c2" } },
    },
    "/accounting/payments": {
      __status: 422,
      status_code: 422,
      type_name: "ValidationError",
      message: "account.id is invalid",
    },
  });

  const res = await exec.handler(
    {
      name: "apideck-receive-customer-payment",
      arguments: { invoice_id: "inv-99", account_id: "acc-bad" },
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

// ---------------------------------------------------------------------------
// 8. UrlElicitation propagates (not swallowed by runStep)
// ---------------------------------------------------------------------------
console.log("Test: McpError elicitation thrown, not wrapped");
{
  const stub = stubFetch({
    "/accounting/invoices/inv-X": {
      __status: 401,
      message: "Connection is missing — please re-authorise the connection.",
      detail: { context: { connector: "xero", unified_api: "accounting" } },
    },
    "/vault/sessions": { data: { session_uri: "https://vault.apideck.com/session/test-jwt" } },
  });

  let thrown;
  try {
    await exec.handler(
      {
        name: "apideck-receive-customer-payment",
        arguments: { invoice_id: "inv-X", account_id: "acc-1" },
      },
      { signal: new AbortController().signal },
    );
  } catch (err) {
    thrown = err;
  }
  stub.restore();

  assert(thrown?.name === "McpError", `McpError thrown, got ${thrown?.name}`);
  const url = thrown?.data?.elicitations?.[0]?.url;
  assert(
    typeof url === "string" && url.includes("vault.apideck.com/session"),
    "consent URL preserved through workflow",
  );
}

console.log(
  `\n${failures === 0 ? "All receive-payment tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
