/**
 * Side-by-side parity probe for Speakeasy vs the custom generator.
 *
 * Runs the same tool against both engines in-process (network goes to
 * real Apideck), normalises responses, and prints a structured diff.
 *
 *   APIDECK_API_KEY=... APIDECK_APP_ID=... APIDECK_CONSUMER_ID=... \
 *     node test/gen-parity.mjs [toolName [jsonArgs]]
 *
 * Examples:
 *   node test/gen-parity.mjs vault-connections-list
 *   node test/gen-parity.mjs accounting-invoices-list '{"limit":1}'
 *
 * Exit code: 0 if bodies are structurally identical, 1 if they differ.
 */

import { createMCPServer } from "../esm/src/mcp-server/server.js";
import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";
import { ApideckMcpCore } from "../esm/src/core.js";

const apiKey = process.env.APIDECK_API_KEY;
const appId = process.env.APIDECK_APP_ID;
const consumerId = process.env.APIDECK_CONSUMER_ID;

if (!apiKey || !appId || !consumerId) {
  console.error("Missing env: APIDECK_API_KEY / APIDECK_APP_ID / APIDECK_CONSUMER_ID");
  process.exit(2);
}

const toolName = process.argv[2] ?? "vault-connections-list";
const args = process.argv[3] ? JSON.parse(process.argv[3]) : {};

const logger = {
  level: "info",
  debug() {},
  info() {},
  warning() {},
  error() {},
};

const getSDK = () =>
  new ApideckMcpCore({
    security: { apiKey },
    appId,
    consumerId,
  });

function boot(engine) {
  const factory = engine === "custom" ? createGeneratedMCPServer : createMCPServer;
  return factory({
    logger,
    dynamic: true,
    getSDK,
  });
}

async function run(engine) {
  const booted = boot(engine);
  const execTool = booted.server._registeredTools.execute_tool;
  const start = Date.now();
  const res = await execTool.handler(
    { name: toolName, arguments: args },
    { signal: AbortSignal.timeout(30_000) },
  );
  return {
    engine,
    ms: Date.now() - start,
    isError: res.isError ?? false,
    body: res.content?.[0]?.text ?? "",
  };
}

function tryParseJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

// Strip fields that are inherently time/request-varying (timestamps,
// internal request IDs) so we compare the shape + business data.
const VOLATILE_KEYS = new Set([
  "request_count",
  "aggregated_request_count",
  "request_counts",
  "request_count_updated",
  "created_at",
  "updated_at",
  "last_refresh_failed_at",
  "credentials_expire_at",
  "authorize_url",
  "revoke_url",
]);

function normalise(value) {
  if (Array.isArray(value)) return value.map(normalise);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (VOLATILE_KEYS.has(k)) continue;
      out[k] = normalise(v);
    }
    return out;
  }
  return value;
}

function shapeDiff(a, b, path = "") {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return [`${path}: array length ${a.length} vs ${b.length}`];
    }
    const diffs = [];
    for (let i = 0; i < a.length; i++) {
      diffs.push(...shapeDiff(a[i], b[i], `${path}[${i}]`));
    }
    return diffs;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    const diffs = [];
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
      if (!(k in a)) diffs.push(`${path}.${k}: only in custom`);
      else if (!(k in b)) diffs.push(`${path}.${k}: only in speakeasy`);
      else diffs.push(...shapeDiff(a[k], b[k], `${path}.${k}`));
    }
    return diffs;
  }
  if (a !== b) {
    const av = JSON.stringify(a)?.slice(0, 60);
    const bv = JSON.stringify(b)?.slice(0, 60);
    return [`${path}: ${av} ≠ ${bv}`];
  }
  return [];
}

console.log(`Parity test: ${toolName}  args=${JSON.stringify(args)}`);
console.log();

const [speakeasy, custom] = await Promise.all([run("speakeasy"), run("custom")]);

console.log(`  speakeasy  ${speakeasy.ms.toString().padStart(4)}ms  isError=${speakeasy.isError}`);
console.log(`  custom     ${custom.ms.toString().padStart(4)}ms  isError=${custom.isError}`);
console.log();

const sJson = tryParseJson(speakeasy.body);
const cJson = tryParseJson(custom.body);

if (!sJson || !cJson) {
  console.log("One of the bodies is not JSON — printing raw previews:");
  console.log("-- speakeasy --"); console.log(speakeasy.body.slice(0, 600));
  console.log("-- custom    --"); console.log(custom.body.slice(0, 600));
  process.exit(1);
}

const diffs = shapeDiff(normalise(sJson), normalise(cJson));
if (diffs.length === 0) {
  console.log("✅ bodies match (after normalising volatile fields)");
  process.exit(0);
}
console.log(`❌ ${diffs.length} difference(s):`);
for (const d of diffs.slice(0, 20)) console.log("  " + d);
if (diffs.length > 20) console.log(`  … ${diffs.length - 20} more`);
process.exit(1);
