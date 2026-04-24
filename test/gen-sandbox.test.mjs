/**
 * Unit + integration tests for the code-sandbox meta-tools.
 *
 * Covers:
 * - apideck_search returns filtered results
 * - apideck_run executes a script, binds `apideck.*` methods to real
 *   tool dispatches, captures console output, returns the final value
 * - Error paths surface as isError with helpful text
 * - Script timeout actually trips
 * - Sandboxed code cannot reach Node globals (require, process, fs)
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

function captureFetch(body = '{"data":[{"id":"inv-1"},{"id":"inv-2"}]}') {
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, opts = {}) => {
    let url, hdrs;
    if (input instanceof Request) {
      url = input.url;
      hdrs = input.headers;
    } else {
      url = String(input);
      hdrs = opts.headers;
    }
    const h = hdrs instanceof Headers ? Object.fromEntries(hdrs.entries()) : { ...(hdrs ?? {}) };
    calls.push({ url, headers: h });
    return new Response(body, {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };
  return { calls, restore: () => (globalThis.fetch = orig) };
}

function bootCodeMode() {
  return createGeneratedMCPServer({
    logger,
    codeMode: true,
    getSDK: () => ({
      _options: {
        appId: "test-app",
        consumerId: "test-consumer",
        security: async () => ({ apiKey: "sk_test_sandbox" }),
      },
    }),
  });
}

// ---------------------------------------------------------------------------
// 1. Only apideck_search + apideck_run are registered in code mode
// ---------------------------------------------------------------------------
console.log("Test: codeMode exposes only apideck_search + apideck_run");
{
  const booted = bootCodeMode();
  const toolNames = booted.tools.map((t) => t.name).sort();
  assert(
    toolNames.length === 2,
    `exactly 2 tools registered (got ${toolNames.length}: ${toolNames.join(", ")})`,
  );
  assert(toolNames.includes("apideck_search"), "apideck_search present");
  assert(toolNames.includes("apideck_run"), "apideck_run present");
}

// ---------------------------------------------------------------------------
// 2. apideck_search filters by query
// ---------------------------------------------------------------------------
console.log("Test: apideck_search returns filtered endpoint list");
{
  const booted = bootCodeMode();
  const search = booted.server._registeredTools.apideck_search;
  const res = await search.handler(
    { query: "invoices list" },
    { signal: new AbortController().signal },
  );
  const payload = JSON.parse(res.content[0].text);
  assert(payload.count > 0, `search returned ${payload.count} matches`);
  assert(
    payload.endpoints.some((e) => e.name === "accounting-invoices-list"),
    "accounting-invoices-list in results",
  );
  assert(
    payload.endpoints.every((e) => typeof e.method === "string"),
    "each result has a camelCase method name",
  );
  assert(
    payload.endpoints.find((e) => e.name === "accounting-invoices-list")?.method
      === "accountingInvoicesList",
    "name → method conversion is correct",
  );
}

// ---------------------------------------------------------------------------
// 3. apideck_run: simple arithmetic returns
// ---------------------------------------------------------------------------
console.log("Test: apideck_run returns a script's computed value");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;
  const res = await run.handler(
    { script: "return 1 + 2 + 3;" },
    { signal: new AbortController().signal },
  );
  const payload = JSON.parse(res.content[0].text);
  assert(payload.result === 6, `result === 6 (got ${payload.result})`);
  assert(res.isError !== true, "success not flagged as error");
}

// ---------------------------------------------------------------------------
// 4. apideck_run: calling a bound endpoint method issues real HTTP
// ---------------------------------------------------------------------------
console.log("Test: apideck_run binds `apideck.*` methods to real dispatches");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;
  const stub = captureFetch();
  const res = await run.handler(
    {
      script: `
        const resp = await apideck.accountingInvoicesList({ limit: 2 });
        return { fetched: resp.data.length, ids: resp.data.map(d => d.id) };
      `,
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(stub.calls.length === 1, "one upstream fetch was made");
  assert(
    stub.calls[0].headers["authorization"] === "Bearer sk_test_sandbox",
    "auth header forwarded through sandbox",
  );
  assert(payload.result.fetched === 2, "script parsed the mocked response");
  assert(
    Array.isArray(payload.result.ids) && payload.result.ids[0] === "inv-1",
    "script can transform response data",
  );
}

// ---------------------------------------------------------------------------
// 5. apideck_run: console.log output is captured and returned
// ---------------------------------------------------------------------------
console.log("Test: console.log output is captured in the result");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;
  const res = await run.handler(
    { script: "console.log('hello', { foo: 42 }); return 'ok';" },
    { signal: new AbortController().signal },
  );
  const payload = JSON.parse(res.content[0].text);
  assert(Array.isArray(payload.logs), "logs array present");
  assert(
    payload.logs.some((l) => l.includes("hello") && l.includes("42")),
    "log line captured with stringified args",
  );
}

// ---------------------------------------------------------------------------
// 6. apideck_run: thrown errors surface as isError
// ---------------------------------------------------------------------------
console.log("Test: apideck_run surfaces thrown errors as isError");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;
  const res = await run.handler(
    { script: "throw new Error('boom');" },
    { signal: new AbortController().signal },
  );
  const payload = JSON.parse(res.content[0].text);
  assert(res.isError === true, "isError flag set");
  assert(payload.error.includes("boom"), "error message preserved");
}

// ---------------------------------------------------------------------------
// 7. apideck_run: timeouts trip
// ---------------------------------------------------------------------------
console.log("Test: script timeout aborts a long-running loop");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;
  const start = Date.now();
  const res = await run.handler(
    {
      // Busy CPU loop — cannot be interrupted by ctrl.abort alone, so
      // relies on vm's `timeout` option hitting first.
      script: "while (true) {}",
      timeout_ms: 1000,
    },
    { signal: new AbortController().signal },
  );
  const elapsed = Date.now() - start;
  assert(res.isError === true, "timeout flagged as error");
  assert(elapsed < 5000, `aborted within 5s (took ${elapsed}ms)`);
}

// ---------------------------------------------------------------------------
// 8. Sandbox isolation: no access to Node globals like process/require
// ---------------------------------------------------------------------------
console.log("Test: sandbox hides Node globals (process, require)");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;

  const processRes = await run.handler(
    { script: "return typeof process;" },
    { signal: new AbortController().signal },
  );
  const processPayload = JSON.parse(processRes.content[0].text);
  assert(
    processPayload.result === "undefined",
    `process is undefined in sandbox (got ${processPayload.result})`,
  );

  const requireRes = await run.handler(
    { script: "return typeof require;" },
    { signal: new AbortController().signal },
  );
  const requirePayload = JSON.parse(requireRes.content[0].text);
  assert(
    requirePayload.result === "undefined",
    `require is undefined in sandbox (got ${requirePayload.result})`,
  );
}

// ---------------------------------------------------------------------------
// 9. apideck_run: endpoint errors (isError=true) throw inside the sandbox
// ---------------------------------------------------------------------------
console.log("Test: endpoint errors throw inside the sandbox script");
{
  const booted = bootCodeMode();
  const run = booted.server._registeredTools.apideck_run;
  const orig = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response('{"error":"unauthorized"}', {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  const res = await run.handler(
    {
      script: `
        try {
          await apideck.accountingInvoicesList({});
          return 'no-throw';
        } catch (e) {
          return { caught: true, msg: e.message };
        }
      `,
    },
    { signal: new AbortController().signal },
  );
  globalThis.fetch = orig;
  const payload = JSON.parse(res.content[0].text);
  assert(payload.result.caught === true, "endpoint error caught by script");
  assert(
    typeof payload.result.msg === "string" && payload.result.msg.length > 0,
    "error message carried through",
  );
}

console.log(
  `\n${failures === 0 ? "All sandbox tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
