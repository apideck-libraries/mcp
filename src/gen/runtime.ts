/**
 * Minimal fetch-based runtime for the generated Apideck MCP tools.
 *
 * Replaces src/funcs/* + src/lib/* for the MCP call path. Each generated
 * tool passes a descriptor + the raw request object from the LLM; this
 * helper splits fields by their OpenAPI parameter location and makes the
 * HTTP call.
 *
 * Conscious non-goals (vs Speakeasy): typed error envelopes, retry
 * strategies, deepObject query encoding, multipart upload handling. The
 * response is returned verbatim as text to the LLM.
 */

import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { ApideckMcpCore } from "../core.js";

const BASE_URL = "https://unify.apideck.com";

export interface ApideckCallDescriptor {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string; // e.g. "/accounting/invoices/{id}"
  pathParams: string[];
  queryParams: string[];
  headerParams: string[];
  hasBody: boolean;
  signal?: AbortSignal;
}

export async function callApideck(
  client: ApideckMcpCore,
  desc: ApideckCallDescriptor,
  request: Record<string, unknown>,
): Promise<CallToolResult> {
  const pathParams = new Set(desc.pathParams);
  const queryParams = new Set(desc.queryParams);
  const headerParams = new Set(desc.headerParams);

  // Substitute path params
  let path = desc.path;
  for (const p of desc.pathParams) {
    const v = request[p];
    if (v === undefined) {
      return toolError(`Missing required path parameter: ${p}`);
    }
    path = path.replaceAll(`{${p}}`, encodeURIComponent(String(v)));
  }

  // Collect query + headers + body
  const query = new URLSearchParams();
  const headers = new Headers({ Accept: "application/json" });
  let body: BodyInit | null = null;

  // Auth from SDK options
  const opts = client._options as {
    security?: unknown;
    appId?: string;
    consumerId?: string;
  };
  const apiKey = extractApiKey(opts.security);
  if (apiKey) headers.set("Authorization", `Bearer ${apiKey}`);
  if (opts.appId) headers.set("x-apideck-app-id", opts.appId);
  if (opts.consumerId) headers.set("x-apideck-consumer-id", opts.consumerId);

  for (const [k, v] of Object.entries(request)) {
    if (v === undefined || v === null) continue;
    if (pathParams.has(k)) continue;
    if (queryParams.has(k)) {
      if (Array.isArray(v)) {
        for (const item of v) query.append(k, serializeScalar(item));
      } else if (typeof v === "object") {
        // deepObject-style: key[sub]=val
        for (const [sk, sv] of Object.entries(v as Record<string, unknown>)) {
          if (sv === undefined || sv === null) continue;
          query.append(`${k}[${sk}]`, serializeScalar(sv));
        }
      } else {
        query.append(k, serializeScalar(v));
      }
    } else if (headerParams.has(k)) {
      headers.set(k, String(v));
    } else if (desc.hasBody && k === "body") {
      // Passthrough: arbitrary object body
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(v);
    }
  }

  // Fallback: if hasBody but no "body" key, treat remaining unrecognised keys as body
  if (desc.hasBody && !body) {
    const bodyObj: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(request)) {
      if (pathParams.has(k) || queryParams.has(k) || headerParams.has(k)) continue;
      bodyObj[k] = v;
    }
    if (Object.keys(bodyObj).length > 0) {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(bodyObj);
    }
  }

  const qs = query.toString();
  const url = `${BASE_URL}${path}${qs ? `?${qs}` : ""}`;

  let resp: Response;
  try {
    resp = await fetch(url, {
      method: desc.method,
      headers,
      body,
      signal: desc.signal ?? null,
    });
  } catch (err) {
    return toolError(
      `Request to ${url} failed: ${err instanceof Error ? err.message : String(err)}`,
    );
  }

  const text = await resp.text();
  return {
    content: [{ type: "text", text }],
    isError: !resp.ok,
  };
}

function serializeScalar(v: unknown): string {
  return typeof v === "string" ? v : JSON.stringify(v);
}

function extractApiKey(security: unknown): string | undefined {
  if (!security) return undefined;
  if (typeof security === "function") {
    // Lazy security resolver — not awaited here; auth header will be set
    // when createApideckAuthClient is used. For now, bail.
    return undefined;
  }
  if (typeof security === "object" && security !== null) {
    const s = security as { apiKey?: string };
    return s.apiKey;
  }
  return undefined;
}

function toolError(message: string): CallToolResult {
  return { content: [{ type: "text", text: message }], isError: true };
}
