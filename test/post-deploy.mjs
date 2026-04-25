/**
 * Post-deploy smoke test. Hits the deployed MCP endpoint over HTTP and
 * asserts the plumbing is intact (no private credentials required).
 *
 *   MCP_URL=https://mcp.apideck.dev/mcp node test/post-deploy.mjs
 *
 * Runs against the default engine (custom) plus ?engine=legacy as a
 * cross-check. Designed to run in CI from the Post-deploy Smoke
 * workflow after every Vercel deployment.
 */

const MCP_URL = process.env.MCP_URL ?? "https://mcp.apideck.dev/mcp";
const API_KEY = process.env.APIDECK_SMOKE_API_KEY ?? "smoke-no-key";
const APP_ID = process.env.APIDECK_SMOKE_APP_ID ?? "smoke-no-app";
const CONSUMER_ID = process.env.APIDECK_SMOKE_CONSUMER_ID ?? "smoke-no-consumer";
// Vercel Deployment Protection bypass for Automation. Required when probing
// per-deployment alias URLs (e.g. https://<project>-<hash>-<team>.vercel.app);
// not needed for the unprotected production domain. See
// https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation
const VERCEL_PROTECTION_BYPASS = process.env.VERCEL_AUTOMATION_BYPASS_SECRET ?? "";

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) {
    console.error(`  FAIL: ${msg}`);
    failures++;
  } else {
    console.log(`  PASS: ${msg}`);
  }
};

function parseSSE(text) {
  const line = text.split("\n").find((l) => l.startsWith("data:"));
  if (!line) throw new Error(`No SSE data in: ${text.slice(0, 200)}`);
  return JSON.parse(line.slice(5));
}

async function rpc(url, payload) {
  const started = Date.now();
  const headers = {
    "content-type": "application/json",
    accept: "application/json, text/event-stream",
    "x-apideck-api-key": API_KEY,
    "x-apideck-app-id": APP_ID,
    "x-apideck-consumer-id": CONSUMER_ID,
  };
  if (VERCEL_PROTECTION_BYPASS) {
    headers["x-vercel-protection-bypass"] = VERCEL_PROTECTION_BYPASS;
    headers["x-vercel-set-bypass-cookie"] = "true";
  }
  const resp = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20_000),
  });
  const text = await resp.text();
  const elapsed = Date.now() - started;
  if (!resp.ok) throw new Error(`HTTP ${resp.status} after ${elapsed}ms: ${text.slice(0, 200)}`);
  return { parsed: parseSSE(text), elapsed };
}

async function check(name, url) {
  console.log(`\n=== ${name} ===`);
  console.log(url);

  // 1. initialize
  let res = await rpc(url, {
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
    params: {
      protocolVersion: "2025-03-26",
      capabilities: {},
      clientInfo: { name: "post-deploy-smoke", version: "1.0" },
    },
  });
  assert(
    res.parsed.result?.serverInfo?.name === "ApideckMcp",
    `initialize serverInfo.name = ApideckMcp (got ${res.parsed.result?.serverInfo?.name})`,
  );
  assert(res.elapsed < 10_000, `initialize under 10s (was ${res.elapsed}ms)`);

  // 2. list_tools — dynamic meta-tool, no upstream auth needed
  res = await rpc(url, {
    jsonrpc: "2.0",
    id: 2,
    method: "tools/call",
    params: { name: "list_tools", arguments: {} },
  });
  const tools = JSON.parse(res.parsed.result?.content?.[0]?.text ?? "[]");
  assert(Array.isArray(tools) && tools.length > 100, `list_tools returned ${tools.length} tools`);
  assert(
    tools.some((t) => t.name === "vault-connections-list"),
    "a known tool is listed",
  );
  assert(res.elapsed < 10_000, `list_tools under 10s (was ${res.elapsed}ms)`);

  // 3. describe_tool_input
  res = await rpc(url, {
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: {
      name: "describe_tool_input",
      arguments: { tool_names: ["vault-connections-list"] },
    },
  });
  const body = res.parsed.result?.content?.[0]?.text ?? "";
  assert(body.includes("input_schema"), "describe_tool_input wraps output");
  assert(res.elapsed < 10_000, `describe_tool_input under 10s (was ${res.elapsed}ms)`);
}

try {
  // Default engine (custom generator)
  await check("default engine", MCP_URL);

  // Legacy engine — explicit fallback path should still respond
  const legacyUrl = MCP_URL + (MCP_URL.includes("?") ? "&" : "?") + "engine=legacy";
  await check("engine=legacy", legacyUrl);
} catch (err) {
  console.error(`\n  FAIL: ${err instanceof Error ? err.message : err}`);
  failures++;
}

console.log(
  `\n${failures === 0 ? "Post-deploy smoke passed" : `${failures} assertion(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
