/**
 * Tests for Phase 3 workflow tools — intent-grouped composites over
 * generated endpoint tools.
 *
 * Covers apideck-month-end-close-check:
 *   - registered alongside the 330 endpoint tools
 *   - fires exactly 4 upstream endpoints in parallel
 *   - aggregates their `data` fields into a single JSON result
 *   - falls back to today's date when report_as_of_date omitted
 *   - returns partial snapshots when some steps fail
 *   - distinguishes "unsupported by connector" (404 / UnsupportedFilters)
 *     from real upstream errors so the LLM doesn't retry hopeless calls
 *   - flags isError only when EVERY step failed
 */

import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";

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
    security: async () => ({ apiKey: "sk_test_workflow" }),
  },
});

function stubFetch(routes) {
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, opts = {}) => {
    const url = input instanceof Request ? input.url : String(input);
    calls.push({ url, method: opts.method });
    for (const [pattern, body] of Object.entries(routes)) {
      if (url.includes(pattern)) {
        return new Response(typeof body === "string" ? body : JSON.stringify(body), {
          status: typeof body === "string" ? 200 : (body.__status ?? 200),
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
// 1. Workflow tool is registered alongside endpoint tools
// ---------------------------------------------------------------------------
console.log("Test: workflow tool is registered");
{
  const booted = bootDefault();
  const names = booted.tools.map((t) => t.name);
  assert(
    names.includes("apideck-month-end-close-check"),
    "apideck-month-end-close-check in registered tools",
  );
  assert(names.includes("accounting-invoices-list"), "endpoint tools still present");
  assert(names.length > 330, `count > 330 (got ${names.length})`);
}

// ---------------------------------------------------------------------------
// 2. Workflow dispatches 4 endpoints in parallel, aggregates results
// ---------------------------------------------------------------------------
console.log("Test: month-end-close fans out 4 endpoints and aggregates");
{
  const stub = stubFetch({
    "/accounting/aged-creditors": { data: { summary: "aged-creditors" } },
    "/accounting/aged-debtors": { data: { summary: "aged-debtors" } },
    "/accounting/balance-sheet": { data: { assets: 100 } },
    "/accounting/profit-and-loss": { data: { revenue: 200 } },
  });

  const booted = bootDefault();
  const execTool = booted.server._registeredTools.execute_tool;
  const res = await execTool.handler(
    {
      name: "apideck-month-end-close-check",
      arguments: { report_as_of_date: "2026-03-31", "x-apideck-service-id": "xero" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(stub.calls.length === 4, `4 upstream calls (got ${stub.calls.length})`);
  const hit = (p) => stub.calls.some((c) => c.url.includes(p));
  assert(hit("/accounting/aged-creditors"), "aged-creditors hit");
  assert(hit("/accounting/aged-debtors"), "aged-debtors hit");
  assert(hit("/accounting/balance-sheet"), "balance-sheet hit");
  assert(hit("/accounting/profit-and-loss"), "profit-and-loss hit");

  const payload = JSON.parse(res.content[0].text);
  assert(payload.report_as_of_date === "2026-03-31", "date echoed");
  assert(payload.service_id === "xero", "service_id echoed");
  assert(payload.aged_creditors.summary === "aged-creditors", "aged-creditors data unwrapped");
  assert(payload.aged_debtors.summary === "aged-debtors", "aged-debtors data unwrapped");
  assert(payload.balance_sheet.assets === 100, "balance-sheet data unwrapped");
  assert(payload.profit_and_loss.revenue === 200, "profit-and-loss data unwrapped");
  assert(res.isError !== true, "not flagged as error");
}

// ---------------------------------------------------------------------------
// 3. Defaults report_as_of_date to today when omitted
// ---------------------------------------------------------------------------
console.log("Test: defaults report_as_of_date to today");
{
  const stub = stubFetch({
    "/accounting/aged-creditors": { data: {} },
    "/accounting/aged-debtors": { data: {} },
    "/accounting/balance-sheet": { data: {} },
    "/accounting/profit-and-loss": { data: {} },
  });
  const booted = bootDefault();
  const execTool = booted.server._registeredTools.execute_tool;
  const res = await execTool.handler(
    { name: "apideck-month-end-close-check", arguments: {} },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  const today = new Date().toISOString().slice(0, 10);
  assert(payload.report_as_of_date === today, `date = today (got ${payload.report_as_of_date})`);
}

// ---------------------------------------------------------------------------
// 4. Single upstream failure → partial snapshot with warning, NOT isError
// ---------------------------------------------------------------------------
console.log("Test: single upstream failure returns partial snapshot");
{
  const stub = stubFetch({
    "/accounting/aged-creditors": { data: { c: 1 } },
    "/accounting/aged-debtors": { __status: 500, message: "Xero is down" },
    "/accounting/balance-sheet": { data: { b: 2 } },
    "/accounting/profit-and-loss": { data: { p: 3 } },
  });
  const booted = bootDefault();
  const execTool = booted.server._registeredTools.execute_tool;
  const res = await execTool.handler(
    { name: "apideck-month-end-close-check", arguments: {} },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(res.isError !== true, "not flagged as error when 3/4 succeed");
  assert(payload.aged_creditors.c === 1, "succeeded steps still populated");
  assert(payload.balance_sheet.b === 2, "balance-sheet present");
  assert(payload.profit_and_loss.p === 3, "p&l present");
  assert(payload.aged_debtors.error, "failed step carries `error` field");
  assert(Array.isArray(payload.warnings) && payload.warnings.length === 1, "1 warning");
  assert(
    payload.warnings[0].startsWith("aged_debtors:"),
    `warning names the failing step (got ${payload.warnings[0]})`,
  );
}

// ---------------------------------------------------------------------------
// 5. 404 ConnectorExecutionError → unsupported (not error)
// ---------------------------------------------------------------------------
console.log("Test: 404 ConnectorExecutionError marked unsupported");
{
  const stub = stubFetch({
    "/accounting/aged-creditors": {
      __status: 404,
      status_code: 404,
      type_name: "ConnectorExecutionError",
      message: "Aged-creditors not implemented for Odoo",
    },
    "/accounting/aged-debtors": { data: { d: 1 } },
    "/accounting/balance-sheet": { data: { b: 2 } },
    "/accounting/profit-and-loss": { data: { p: 3 } },
  });
  const booted = bootDefault();
  const execTool = booted.server._registeredTools.execute_tool;
  const res = await execTool.handler(
    { name: "apideck-month-end-close-check", arguments: { "x-apideck-service-id": "odoo" } },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(res.isError !== true, "partial snapshot, not error");
  assert(payload.aged_creditors.unsupported === true, "marked unsupported");
  assert(
    typeof payload.aged_creditors.reason === "string"
      && payload.aged_creditors.reason.includes("not implemented"),
    "reason carries upstream message",
  );
  assert(
    payload.warnings.some((w) => w.includes("aged_creditors: unsupported on odoo")),
    "warning mentions service_id",
  );
}

// ---------------------------------------------------------------------------
// 6. All steps fail → isError=true
// ---------------------------------------------------------------------------
console.log("Test: all-fail surfaces as isError");
{
  const stub = stubFetch({
    "/accounting/aged-creditors": { __status: 500, message: "boom" },
    "/accounting/aged-debtors": { __status: 500, message: "boom" },
    "/accounting/balance-sheet": { __status: 500, message: "boom" },
    "/accounting/profit-and-loss": { __status: 500, message: "boom" },
  });
  const booted = bootDefault();
  const execTool = booted.server._registeredTools.execute_tool;
  const res = await execTool.handler(
    { name: "apideck-month-end-close-check", arguments: {} },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError when 0/4 succeed");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.warnings.length === 4, "4 warnings");
}

console.log(
  `\n${failures === 0 ? "All workflow tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
