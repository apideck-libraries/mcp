/**
 * Unit tests for PostHog analytics wiring:
 * - createAnalytics batching behaviour (including the no-op path)
 * - mcp_tool_called emission in static mode (createRegisterTool)
 * - mcp_tool_called emission in dynamic mode (registerDynamicTools' execute_tool)
 */

import { createAnalytics } from "../esm/src/mcp-server/analytics.js";
import {
  createRegisterTool,
  registerDynamicTools,
} from "../esm/src/mcp-server/tools.js";

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

const annotations = {
  title: "",
  destructiveHint: false,
  idempotentHint: false,
  openWorldHint: false,
  readOnlyHint: false,
};

// -----------------------------------------------------------------------------
// 1. createAnalytics no-ops when the API key is missing
// -----------------------------------------------------------------------------
{
  console.log("Test: createAnalytics with undefined key returns a no-op");
  let fetchCalled = false;
  const origFetch = globalThis.fetch;
  globalThis.fetch = () => {
    fetchCalled = true;
    return Promise.resolve({ ok: true });
  };
  const a = createAnalytics(undefined, logger);
  await a.capture({ distinctId: "x", event: "e" });
  await a.flush();
  globalThis.fetch = origFetch;
  assert(!fetchCalled, "fetch not invoked when POSTHOG_API_KEY is unset");
}

// -----------------------------------------------------------------------------
// 2. createAnalytics posts a properly shaped batch to PostHog
// -----------------------------------------------------------------------------
{
  console.log("Test: createAnalytics posts a batch to PostHog");
  const calls = [];
  const origFetch = globalThis.fetch;
  globalThis.fetch = async (url, opts) => {
    calls.push({ url, body: JSON.parse(opts.body) });
    return { ok: true };
  };
  const a = createAnalytics("phc_test", logger);
  await a.capture({
    distinctId: "app:consumer",
    event: "mcp_tool_called",
    properties: { tool_name: "foo", is_error: false },
  });
  await a.flush();
  globalThis.fetch = origFetch;

  assert(calls.length === 1, "exactly one fetch call");
  assert(
    typeof calls[0].url === "string" && calls[0].url.endsWith("/batch"),
    "posts to PostHog /batch",
  );
  assert(calls[0].body.api_key === "phc_test", "api_key sent in body");
  const ev = calls[0].body.batch[0];
  assert(ev.event === "mcp_tool_called", "event name preserved");
  assert(ev.distinct_id === "app:consumer", "distinct_id preserved");
  assert(ev.properties.tool_name === "foo", "custom property preserved");
  assert(ev.properties.$lib === "apideck-mcp", "$lib stamped");
  assert(typeof ev.timestamp === "string", "timestamp stamped");
}

// -----------------------------------------------------------------------------
// 3. Static-mode tool call emits mcp_tool_called
// -----------------------------------------------------------------------------
{
  console.log("Test: static-mode tool call emits mcp_tool_called");
  const captures = [];
  const fakeAnalytics = {
    async capture(ev) {
      captures.push(ev);
    },
    async flush() {},
  };
  let handler;
  const fakeServer = {
    registerTool(_name, _config, h) {
      handler = h;
    },
  };
  const fakeSDK = { _options: { appId: "app-1", consumerId: "con-1" } };
  const [register] = createRegisterTool(
    logger,
    fakeServer,
    () => fakeSDK,
    new Set(),
    undefined,
    false,
    undefined,
    fakeAnalytics,
  );
  register({
    name: "test-tool",
    description: "desc",
    args: {},
    annotations,
    async tool() {
      return { content: [{ type: "text", text: "ok" }] };
    },
  });

  const result = await handler({}, {});
  // Allow any microtask flushes
  await new Promise((r) => setImmediate(r));

  assert(result.content[0].text === "ok", "tool result passed through");
  assert(captures.length === 1, "one capture call");
  assert(captures[0].event === "mcp_tool_called", "event name");
  assert(captures[0].properties.tool_name === "test-tool", "tool_name set");
  assert(captures[0].properties.mode === "static", "mode = static");
  assert(captures[0].properties.is_error === false, "is_error = false");
  assert(captures[0].properties.app_id === "app-1", "app_id propagated");
  assert(
    captures[0].properties.consumer_id === "con-1",
    "consumer_id propagated",
  );
  assert(captures[0].distinctId === "app-1:con-1", "distinctId combined");
  assert(
    typeof captures[0].properties.duration_ms === "number"
      && captures[0].properties.duration_ms >= 0,
    "duration_ms numeric",
  );
}

