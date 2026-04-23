/**
 * Regression test for the production SDK shape.
 *
 * api/mcp.ts wires the SDK with `security: async () => ({ apiKey })`
 * — a lazy resolver. The first custom-engine deploy shipped a runtime
 * that bailed on function-shaped security and dropped Authorization,
 * which made exec calls burn the whole retry window before failing.
 *
 * This test reconstructs that exact shape in-process and asserts the
 * Authorization header lands on the upstream fetch.
 */

import { ApideckMcpCore } from "../esm/src/core.js";
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

function captureFetch() {
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, opts = {}) => {
    // Two call shapes:
    //   fetch(url, { headers, ... })       ← custom runtime
    //   fetch(Request)                     ← legacy SDK
    let url, method, hdrs;
    if (input instanceof Request) {
      url = input.url;
      method = input.method;
      hdrs = input.headers;
    } else {
      url = String(input);
      method = opts.method;
      hdrs = opts.headers;
    }
    const h = hdrs instanceof Headers
      ? Object.fromEntries(hdrs.entries())
      : { ...(hdrs ?? {}) };
    calls.push({ url, method, headers: h });
    return new Response('{"data":[]}', {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };
  return {
    calls,
    restore() {
      globalThis.fetch = orig;
    },
  };
}

function mirrorProdHandler({ apiKey, appId, consumerId }) {
  // Mirror api/mcp.ts getSDK() exactly — lazy security, real ApideckMcpCore.
  const getSDK = () =>
    new ApideckMcpCore({
      security: async () => ({ apiKey }),
      consumerId,
      appId,
    });
  return createGeneratedMCPServer({ logger, dynamic: true, getSDK });
}

async function callExec({ apiKey, appId, consumerId, toolName, args }) {
  const { server } = mirrorProdHandler({ apiKey, appId, consumerId });
  const execTool = server._registeredTools.execute_tool;
  return execTool.handler(
    { name: toolName, arguments: { request: args } },
    { signal: new AbortController().signal },
  );
}

// -----------------------------------------------------------------------------
// 1. Authorization header lands when security is a lazy async resolver
// -----------------------------------------------------------------------------
{
  console.log("Test: lazy async security resolver yields Authorization: Bearer <key>");
  const stub = captureFetch();
  const res = await callExec({
    apiKey: "sk_live_prod_probe",
    appId: "prod-app",
    consumerId: "prod-consumer",
    toolName: "vault-connections-list",
    args: {},
  });
  stub.restore();

  assert(res.isError !== true, `execute_tool succeeded (isError=${res.isError})`);
  assert(stub.calls.length >= 1, `upstream fetch invoked (${stub.calls.length} calls)`);
  const call = stub.calls[0];
  assert(
    call.url.startsWith("https://unify.apideck.com/"),
    `URL targets unify.apideck.com — got ${call.url}`,
  );
  assert(
    call.headers["authorization"] === "Bearer sk_live_prod_probe",
    `Authorization header forwarded — got "${call.headers["authorization"]}"`,
  );
  assert(
    call.headers["x-apideck-app-id"] === "prod-app",
    "x-apideck-app-id forwarded",
  );
  assert(
    call.headers["x-apideck-consumer-id"] === "prod-consumer",
    "x-apideck-consumer-id forwarded",
  );
}

// -----------------------------------------------------------------------------
// 2. Sync security function is also resolved
// -----------------------------------------------------------------------------
{
  console.log("Test: sync security function is also resolved");
  const stub = captureFetch();
  const getSDK = () =>
    new ApideckMcpCore({
      security: () => ({ apiKey: "sk_sync_key" }),
      consumerId: "c",
      appId: "a",
    });
  const { server } = createGeneratedMCPServer({ logger, dynamic: true, getSDK });
  const execTool = server._registeredTools.execute_tool;
  await execTool.handler(
    { name: "vault-connections-list", arguments: { request: {} } },
    { signal: new AbortController().signal },
  );
  stub.restore();
  assert(
    stub.calls[0]?.headers["authorization"] === "Bearer sk_sync_key",
    `sync resolver → Authorization: Bearer sk_sync_key (got "${stub.calls[0]?.headers["authorization"]}")`,
  );
}

// -----------------------------------------------------------------------------
// 3. Legacy engine path (Speakeasy) still attaches auth — covers the escape hatch
// -----------------------------------------------------------------------------
{
  console.log("Test: legacy engine path still attaches auth");
  const { createMCPServer } = await import("../esm/src/mcp-server/server.js");
  const stub = captureFetch();
  const getSDK = () =>
    new ApideckMcpCore({
      security: async () => ({ apiKey: "sk_legacy" }),
      consumerId: "c",
      appId: "a",
    });
  const { server } = createMCPServer({ logger, dynamic: true, getSDK });
  const execTool = server._registeredTools.execute_tool;
  await execTool.handler(
    { name: "vault-connections-list", arguments: { request: {} } },
    { signal: new AbortController().signal },
  );
  stub.restore();
  const auth = stub.calls[0]?.headers["authorization"];
  assert(
    auth === "Bearer sk_legacy",
    `legacy engine: Authorization: Bearer sk_legacy (got "${auth}")`,
  );
}

// -----------------------------------------------------------------------------
// 4. Missing API key does not raise — returns something, just unauthenticated
//    (regression guard: silent drop should not hang or throw)
// -----------------------------------------------------------------------------
{
  console.log("Test: missing API key returns a result without throwing");
  const stub = captureFetch();
  const getSDK = () =>
    new ApideckMcpCore({
      security: async () => ({}),
      consumerId: "c",
      appId: "a",
    });
  const { server } = createGeneratedMCPServer({ logger, dynamic: true, getSDK });
  const execTool = server._registeredTools.execute_tool;
  const res = await execTool.handler(
    { name: "vault-connections-list", arguments: { request: {} } },
    { signal: new AbortController().signal },
  );
  stub.restore();
  assert(res.content?.[0]?.type === "text", "still returns text content");
  // No apiKey → no Authorization header, but request should still dispatch
  assert(
    !("authorization" in (stub.calls[0]?.headers ?? {})),
    "no Authorization header when apiKey is missing",
  );
}

console.log(
  `\n${failures === 0 ? "All handler e2e tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
