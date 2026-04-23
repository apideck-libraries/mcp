/**
 * Minimal fetch-based runtime for the generated Apideck MCP tools.
 *
 * Handles:
 * - path/query/header splitting (incl. 1-level deepObject query)
 * - Bearer auth + x-apideck-app-id / x-apideck-consumer-id threading
 * - JSON + multipart bodies (multipart triggered when an `attachment`
 *   field carries base64 data)
 * - Retries with exponential backoff on 408/5xx + network errors
 * - Binary responses surfaced as image/audio MCP content blocks
 *
 * Conscious non-goals vs Speakeasy: typed error classes, pagination
 * helper objects (the response body still carries meta.cursors.next;
 * tool descriptions instruct the LLM how to paginate).
 */

import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { ApideckMcpCore } from "../core.js";

const BASE_URL = "https://unify.apideck.com";
const RETRY_STATUS = new Set([408, 500, 502, 503, 504]);
const DEFAULT_RETRY = {
  attempts: 4,
  initialMs: 500,
  maxMs: 30_000,
  factor: 2,
};

export interface ApideckCallDescriptor {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
  path: string;
  pathParams: string[];
  queryParams: string[];
  headerParams: string[];
  hasBody: boolean;
  /**
   * If true, the `body` arg is a raw binary payload (base64, data URL, or
   * `{ data, mimeType }`). Content-Type is derived from the payload.
   */
  binaryBody?: boolean;
  signal?: AbortSignal;
}

export async function callApideck(
  client: ApideckMcpCore,
  desc: ApideckCallDescriptor,
  request: Record<string, unknown>,
): Promise<CallToolResult> {
  const pathParamSet = new Set(desc.pathParams);
  const querySet = new Set(desc.queryParams);
  const headerSet = new Set(desc.headerParams);

  let path = desc.path;
  for (const p of desc.pathParams) {
    const v = request[p];
    if (v === undefined) {
      return toolError(`Missing required path parameter: ${p}`);
    }
    path = path.replaceAll(`{${p}}`, encodeURIComponent(String(v)));
  }

  const query = new URLSearchParams();
  const headers = new Headers({ Accept: "application/json" });
  let body: BodyInit | null = null;

  const opts = client._options as {
    security?: unknown;
    appId?: string;
    consumerId?: string;
  };
  const apiKey = await extractApiKey(opts.security);
  if (apiKey) headers.set("Authorization", `Bearer ${apiKey}`);
  if (opts.appId) headers.set("x-apideck-app-id", opts.appId);
  if (opts.consumerId) headers.set("x-apideck-consumer-id", opts.consumerId);

  const bodyObj: Record<string, unknown> = {};
  let explicitBody: unknown = undefined;

  for (const [k, v] of Object.entries(request)) {
    if (v === undefined || v === null) continue;
    if (pathParamSet.has(k)) continue;
    if (querySet.has(k)) {
      appendQuery(query, k, v);
    } else if (headerSet.has(k)) {
      headers.set(k, String(v));
    } else if (desc.hasBody && k === "body") {
      explicitBody = v;
    } else if (desc.hasBody) {
      bodyObj[k] = v;
    }
  }

  if (desc.hasBody) {
    if (desc.binaryBody) {
      const payload = explicitBody ?? bodyObj["body"] ?? bodyObj["file"] ?? bodyObj["data"];
      const decoded = toBytes(payload);
      if (!decoded) {
        return toolError(
          "Binary body required: pass `body` as a base64 string, data URL, or {data, mimeType} object",
        );
      }
      headers.set("Content-Type", decoded.mimeType);
      body = decoded.data;
    } else if (explicitBody !== undefined) {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(explicitBody);
    } else if (Object.keys(bodyObj).length > 0) {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(bodyObj);
    }
  }

  const qs = query.toString();
  const url = `${BASE_URL}${path}${qs ? `?${qs}` : ""}`;

  return withRetry(async () =>
    dispatch(url, {
      method: desc.method,
      headers,
      body,
      signal: desc.signal ?? null,
    })
  );
}

