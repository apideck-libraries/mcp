/**
 * Live integration check: run a real `apideck_run` script against
 * unify.apideck.com and show the result.
 *
 *   node --env-file=.env.local test/gen-sandbox-live.mjs
 */

import { ApideckMcpCore } from "../esm/src/core.js";
import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";

const apiKey = process.env.APIDECK_API_KEY;
const appId = process.env.APIDECK_APP_ID;
const consumerId = process.env.APIDECK_CONSUMER_ID;
if (!apiKey || !appId || !consumerId) {
  console.error("Missing env APIDECK_API_KEY / APIDECK_APP_ID / APIDECK_CONSUMER_ID");
  process.exit(2);
}

const logger = {
  level: "info",
  debug() {},
  info() {},
  warning() {},
  error() {},
};

const booted = createGeneratedMCPServer({
  logger,
  codeMode: true,
  getSDK: () => new ApideckMcpCore({ security: { apiKey }, appId, consumerId }),
});

const run = booted.server._registeredTools.apideck_run;

const script = `
const [consumers, connections] = await Promise.all([
  apideck.vaultConsumersList({}),
  apideck.vaultConnectionsList({}),
]);
return {
  consumer_count: consumers.data?.length ?? 0,
  connection_count: connections.data?.length ?? 0,
  first_connection: connections.data?.[0]?.service_id ?? null,
};
`;

const start = Date.now();
const res = await run.handler(
  { script },
  { signal: AbortSignal.timeout(60_000) },
);
const ms = Date.now() - start;
console.log(`apideck_run finished in ${ms}ms  isError=${res.isError ?? false}`);
console.log(res.content[0].text);
process.exit(res.isError ? 1 : 0);
