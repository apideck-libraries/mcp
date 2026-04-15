/**
 * MCP Server Integration Tests
 *
 * Tests the Apideck MCP server against a running instance.
 * Supports both local and remote endpoints.
 *
 * Usage:
 *   npx tsx test/mcp-server.test.ts                          # local (localhost:4567)
 *   MCP_URL=https://mcp.apideck.dev/mcp npx tsx test/mcp-server.test.ts  # remote
 */

const MCP_URL = process.env.MCP_URL || "http://localhost:4567/mcp";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json, text/event-stream",
};

interface TestResult {
  name: string;
  passed: boolean;
  duration: number;
  error?: string;
}

const results: TestResult[] = [];

async function mcpCall(method: string, params: Record<string, unknown> = {}, id = 1) {
  const res = await fetch(MCP_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ jsonrpc: "2.0", id, method, params }),
  });

  const text = await res.text();
  const dataLine = text
    .split("\n")
    .find((l) => l.startsWith("data: "));

  if (!dataLine) {
    throw new Error(`No data line in response: ${text.slice(0, 200)}`);
  }

  return JSON.parse(dataLine.replace("data: ", ""));
}

async function mcpToolCall(name: string, args: Record<string, unknown> = {}, id = 1) {
  return mcpCall("tools/call", { name, arguments: args }, id);
}

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
}

