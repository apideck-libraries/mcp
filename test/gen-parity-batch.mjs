/**
 * Batch parity probe: runs a representative slice of tools through both
 * engines against real Apideck and reports match/mismatch across the matrix.
 *
 *   APIDECK_API_KEY=... APIDECK_APP_ID=... APIDECK_CONSUMER_ID=... \
 *     node test/gen-parity-batch.mjs
 */

import { createMCPServer } from "../esm/src/mcp-server/server.js";
import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";
import { ApideckMcpCore } from "../esm/src/core.js";

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
const getSDK = () => new ApideckMcpCore({ security: { apiKey }, appId, consumerId });

const speakBooted = createMCPServer({ logger, dynamic: true, getSDK });
const customBooted = createGeneratedMCPServer({ logger, dynamic: true, getSDK });
const speakExec = speakBooted.server._registeredTools.execute_tool.handler;
const customExec = customBooted.server._registeredTools.execute_tool.handler;

// Representative slice. Pick tools that exercise:
// - path params, query params, header params, body
// - different unified APIs (vault, accounting, hris, crm, proxy)
// - read/write/destructive scopes
// - pagination (list) vs single (get)
// - both connector-backed (Odoo/Remote) and vault-native calls
const TOOLS = [
  ["vault-connections-list", {}],
  ["vault-consumers-list", {}],
  ["vault-consumers-get", { consumer_id: "test-consumer" }],
  ["vault-consumer-request-counts-list", { consumer_id: "test-consumer", start_datetime: "2026-01-01T00:00:00Z", end_datetime: "2026-04-23T00:00:00Z" }],
  ["vault-connection-settings-list", { unified_api: "accounting", service_id: "odoo", resource: "invoices" }],
  ["vault-custom-fields-list", { unified_api: "accounting", service_id: "odoo", resource: "invoices" }],
  ["vault-logs-list", { filter: { exclude_unified_apis: "vault" } }],
  ["accounting-invoices-list", { limit: 1 }],
  ["accounting-customers-list", { limit: 1 }],
  ["accounting-suppliers-list", { limit: 1 }],
  ["accounting-company-info-get", {}],
  ["accounting-balance-sheet-get", {}],
  ["accounting-profit-and-loss-get", {}],
  ["hris-employees-list", { limit: 1 }],
  ["hris-companies-list", { limit: 1 }],
  ["connector-connectors-list", { filter: { unified_api: "accounting" } }],
  ["connector-apis-list", {}],
  ["crm-companies-list", { limit: 1 }],
  ["crm-contacts-list", { limit: 1 }],
  ["ecommerce-customers-list", { limit: 1 }],
  ["ats-applicants-list", { limit: 1 }],
  ["issue-tracking-collections-list", {}],
  ["file-storage-files-list", { limit: 1 }],
];

// Keys Apideck echoes back that reflect the request's URL query-string
// ordering, not the underlying data. Both engines encode the same params
// but in different orders (Apideck just echoes what it received).
const VOLATILE_KEYS = new Set([
  "request_count", "aggregated_request_count", "request_counts",
  "request_count_updated", "created_at", "updated_at", "last_refresh_failed_at",
  "credentials_expire_at", "authorize_url", "revoke_url", "created", "modified",
  "cursor", "next_cursor", "previous_cursor", "cursors", "meta",
  "timestamp", "executed_at", "duration_ms",
  // URL echoes — query-string ordering differs but data is identical
  "links", "_links", "current", "next", "previous", "self",
]);

function normalise(v) {
  if (Array.isArray(v)) return v.map(normalise);
  if (v && typeof v === "object") {
    const out = {};
    for (const [k, val] of Object.entries(v)) {
      if (VOLATILE_KEYS.has(k)) continue;
      out[k] = normalise(val);
    }
    return out;
  }
  return v;
}

function diff(a, b, path = "", out = []) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) out.push(`${path}: array length ${a.length} vs ${b.length}`);
    const n = Math.min(a.length, b.length);
    for (let i = 0; i < n; i++) diff(a[i], b[i], `${path}[${i}]`, out);
    return out;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (!(k in a)) out.push(`${path}.${k}: only in custom`);
      else if (!(k in b)) out.push(`${path}.${k}: only in legacy`);
      else diff(a[k], b[k], `${path}.${k}`, out);
    }
    return out;
  }
  if (a !== b) {
    const av = JSON.stringify(a)?.slice(0, 40);
    const bv = JSON.stringify(b)?.slice(0, 40);
    out.push(`${path}: ${av} ≠ ${bv}`);
  }
  return out;
}

function callBoth(name, args) {
  // Engines diverge on argument shape: legacy wraps under `request`, custom
  // exposes a flat top-level schema. Each engine gets its native shape.
  return Promise.all([
    speakExec({ name, arguments: { request: args } }, { signal: AbortSignal.timeout(30_000) }),
    customExec({ name, arguments: args }, { signal: AbortSignal.timeout(30_000) }),
  ]);
}

const results = [];
for (const [name, args] of TOOLS) {
  try {
    const [s, c] = await callBoth(name, args);
    const sb = s.content?.[0]?.text ?? "";
    const cb = c.content?.[0]?.text ?? "";
    let status;
    let detail = "";
    if (sb === cb) status = "exact";
    else {
      try {
        const sj = JSON.parse(sb);
        const cj = JSON.parse(cb);
        const diffs = diff(normalise(sj), normalise(cj));
        if (diffs.length === 0) status = "normalised";
        else {
          status = `${diffs.length} diff(s)`;
          detail = diffs.slice(0, 3).join(" | ");
        }
      } catch {
        status = "non-json";
        detail = `legacy="${sb.slice(0, 80)}" custom="${cb.slice(0, 80)}"`;
      }
    }
    results.push({ name, legacyErr: s.isError ?? false, customErr: c.isError ?? false, status, detail });
  } catch (err) {
    results.push({ name, legacyErr: true, customErr: true, status: "throw", detail: err.message });
  }
}

let match = 0;
let mismatch = 0;
console.log("");
console.log("tool".padEnd(44), "legacy  custom  status");
console.log("─".repeat(100));
for (const r of results) {
  const ok = r.status === "exact" || r.status === "normalised";
  const marker = ok ? "✓" : "✗";
  if (ok) match++; else mismatch++;
  console.log(
    `${marker} ${r.name.padEnd(42)} ${String(r.legacyErr).padEnd(6)}  ${String(r.customErr).padEnd(6)}  ${r.status}${r.detail ? "  — " + r.detail.slice(0, 100) : ""}`,
  );
}
console.log("─".repeat(100));
console.log(`match: ${match}/${results.length}`);
process.exit(mismatch === 0 ? 0 : 1);
