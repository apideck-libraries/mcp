/**
 * Smoke test: starts the MCP server, sends initialize + tool calls,
 * and verifies valid JSON-RPC responses.
 */

import { exec } from "node:child_process";
import { setTimeout } from "node:timers/promises";

const PORT = 9876;
const BASE = `http://localhost:${PORT}/mcp`;
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json, text/event-stream",
};

function rpc(id, method, params) {
  return JSON.stringify({ jsonrpc: "2.0", id, method, params });
}

function parseSSE(text) {
  const line = text.split("\n").find((l) => l.startsWith("data:"));
  if (!line) throw new Error(`No SSE data line in response:\n${text}`);
  return JSON.parse(line.slice(5));
}

let server;
let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`  FAIL: ${message}`);
    failures++;
  } else {
    console.log(`  PASS: ${message}`);
  }
}

try {
  // Start server
  server = exec(
    `node bin/mcp-server.js serve --port ${PORT} --mode dynamic --scope read --scope write --api-key dummy --app-id test-app --consumer-id test-consumer`,
    { cwd: process.cwd() },
  );
  server.stderr.on("data", () => {});
  await setTimeout(4000);

  // 1. Initialize
  console.log("Test: initialize");
  const initResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(1, "initialize", {
      protocolVersion: "2025-03-26",
      capabilities: {},
      clientInfo: { name: "smoke-test", version: "1.0" },
    }),
  });
  const init = parseSSE(await initResp.text());
  assert(init.result?.serverInfo?.name === "ApideckMcp", "server name is ApideckMcp");
  assert(init.result?.protocolVersion === "2025-03-26", "protocol version matches");
  assert(init.result?.capabilities?.tools != null, "tools capability present");

  // 2. List tools
  console.log("Test: list_tools");
  const listResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(2, "tools/call", { name: "list_tools", arguments: {} }),
  });
  const list = parseSSE(await listResp.text());
  const tools = JSON.parse(list.result.content[0].text);
  assert(Array.isArray(tools), "list_tools returns an array");
  assert(tools.length > 0, `found ${tools.length} tools`);
  assert(tools[0].name && tools[0].description, "tools have name and description");

  // 3. Describe tool input
  console.log("Test: describe_tool_input");
  const descResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(3, "tools/call", {
      name: "describe_tool_input",
      arguments: { tool_names: [tools[0].name] },
    }),
  });
  const desc = parseSSE(await descResp.text());
  assert(!desc.result.isError, "describe_tool_input succeeds");
  assert(
    desc.result.content[0].text.includes("input_schema"),
    "response contains input_schema",
  );

  // 4. Execute tool (will fail auth but should return structured error, not crash)
  console.log("Test: execute_tool (expect auth error)");
  const execResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(4, "tools/call", {
      name: "execute_tool",
      arguments: { name: tools[0].name, arguments: {} },
    }),
  });
  const execResult = parseSSE(await execResp.text());
  assert(execResult.result != null, "execute_tool returns a result");
  assert(execResult.result.content?.[0]?.type === "text", "result has text content");

  // 5. list_tools with search filter
  console.log("Test: list_tools with search_terms");
  const filteredResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(5, "tools/call", {
      name: "list_tools",
      arguments: { search_terms: ["invoice"] },
    }),
  });
  const filtered = parseSSE(await filteredResp.text());
  const filteredTools = JSON.parse(filtered.result.content[0].text);
  assert(Array.isArray(filteredTools), "filtered list_tools returns an array");
  assert(filteredTools.length > 0, "search for 'invoice' returns results");
  assert(filteredTools.length < tools.length, "filtered results are a subset");
  assert(
    filteredTools.every((t) => {
      const hay = `${t.name} ${t.description}`.toLowerCase();
      return hay.includes("invoice");
    }),
    "all filtered results match search term",
  );

  // 6. list_tools with no-match filter returns empty
  console.log("Test: list_tools with non-matching search");
  const emptyFilterResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(6, "tools/call", {
      name: "list_tools",
      arguments: { search_terms: ["zzz_nonexistent_zzz"] },
    }),
  });
  const emptyFilter = parseSSE(await emptyFilterResp.text());
  const emptyTools = JSON.parse(emptyFilter.result.content[0].text);
  assert(Array.isArray(emptyTools) && emptyTools.length === 0, "non-matching search returns empty array");

  // 7. describe_tool_input with unknown tool
  console.log("Test: describe_tool_input with unknown tool");
  const descUnknownResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(7, "tools/call", {
      name: "describe_tool_input",
      arguments: { tool_names: ["nonexistent-tool-xyz"] },
    }),
  });
  const descUnknown = parseSSE(await descUnknownResp.text());
  assert(!descUnknown.result.isError, "describe unknown tool does not set isError");
  assert(
    descUnknown.result.content[0].text.includes("Unknown tools: nonexistent-tool-xyz"),
    "describe unknown tool lists unknown name",
  );

  // 8. describe_tool_input with empty array
  console.log("Test: describe_tool_input with empty array");
  const descEmptyResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(8, "tools/call", {
      name: "describe_tool_input",
      arguments: { tool_names: [] },
    }),
  });
  const descEmpty = parseSSE(await descEmptyResp.text());
  assert(!descEmpty.result.isError, "describe empty array does not set isError");
  assert(
    descEmpty.result.content[0].text === "No tool names provided.",
    "describe empty array returns expected message",
  );

  // 9. describe_tool_input with mix of valid and unknown tools
  console.log("Test: describe_tool_input mixed valid/unknown");
  const descMixResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(9, "tools/call", {
      name: "describe_tool_input",
      arguments: { tool_names: [tools[0].name, "fake-tool"] },
    }),
  });
  const descMix = parseSSE(await descMixResp.text());
  assert(!descMix.result.isError, "describe mixed does not set isError");
  const mixText = descMix.result.content[0].text;
  assert(mixText.includes("input_schema"), "mixed response includes valid schema");
  assert(mixText.includes("Unknown tools: fake-tool"), "mixed response lists unknown tool");

  // 10. execute_tool with unknown tool
  console.log("Test: execute_tool with unknown tool");
  const execUnknownResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(10, "tools/call", {
      name: "execute_tool",
      arguments: { name: "nonexistent-tool-xyz", arguments: {} },
    }),
  });
  const execUnknown = parseSSE(await execUnknownResp.text());
  assert(execUnknown.result.isError === true, "execute unknown tool sets isError");
  assert(
    execUnknown.result.content[0].text.includes("Unknown tool"),
    "execute unknown tool returns error message",
  );

  // 11. execute_tool with invalid input (missing required fields)
  console.log("Test: execute_tool with invalid input");
  const execInvalidResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(11, "tools/call", {
      name: "execute_tool",
      arguments: {
        name: tools[0].name,
        arguments: { request: { invalid_field: "bad" } },
      },
    }),
  });
  const execInvalid = parseSSE(await execInvalidResp.text());
  assert(execInvalid.result != null, "execute with invalid input returns a result");
  // Should get either a validation error or an API error, but not crash
  assert(
    execInvalid.result.content?.[0]?.type === "text",
    "invalid input returns text content",
  );

  // 12. Execute tool with base64 body (binary upload must not crash with double-parse)
  console.log("Test: execute_tool with base64 body (binary upload)");
  const uploadResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(12, "tools/call", {
      name: "execute_tool",
      arguments: {
        name: "accounting-attachments-upload",
        arguments: {
          request: {
            reference_type: "bill",
            reference_id: "test-123",
            body: "JVBERi0xLjQgdGVzdA==", // base64 PDF content
          },
        },
      },
    }),
  });
  const uploadResult = parseSSE(await uploadResp.text());
  assert(uploadResult.result != null, "upload returns a result");
  // Should get an auth/API error, NOT an "expected string, received Uint8Array" validation error
  const uploadText = uploadResult.result.content?.[0]?.text ?? "";
  assert(
    !uploadText.includes("expected string, received Uint8Array"),
    "base64 body is not double-transformed to Uint8Array",
  );

  // 13. execute_tool without input (omitted optional param)
  console.log("Test: execute_tool without input param");
  const execNoInputResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(13, "tools/call", {
      name: "execute_tool",
      arguments: { name: tools[0].name },
    }),
  });
  const execNoInput = parseSSE(await execNoInputResp.text());
  assert(execNoInput.result != null, "execute without input returns a result");
  assert(
    execNoInput.result.content?.[0]?.type === "text",
    "execute without input returns text content",
  );

  // 14. Invalid method returns error
  console.log("Test: invalid method");
  const badResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(14, "nonexistent/method", {}),
  });
  const bad = parseSSE(await badResp.text());
  assert(bad.error != null, "invalid method returns JSON-RPC error");

  // Summary
  console.log(`\n${failures === 0 ? "All tests passed" : `${failures} test(s) failed`}`);
} finally {
  server?.kill();
}

process.exit(failures === 0 ? 0 : 1);
