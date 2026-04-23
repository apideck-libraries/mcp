/**
 * End-to-end test for the custom-generated MCP server.
 *
 * Boots createGeneratedMCPServer, registers all 330 tools, and exercises
 * the dynamic meta-tools (list_tools, describe_tool_input, execute_tool)
 * with fetch stubbed. No network, no Apideck calls.
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

const fakeSDK = {
  _options: {
    appId: "app-xyz",
    consumerId: "consumer-xyz",
    security: { apiKey: "secret-abc" },
  },
};

// -----------------------------------------------------------------------------
// 1. All 330 tools register without throwing
// -----------------------------------------------------------------------------
console.log("Test: server boots with all generated tools");
let booted;
try {
  booted = createGeneratedMCPServer({
    logger,
    dynamic: true,
    getSDK: () => fakeSDK,
  });
} catch (err) {
  assert(false, `server boot threw: ${err.message}`);
  process.exit(1);
}
assert(booted.tools.length === 330, `330 tools registered (got ${booted.tools.length})`);

// -----------------------------------------------------------------------------
// 2. list_tools returns all tools with descriptions
// -----------------------------------------------------------------------------
console.log("Test: dynamic list_tools meta-tool");
const mcpServer = booted.server;
// Access the internal _registeredTools map on the McpServer
const registered = mcpServer._registeredTools;
assert(registered && registered.list_tools, "list_tools is registered");
assert(registered.describe_tool_input, "describe_tool_input is registered");
assert(registered.execute_tool, "execute_tool is registered");
assert(registered.list_scopes, "list_scopes is registered");

const listRes = await registered.list_tools.handler(
  { search_terms: ["invoice"] },
  { signal: new AbortController().signal },
);
const listText = listRes.content[0].text;
const listParsed = JSON.parse(listText);
assert(Array.isArray(listParsed), "list_tools returns JSON array");
assert(
  listParsed.some((t) => t.name === "accounting-invoices-list"),
  "accounting-invoices-list surfaces under 'invoice' search",
);
assert(
  listParsed.every((t) => t.name.includes("invoice") || t.description.toLowerCase().includes("invoice")),
  "all returned tools match the search term",
);

// -----------------------------------------------------------------------------
// 3. describe_tool_input emits useful JSON Schema for a known tool
// -----------------------------------------------------------------------------
console.log("Test: describe_tool_input emits full schema");
const descRes = await registered.describe_tool_input.handler(
  { tool_names: ["accounting-invoices-list"] },
  { signal: new AbortController().signal },
);
const descText = descRes.content[0].text;
assert(descText.includes("input_schema"), "response wraps in <input_schema>");
const schemaJson = descText.split("\n\n")[1]; // second block is the JSON
let schemaObj;
try {
  schemaObj = JSON.parse(schemaJson);
} catch (err) {
  assert(false, `schema JSON failed to parse: ${err.message}`);
}
if (schemaObj) {
  assert(schemaObj.type === "object", "schema is an object type");
  const props = schemaObj.properties ?? {};
  assert("limit" in props, "limit property present");
  assert("filter" in props, "filter property present");
  assert("x-apideck-service-id" in props, "service-id header property present");
  assert(
    typeof props["x-apideck-service-id"]?.description === "string",
    "service-id carries a description",
  );
}

// -----------------------------------------------------------------------------
// 4. execute_tool routes to HTTP + captures analytics
// -----------------------------------------------------------------------------
console.log("Test: execute_tool performs end-to-end dispatch");
const captured = [];
const origFetch = globalThis.fetch;
globalThis.fetch = async (url, opts) => {
  captured.push({ url: String(url), method: opts.method, headers: Object.fromEntries(opts.headers.entries()) });
  return new Response('{"data":[{"id":"inv-1"}]}', { status: 200, headers: { "content-type": "application/json" } });
};

// Rebuild with analytics so we exercise the capture wiring
const captures = [];
const analyticsBooted = createGeneratedMCPServer({
  logger,
  dynamic: true,
  getSDK: () => fakeSDK,
  analytics: {
    async capture(ev) {
      captures.push(ev);
    },
    async flush() {},
  },
});
const execTool = analyticsBooted.server._registeredTools.execute_tool;
const execRes = await execTool.handler(
  {
    name: "accounting-invoices-list",
    arguments: { limit: 10, "x-apideck-service-id": "quickbooks" },
  },
  { signal: new AbortController().signal },
);
globalThis.fetch = origFetch;

assert(captured.length === 1, "one HTTP call dispatched");
assert(captured[0].method === "GET", "GET method");
assert(captured[0].url.includes("/accounting/invoices?"), "invoices endpoint");
assert(captured[0].url.includes("limit=10"), "limit forwarded");
assert(captured[0].headers["x-apideck-service-id"] === "quickbooks", "service-id as header");
assert(captured[0].headers["authorization"] === "Bearer secret-abc", "bearer auth forwarded");
assert(execRes.content[0].text.includes("inv-1"), "response body reaches LLM");
assert(execRes.isError !== true, "success not flagged as error");

assert(captures.length === 1, "analytics capture fired");
assert(captures[0].event === "mcp_tool_called", "mcp_tool_called event");
assert(captures[0].properties.mode === "dynamic", "dynamic mode recorded");
assert(captures[0].properties.tool_name === "accounting-invoices-list", "tool_name captured");
assert(captures[0].properties.is_error === false, "is_error false");

// -----------------------------------------------------------------------------
// 5. execute_tool validates input and rejects bad shapes
// -----------------------------------------------------------------------------
console.log("Test: execute_tool input validation");
const validationRes = await execTool.handler(
  {
    name: "accounting-invoices-update",
    // id is required; omit it
    arguments: {},
  },
  { signal: new AbortController().signal },
);
assert(validationRes.isError === true, "missing required arg flags error");
assert(
  validationRes.content[0].text.toLowerCase().includes("invalid") ||
    validationRes.content[0].text.toLowerCase().includes("required"),
  "error message explains missing field",
);

// -----------------------------------------------------------------------------
// 6. Scope filtering: read-only server excludes destructive tools
// -----------------------------------------------------------------------------
console.log("Test: scope filter excludes destructive tools");
const readOnly = createGeneratedMCPServer({
  logger,
  dynamic: true,
  scopes: ["read"],
  getSDK: () => fakeSDK,
});
const readTools = readOnly.tools.map((t) => t.name);
assert(
  readTools.includes("accounting-invoices-list"),
  "read tool included in read-only mode",
);
assert(
  !readTools.includes("accounting-invoices-delete"),
  "destructive tool excluded in read-only mode",
);

// -----------------------------------------------------------------------------
// 7. Tool allow-list: only the named tool is registered
// -----------------------------------------------------------------------------
console.log("Test: allow-list restricts tool surface");
const single = createGeneratedMCPServer({
  logger,
  dynamic: true,
  allowedTools: ["accounting-invoices-list"],
  getSDK: () => fakeSDK,
});
assert(single.tools.length === 1, "one tool registered via allow-list");
assert(single.tools[0].name === "accounting-invoices-list", "correct tool");

console.log(
  `\n${failures === 0 ? "All gen-server tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
