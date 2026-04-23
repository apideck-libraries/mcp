/**
 * Smoke test for the custom generator: verifies that a sample of
 * generated tools carry sane metadata, and that callApideck produces the
 * expected HTTP request shape (method/url/headers) without actually
 * hitting the network.
 */

import { generatedTools } from "../esm/src/gen/tools.js";

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) {
    console.error(`  FAIL: ${msg}`);
    failures++;
  } else {
    console.log(`  PASS: ${msg}`);
  }
};

// --- 1. Shape ----------------------------------------------------------------
console.log("Test: generated tool array shape");
assert(Array.isArray(generatedTools), "generatedTools is an array");
assert(generatedTools.length >= 220, `has >=220 tools (got ${generatedTools.length})`);

const byName = new Map(generatedTools.map((t) => [t.name, t]));
const invoicesList = byName.get("accounting-invoices-list");
assert(invoicesList, "accounting-invoices-list exists");
assert(invoicesList.scopes[0] === "read", "GET tool has read scope");
assert(invoicesList.annotations.readOnlyHint === true, "GET tool readOnlyHint");

const invoiceDelete = byName.get("accounting-invoices-delete");
assert(invoiceDelete, "accounting-invoices-delete exists");
assert(invoiceDelete.scopes[0] === "destructive", "DELETE tool has destructive scope");
assert(invoiceDelete.annotations.destructiveHint === true, "DELETE tool destructiveHint");

const invoicesCreate = byName.get("accounting-invoices-create");
assert(invoicesCreate, "accounting-invoices-create exists");
assert(invoicesCreate.scopes[0] === "write", "POST tool has write scope");

// --- 2. Stubbed HTTP: read-only GET ------------------------------------------
console.log("Test: GET tool routes a well-formed HTTP request");
const captured = [];
const origFetch = globalThis.fetch;
globalThis.fetch = async (url, opts) => {
  captured.push({ url: String(url), method: opts.method, headers: Object.fromEntries(opts.headers.entries()) });
  return new Response('{"data":[]}', { status: 200, headers: { "content-type": "application/json" } });
};

const fakeClient = {
  _options: {
    appId: "app-xyz",
    consumerId: "consumer-xyz",
    security: { apiKey: "secret-abc" },
  },
};

const result = await invoicesList.tool(
  fakeClient,
  { request: { limit: 5, "x-apideck-service-id": "quickbooks", filter: { updated_since: "2024-01-01" } } },
  { signal: undefined },
);
globalThis.fetch = origFetch;

assert(captured.length === 1, "one fetch call");
const req = captured[0];
assert(req.method === "GET", "GET method");
assert(req.url.startsWith("https://unify.apideck.com/accounting/invoices"), "base URL + path");
assert(req.url.includes("limit=5"), "limit encoded in query");
assert(req.headers["x-apideck-service-id"] === "quickbooks", "service_id mapped to header");
assert(req.url.includes("filter%5Bupdated_since%5D=2024-01-01"), "deepObject filter encoded");
assert(req.headers["authorization"] === "Bearer secret-abc", "bearer auth header set");
assert(req.headers["x-apideck-app-id"] === "app-xyz", "app id header set");
assert(req.headers["x-apideck-consumer-id"] === "consumer-xyz", "consumer id header set");
assert(result.isError !== true, "successful response is not flagged as error");

// --- 3. Stubbed HTTP: path param + JSON body --------------------------------
console.log("Test: PUT tool routes path param + JSON body");
const invoicesUpdate = byName.get("accounting-invoices-update");
assert(invoicesUpdate, "accounting-invoices-update exists");
captured.length = 0;
globalThis.fetch = async (url, opts) => {
  captured.push({
    url: String(url),
    method: opts.method,
    headers: Object.fromEntries(opts.headers.entries()),
    body: opts.body,
  });
  return new Response('{"ok":true}', { status: 200, headers: { "content-type": "application/json" } });
};
await invoicesUpdate.tool(
  fakeClient,
  { request: { id: "inv-123", body: { total: 100 } } },
  { signal: undefined },
);
globalThis.fetch = origFetch;

const putReq = captured[0];
assert(putReq.method === "PATCH", "PATCH method (Apideck uses PATCH for updates)");
assert(putReq.url.includes("/accounting/invoices/inv-123"), "path param substituted");
assert(putReq.headers["content-type"] === "application/json", "json content-type set");
assert(typeof putReq.body === "string" && JSON.parse(putReq.body).total === 100, "body shipped as JSON");

// --- 4. Error response flagged ---------------------------------------------
console.log("Test: non-2xx response sets isError");
captured.length = 0;
globalThis.fetch = async () => new Response('{"error":"nope"}', { status: 401, headers: { "content-type": "application/json" } });
const errResult = await invoicesList.tool(fakeClient, { request: {} }, { signal: undefined });
globalThis.fetch = origFetch;
assert(errResult.isError === true, "401 → isError true");
assert(errResult.content[0].text.includes("nope"), "error body returned to LLM");

console.log(`\n${failures === 0 ? "All gen tests passed" : `${failures} test(s) failed`}`);
process.exit(failures === 0 ? 0 : 1);
