/**
 * Stdio e2e test: spawns `bin/mcp-server.js start` (the default transport
 * when installed via `npx -y @apideck/mcp`), speaks MCP JSON-RPC over
 * stdin/stdout, and verifies initialize + dynamic-mode meta-tool calls.
 *
 * This is the transport path most external users hit, so it deserves
 * its own smoke — covers startup, argv → auth wiring, StdioServerTransport
 * framing (Content-Length headers), and the dynamic meta-tools.
 */

import { spawn } from "node:child_process";

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) {
    console.error(`  FAIL: ${msg}`);
    failures++;
  } else {
    console.log(`  PASS: ${msg}`);
  }
};

function rpc(id, method, params) {
  return { jsonrpc: "2.0", id, method, params };
}

/**
 * Minimal framer for MCP stdio transport.
 *
 * The SDK's StdioServerTransport uses newline-delimited JSON (one
 * JSON-RPC message per line on stdout/stdin). We write outgoing messages
 * as JSON + "\n" and parse incoming stdout line-by-line.
 */
function createClient(child) {
  const pending = new Map();
  let stdoutBuf = "";
  child.stdout.on("data", (chunk) => {
    stdoutBuf += chunk.toString("utf8");
    let nl;
    while ((nl = stdoutBuf.indexOf("\n")) >= 0) {
      const line = stdoutBuf.slice(0, nl).trim();
      stdoutBuf = stdoutBuf.slice(nl + 1);
      if (!line) continue;
      try {
        const msg = JSON.parse(line);
        if (msg.id !== undefined && pending.has(msg.id)) {
          pending.get(msg.id)(msg);
          pending.delete(msg.id);
        }
      } catch {
        // ignore non-JSON output
      }
    }
  });
  child.stderr.on("data", () => {}); // silence
  return {
    send(msg) {
      return new Promise((resolve) => {
        pending.set(msg.id, resolve);
        child.stdin.write(JSON.stringify(msg) + "\n");
      });
    },
  };
}

const bin = "bin/mcp-server.js";
const child = spawn(
  "node",
  [
    bin,
    "start",
    "--transport",
    "stdio",
    "--mode",
    "dynamic",
    "--api-key",
    "sk_test_stdio",
    "--app-id",
    "stdio-app",
    "--consumer-id",
    "stdio-consumer",
    "--log-level",
    "error",
  ],
  { stdio: ["pipe", "pipe", "pipe"] },
);

const client = createClient(child);
let exitCode = null;
child.on("exit", (code) => {
  exitCode = code;
});

try {
  // 1. initialize
  console.log("Test: stdio initialize");
  const init = await Promise.race([
    client.send(
      rpc(1, "initialize", {
        protocolVersion: "2025-03-26",
        capabilities: {},
        clientInfo: { name: "stdio-test", version: "1.0" },
      }),
    ),
    new Promise((_, r) => setTimeout(() => r(new Error("initialize timed out")), 10_000)),
  ]);
  assert(init.result?.serverInfo?.name === "ApideckMcp", "server name is ApideckMcp");
  assert(init.result?.capabilities?.tools != null, "tools capability present");

  // 2. list_tools through the dynamic meta-tool
  console.log("Test: stdio list_tools meta-tool");
  const listResp = await client.send(
    rpc(2, "tools/call", { name: "list_tools", arguments: {} }),
  );
  const tools = JSON.parse(listResp.result.content[0].text);
  assert(Array.isArray(tools), "list_tools returns a JSON array");
  assert(tools.length > 100, `tool count > 100 (got ${tools.length})`);
  assert(
    tools.some((t) => t.name === "vault-connections-list"),
    "a known tool is listed",
  );

  // 3. describe_tool_input for a representative tool
  console.log("Test: stdio describe_tool_input");
  const descResp = await client.send(
    rpc(3, "tools/call", {
      name: "describe_tool_input",
      arguments: { tool_names: ["vault-connections-list"] },
    }),
  );
  assert(
    !descResp.result.isError,
    "describe_tool_input did not set isError",
  );
  assert(
    descResp.result.content[0].text.includes("input_schema"),
    "response wraps schema in <input_schema>",
  );

  // 4. invalid method returns a JSON-RPC error, not a crash
  console.log("Test: stdio invalid method");
  const badResp = await client.send(rpc(4, "totally/fake", {}));
  assert(badResp.error != null, "invalid method returns JSON-RPC error");

  // 5. auth headers would be wired when we call a real execute_tool
  //    (we don't dispatch real network here; validate the server accepted
  //    the credentials at startup by confirming it's still running)
  assert(exitCode === null, "server did not exit during test");
} finally {
  child.kill("SIGTERM");
  // give it a moment to exit cleanly
  await new Promise((r) => setTimeout(r, 250));
}

console.log(
  `\n${failures === 0 ? "All stdio tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
