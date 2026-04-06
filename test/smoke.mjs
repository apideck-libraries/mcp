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
      arguments: { tool_name: tools[0].name, input: {} },
    }),
  });
  const execResult = parseSSE(await execResp.text());
  assert(execResult.result != null, "execute_tool returns a result");
  assert(execResult.result.content?.[0]?.type === "text", "result has text content");

  // 5. Execute tool with base64 body (binary upload must not crash with double-parse)
  console.log("Test: execute_tool with base64 body (binary upload)");
  const uploadResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(5, "tools/call", {
      name: "execute_tool",
      arguments: {
        tool_name: "accounting-attachments-upload",
        input: {
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

  // 6. Invalid method returns error
  console.log("Test: invalid method");
  const badResp = await fetch(BASE, {
    method: "POST",
    headers: HEADERS,
    body: rpc(6, "nonexistent/method", {}),
  });
  const bad = parseSSE(await badResp.text());
  assert(bad.error != null, "invalid method returns JSON-RPC error");

  // Summary
  console.log(`\n${failures === 0 ? "All tests passed" : `${failures} test(s) failed`}`);
} finally {
  server?.kill();
}

process.exit(failures === 0 ? 0 : 1);