async function test(name: string, fn: () => Promise<void>) {
  const start = Date.now();
  try {
    await fn();
    results.push({ name, passed: true, duration: Date.now() - start });
    console.log(`  \x1b[32m✓\x1b[0m ${name} (${Date.now() - start}ms)`);
  } catch (e) {
    const error = e instanceof Error ? e.message : String(e);
    results.push({ name, passed: false, duration: Date.now() - start, error });
    console.log(`  \x1b[31m✗\x1b[0m ${name} (${Date.now() - start}ms)`);
    console.log(`    ${error}`);
  }
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

async function run() {
  console.log(`\nTesting MCP server at ${MCP_URL}\n`);

  // -- Protocol --

  await test("initialize: returns server info and protocol version", async () => {
    const res = await mcpCall("initialize", {
      protocolVersion: "2025-03-26",
      capabilities: {},
      clientInfo: { name: "test-suite", version: "1.0" },
    });
    assert(res.result?.serverInfo?.name === "ApideckMcp", `unexpected name: ${res.result?.serverInfo?.name}`);
    assert(res.result?.protocolVersion === "2025-03-26", "wrong protocol version");
    assert(res.result?.capabilities?.tools !== undefined, "missing tools capability");
  });

  await test("tools/list: returns meta-tools in dynamic mode", async () => {
    const res = await mcpCall("tools/list", {}, 2);
    const tools = res.result?.tools;
    assert(Array.isArray(tools), "tools should be an array");
    const names = tools.map((t: { name: string }) => t.name);
    assert(names.includes("list_tools"), "missing list_tools");
    assert(names.includes("describe_tool_input"), "missing describe_tool_input");
    assert(names.includes("execute_tool"), "missing execute_tool");
    assert(names.includes("list_scopes"), "missing list_scopes");
    assert(tools.length === 4, `expected 4 meta-tools, got ${tools.length}`);
  });

  // -- Scopes --

  await test("list_scopes: returns read, write, destructive", async () => {
    const res = await mcpToolCall("list_scopes", {}, 3);
    const text = res.result?.content?.[0]?.text;
    assert(text.includes("read"), "missing read scope");
    assert(text.includes("write"), "missing write scope");
    assert(text.includes("destructive"), "missing destructive scope");
  });

  // -- Tool Discovery --

  await test("list_tools: returns all 229 tools with no filter", async () => {
    const res = await mcpToolCall("list_tools", {}, 4);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(Array.isArray(tools), "should return array");
    assert(tools.length === 229, `expected 229 tools, got ${tools.length}`);
  });

  await test("list_tools: filters by search term 'invoices'", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["invoices"] }, 5);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length >= 4, `expected at least 4 invoice tools, got ${tools.length}`);
    assert(
      tools.every((t: { name: string }) => t.name.includes("invoice")),
      "all results should contain 'invoice'"
    );
  });

  await test("list_tools: filters by scope 'read'", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["read"] }, 6);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length > 0, "should return read-scoped tools");
    assert(
      tools.every((t: { scopes: string[] }) => t.scopes?.includes("read")),
      "all results should have read scope"
    );
  });

  // -- API Coverage --

  await test("list_tools: contains accounting tools", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["accounting"] }, 7);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length >= 100, `expected 100+ accounting tools, got ${tools.length}`);
  });

  await test("list_tools: contains HRIS tools", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["hris"] }, 8);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length >= 20, `expected 20+ HRIS tools, got ${tools.length}`);
  });

  await test("list_tools: contains file storage tools", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["file-storage"] }, 9);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length >= 20, `expected 20+ file storage tools, got ${tools.length}`);
  });

  await test("list_tools: contains vault tools", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["vault"] }, 10);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length >= 15, `expected 15+ vault tools, got ${tools.length}`);
  });

  await test("list_tools: contains proxy tools", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["proxy"] }, 11);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length >= 5, `expected 5+ proxy tools, got ${tools.length}`);
  });

  // -- Schema Introspection --

  await test("describe_tool_input: returns schema for accounting-invoices-list", async () => {
    const res = await mcpToolCall("describe_tool_input", {
      tool_names: ["accounting-invoices-list"],
    }, 12);
    const text = res.result?.content?.[0]?.text;
    assert(!res.result?.isError, `error: ${text}`);
    assert(text.includes("input_schema"), "should contain input_schema tag");
    assert(text.includes("accounting-invoices-list"), "should reference tool name");
    assert(text.includes("cursor") || text.includes("limit"), "should contain parameter names");
  });

  await test("describe_tool_input: returns schema for accounting-bills-create", async () => {
    const res = await mcpToolCall("describe_tool_input", {
      tool_names: ["accounting-bills-create"],
    }, 13);
    const text = res.result?.content?.[0]?.text;
    assert(!res.result?.isError, `error: ${text}`);
    assert(text.includes("input_schema"), "should contain input_schema tag");
  });

  await test("describe_tool_input: returns schema for hris-employees-list", async () => {
    const res = await mcpToolCall("describe_tool_input", {
      tool_names: ["hris-employees-list"],
    }, 14);
    const text = res.result?.content?.[0]?.text;
    assert(!res.result?.isError, `error: ${text}`);
    assert(text.includes("input_schema"), "should contain input_schema tag");
  });

  await test("describe_tool_input: handles multiple tools at once", async () => {
    const res = await mcpToolCall("describe_tool_input", {
      tool_names: ["accounting-invoices-list", "accounting-payments-create"],
    }, 15);
    const text = res.result?.content?.[0]?.text;
    assert(!res.result?.isError, `error: ${text}`);
    assert(
      text.includes("accounting-invoices-list") && text.includes("accounting-payments-create"),
      "should contain both tool schemas"
    );
  });

  await test("describe_tool_input: returns error for unknown tool", async () => {
    const res = await mcpToolCall("describe_tool_input", {
      tool_names: ["nonexistent-tool"],
    }, 16);
    const text = res.result?.content?.[0]?.text;
    assert(text.includes("Unknown tools") || text.includes("nonexistent"), "should flag unknown tool");
  });

  // -- Execute (no API key = expected auth error) --

  await test("execute_tool: returns auth error without valid credentials", async () => {
    const res = await mcpToolCall("execute_tool", {
      tool_name: "accounting-invoices-list",
      input: { request: { limit: 1 } },
    }, 17);
    const text = res.result?.content?.[0]?.text;
    // Without valid API key, should get an auth error or HTTP error
    assert(
      res.result?.isError === true || text.includes("Unauthorized") || text.includes("error") || text.includes("401"),
      "should return error without valid API key"
    );
  });

  await test("execute_tool: returns error for unknown tool", async () => {
    const res = await mcpToolCall("execute_tool", {
      tool_name: "nonexistent-tool",
      input: {},
    }, 18);
    const text = res.result?.content?.[0]?.text;
    assert(
      res.result?.isError === true || text.includes("not found") || text.includes("Unknown"),
      "should return error for unknown tool"
    );
  });

  // -- Edge Cases --

  await test("list_tools: empty search returns all tools", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: [] }, 19);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length === 229, `expected 229, got ${tools.length}`);
  });

  await test("list_tools: nonsense search returns empty", async () => {
    const res = await mcpToolCall("list_tools", { search_terms: ["zzzzxqqq999"] }, 20);
    const tools = JSON.parse(res.result?.content?.[0]?.text);
    assert(tools.length === 0, `expected 0 results for nonsense query, got ${tools.length}`);
  });

  await test("GET endpoint returns a response", async () => {
    // Vercel serves JSON at /mcp, local Speakeasy serves landing page at /
    const baseUrl = MCP_URL.replace(/\/mcp$/, "");
    const urls = [MCP_URL, baseUrl + "/"];
    let found = false;
    for (const url of urls) {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (res.status === 200) {
        found = true;
        break;
      }
    }
    assert(found, "neither /mcp nor / returned 200");
  });

  // -- Summary --

  console.log("\n" + "─".repeat(60));
  const passed = results.filter((r) => r.passed).length;
  const failed = results.filter((r) => !r.passed).length;
  const total = results.length;
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

  if (failed === 0) {
    console.log(`\x1b[32m${passed}/${total} tests passed\x1b[0m (${totalDuration}ms)`);
  } else {
    console.log(`\x1b[31m${failed}/${total} tests failed\x1b[0m (${totalDuration}ms)`);
    console.log("\nFailed tests:");
    results
      .filter((r) => !r.passed)
      .forEach((r) => console.log(`  - ${r.name}: ${r.error}`));
  }

  process.exit(failed > 0 ? 1 : 0);
}

run().catch((e) => {
  console.error("Test suite failed:", e);
  process.exit(1);
});