// -----------------------------------------------------------------------------
// 4. Tool returning isError reports is_error: true, falls back distinctId
// -----------------------------------------------------------------------------
{
  console.log("Test: isError true + missing appId/consumerId fallback");
  const captures = [];
  const fakeAnalytics = {
    async capture(ev) {
      captures.push(ev);
    },
    async flush() {},
  };
  let handler;
  const fakeServer = { registerTool: (_n, _c, h) => (handler = h) };
  const fakeSDK = { _options: {} };
  const [register] = createRegisterTool(
    logger,
    fakeServer,
    () => fakeSDK,
    new Set(),
    undefined,
    false,
    undefined,
    fakeAnalytics,
  );
  register({
    name: "err-tool",
    description: "",
    annotations,
    async tool() {
      return { content: [], isError: true };
    },
  });
  await handler({});
  await new Promise((r) => setImmediate(r));

  assert(captures[0].properties.is_error === true, "is_error = true");
  assert(
    captures[0].distinctId === "mcp-server",
    "falls back to 'mcp-server' when app_id + consumer_id unset",
  );
}

// -----------------------------------------------------------------------------
// 5. Dynamic-mode execute_tool emits mcp_tool_called
// -----------------------------------------------------------------------------
{
  console.log("Test: dynamic execute_tool emits mcp_tool_called");
  const captures = [];
  const fakeAnalytics = {
    async capture(ev) {
      captures.push(ev);
    },
    async flush() {},
  };
  const handlers = new Map();
  const fakeServer = {
    registerTool: (name, _c, h) => handlers.set(name, h),
  };
  const toolMap = new Map();
  toolMap.set("dyn-tool", {
    name: "dyn-tool",
    description: "d",
    args: {},
    annotations,
    async tool() {
      return { content: [{ type: "text", text: "dyn ok" }] };
    },
  });
  const fakeSDK = { _options: { appId: "a", consumerId: "c" } };
  registerDynamicTools(
    logger,
    fakeServer,
    () => fakeSDK,
    toolMap,
    new Set(),
    fakeAnalytics,
  );

  const execHandler = handlers.get("execute_tool");
  const result = await execHandler({ name: "dyn-tool", arguments: {} }, {});
  await new Promise((r) => setImmediate(r));

  assert(
    result.content[0].text === "dyn ok",
    "dynamic tool result passed through",
  );
  assert(captures.length === 1, "capture fired once");
  assert(captures[0].properties.mode === "dynamic", "mode = dynamic");
  assert(
    captures[0].properties.tool_name === "dyn-tool",
    "tool_name captured",
  );
  assert(captures[0].properties.is_error === false, "is_error = false");
}

// -----------------------------------------------------------------------------
// 6. Dynamic execute_tool: thrown error still emits an event with is_error=true
// -----------------------------------------------------------------------------
{
  console.log("Test: dynamic execute_tool thrown error still emits event");
  const captures = [];
  const fakeAnalytics = {
    async capture(ev) {
      captures.push(ev);
    },
    async flush() {},
  };
  const handlers = new Map();
  const fakeServer = {
    registerTool: (name, _c, h) => handlers.set(name, h),
  };
  const toolMap = new Map();
  toolMap.set("boom", {
    name: "boom",
    description: "",
    args: {},
    annotations,
    async tool() {
      throw new Error("kaboom");
    },
  });
  registerDynamicTools(
    logger,
    fakeServer,
    () => ({ _options: {} }),
    toolMap,
    new Set(),
    fakeAnalytics,
  );

  const execHandler = handlers.get("execute_tool");
  const result = await execHandler({ name: "boom", arguments: {} }, {});
  await new Promise((r) => setImmediate(r));

  assert(result.isError === true, "error response returned");
  assert(captures.length === 1, "capture fired");
  assert(
    captures[0].properties.is_error === true,
    "is_error = true on thrown error",
  );
}

// -----------------------------------------------------------------------------
// 7. Without an analytics instance, handlers still work (no crash)
// -----------------------------------------------------------------------------
{
  console.log("Test: missing analytics instance is a no-op (no crash)");
  let handler;
  const fakeServer = { registerTool: (_n, _c, h) => (handler = h) };
  const [register] = createRegisterTool(
    logger,
    fakeServer,
    () => ({ _options: {} }),
    new Set(),
    undefined,
    false,
    undefined,
    undefined, // no analytics
  );
  register({
    name: "plain",
    description: "",
    annotations,
    async tool() {
      return { content: [{ type: "text", text: "still ok" }] };
    },
  });
  const result = await handler({});
  assert(result.content[0].text === "still ok", "tool runs without analytics");
}

console.log(
  `\n${failures === 0 ? "All analytics tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
