/**
 * Live integration test against the real Apideck API.
 *
 *   APIDECK_API_KEY=... APIDECK_APP_ID=... APIDECK_CONSUMER_ID=... \
 *     node test/gen-live.mjs [toolName [jsonInput]]
 */

import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";

const apiKey = process.env.APIDECK_API_KEY;
const appId = process.env.APIDECK_APP_ID;
const consumerId = process.env.APIDECK_CONSUMER_ID;

if (!apiKey || !appId || !consumerId) {
  console.error("Missing env APIDECK_API_KEY / APIDECK_APP_ID / APIDECK_CONSUMER_ID.");
  process.exit(2);
}

const toolName = process.argv[2] ?? "vault-connections-list";
const input = process.argv[3] ? JSON.parse(process.argv[3]) : {};

const logger = {
  level: "info",
  debug() {},
  info() {},
  warning: (...a) => console.warn("[warn]", ...a),
  error: (...a) => console.error("[error]", ...a),
};

const booted = createGeneratedMCPServer({
  logger,
  dynamic: true,
  getSDK: () => ({
    _options: { appId, consumerId, security: { apiKey } },
  }),
});

const execTool = booted.server._registeredTools.execute_tool;

console.log(`Calling ${toolName} with input: ${JSON.stringify(input)}`);
const start = Date.now();
const res = await execTool.handler(
  { tool_name: toolName, input },
  { signal: AbortSignal.timeout(30_000) },
);
const ms = Date.now() - start;
console.log(`Response in ${ms}ms, isError=${res.isError ?? false}`);
const text = res.content?.[0]?.text ?? "";
console.log("---- body ----");
console.log(text.length > 1500 ? text.slice(0, 1500) + "\n… [truncated]" : text);
console.log("--------------");
process.exit(res.isError ? 1 : 0);