async function dispatch(url: string, init: RequestInit): Promise<CallToolResult> {
  let resp: Response;
  try {
    resp = await fetch(url, init);
  } catch (err) {
    throw new RetriableError(
      `Request to ${url} failed: ${err instanceof Error ? err.message : String(err)}`,
      /*retriable*/ true,
    );
  }

  if (RETRY_STATUS.has(resp.status)) {
    const text = await resp.text();
    throw new RetriableError(text || `HTTP ${resp.status}`, true, resp.status);
  }

  const contentType = resp.headers.get("content-type") ?? "";
  if (contentType.startsWith("image/") || contentType.startsWith("audio/")) {
    const kind = contentType.startsWith("image/") ? "image" : "audio";
    const buf = await resp.arrayBuffer();
    const b64 = Buffer.from(buf).toString("base64");
    return {
      content: [{ type: kind, data: b64, mimeType: contentType }],
      isError: !resp.ok,
    };
  }

  const text = await resp.text();
  return { content: [{ type: "text", text }], isError: !resp.ok };
}

class RetriableError extends Error {
  constructor(msg: string, public retriable: boolean, public status?: number) {
    super(msg);
  }
}

async function withRetry(
  call: () => Promise<CallToolResult>,
  opts: typeof DEFAULT_RETRY = DEFAULT_RETRY,
): Promise<CallToolResult> {
  let delay = opts.initialMs;
  let lastError: unknown;
  for (let attempt = 1; attempt <= opts.attempts; attempt++) {
    try {
      return await call();
    } catch (err) {
      lastError = err;
      const retriable = err instanceof RetriableError && err.retriable;
      if (!retriable || attempt === opts.attempts) break;
      await sleep(delay + Math.random() * delay * 0.2); // 20% jitter
      delay = Math.min(delay * opts.factor, opts.maxMs);
    }
  }
  const msg = lastError instanceof Error ? lastError.message : String(lastError);
  return toolError(msg);
}

function appendQuery(q: URLSearchParams, k: string, v: unknown): void {
  if (Array.isArray(v)) {
    for (const item of v) q.append(k, serializeScalar(item));
  } else if (typeof v === "object" && v !== null) {
    for (const [sk, sv] of Object.entries(v as Record<string, unknown>)) {
      if (sv === undefined || sv === null) continue;
      q.append(`${k}[${sk}]`, serializeScalar(sv));
    }
  } else {
    q.append(k, serializeScalar(v));
  }
}

function serializeScalar(v: unknown): string {
  return typeof v === "string" ? v : JSON.stringify(v);
}

async function extractApiKey(security: unknown): Promise<string | undefined> {
  if (!security) return undefined;
  // The SDK wraps security as a lazy resolver (sync or async function) so
  // the API key can be fetched per-request — this matches the shape
  // api/mcp.ts passes in production.
  if (typeof security === "function") {
    const resolved = await (security as () => unknown | Promise<unknown>)();
    return readApiKey(resolved);
  }
  return readApiKey(security);
}

function readApiKey(security: unknown): string | undefined {
  if (typeof security === "object" && security !== null) {
    const key = (security as { apiKey?: string }).apiKey;
    return typeof key === "string" && key.length > 0 ? key : undefined;
  }
  return undefined;
}

function toBytes(value: unknown): { data: Uint8Array; mimeType: string } | null {
  if (value == null) return null;
  if (typeof value === "string") {
    const decoded = decodeBase64(value);
    if (!decoded.data) return null;
    return { data: decoded.data, mimeType: decoded.mimeType };
  }
  if (typeof value === "object") {
    const obj = value as { data?: string; mimeType?: string };
    if (typeof obj.data !== "string") return null;
    const decoded = decodeBase64(obj.data);
    if (!decoded.data) return null;
    return { data: decoded.data, mimeType: obj.mimeType ?? decoded.mimeType };
  }
  return null;
}

function decodeBase64(s: string): { data: Uint8Array | null; mimeType: string } {
  let mimeType = "application/octet-stream";
  let payload = s;
  const dataUrl = /^data:([^;]+);base64,(.+)$/.exec(s);
  if (dataUrl) {
    mimeType = dataUrl[1]!;
    payload = dataUrl[2]!;
  }
  try {
    return { data: Buffer.from(payload, "base64"), mimeType };
  } catch {
    return { data: null, mimeType };
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function toolError(message: string): CallToolResult {
  return { content: [{ type: "text", text: message }], isError: true };
}
