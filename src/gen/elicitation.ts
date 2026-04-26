/**
 * Detect Vault connection issues in upstream Apideck responses and
 * hand the user a consent URL via MCP's URL-mode elicitation.
 *
 * When Apideck returns a connector error that means "the consumer hasn't
 * connected this service yet" or "their token has expired", we:
 *   1. Mint a one-time Vault session URL via /vault/sessions
 *   2. Throw UrlElicitationRequiredError so the MCP client (Claude Code
 *      today; others following) can render a "Connect your account" button
 *   3. Fall back to a descriptive text error on clients that don't yet
 *      handle URL elicitation — the LLM can still surface the URL
 */

import { UrlElicitationRequiredError } from "@modelcontextprotocol/sdk/types.js";
import { randomUUID } from "node:crypto";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

const VAULT_SESSIONS_ENDPOINT = "https://unify.apideck.com/vault/sessions";

/** Canonical markers for "the consumer needs to (re-)authorise a connection". */
const CONNECTION_ISSUE_MARKERS = [
  "re-authorize the connection",
  "re-authorise the connection",
  "connection is missing",
  "no active connection",
  "connection not found",
  "connection is disabled",
  "invalid grant",
  "unauthorized_client",
  "persistuseruid hook",
  "noconnectionfound",
  "connector not authorized",
  "connector credentials error",
  "connectorcredentialserror",
];

export interface ConnectionIssue {
  status: number;
  /** Unified API the failing call targeted, e.g. "accounting". */
  unifiedApi?: string | undefined;
  /** Service ID of the specific connector, e.g. "xero". */
  serviceId?: string | undefined;
  /** Short human-readable explanation lifted from the upstream response. */
  summary: string;
}

/**
 * Inspect an Apideck response body to decide whether the failure is a
 * connection-level issue (consumer needs to auth a connector) rather
 * than a bad request or a real server error.
 */
export function detectConnectionIssue(
  status: number,
  body: string,
): ConnectionIssue | null {
  if (status < 400) return null;

  const bodyLower = body.toLowerCase();
  const hasMarker = CONNECTION_ISSUE_MARKERS.some((m) => bodyLower.includes(m));
  if (!hasMarker) return null;

  let unifiedApi: string | undefined;
  let serviceId: string | undefined;
  let summary = body.slice(0, 200);

  try {
    const parsed = JSON.parse(body) as {
      message?: string;
      detail?: {
        context?: { connector?: string; unified_api?: string };
        error?: { detail?: { errors?: Array<{ message?: string }> } };
      };
    };
    const ctx = parsed.detail?.context;
    if (ctx?.unified_api) unifiedApi = ctx.unified_api;
    if (ctx?.connector) serviceId = ctx.connector.toLowerCase();
    const inner = parsed.detail?.error?.detail?.errors?.[0]?.message;
    summary = inner ?? parsed.message ?? summary;
  } catch {
    // Non-JSON body — keep the truncated text summary.
  }

  return { status, unifiedApi, serviceId, summary };
}

export interface VaultSessionContext {
  /** Resolved API key (already extracted from lazy security). */
  apiKey: string;
  appId?: string | undefined;
  consumerId?: string | undefined;
  signal?: AbortSignal | undefined;
}

/**
 * POST /vault/sessions to get a one-time-use consent URL. Returns null
 * if we can't mint one (e.g., no consumer_id configured) — the caller
 * then falls back to a plain text error.
 */
export async function mintVaultSessionUrl(
  ctx: VaultSessionContext,
): Promise<string | null> {
  if (!ctx.apiKey || !ctx.consumerId) return null;

  const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${ctx.apiKey}`,
    "x-apideck-consumer-id": ctx.consumerId,
  });
  if (ctx.appId) headers.set("x-apideck-app-id", ctx.appId);

  let resp: Response;
  try {
    resp = await fetch(VAULT_SESSIONS_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({}),
      signal: ctx.signal ?? null,
    });
  } catch {
    return null;
  }
  if (!resp.ok) return null;

  try {
    const body = await resp.json() as { data?: { session_uri?: string } };
    return body.data?.session_uri ?? null;
  } catch {
    return null;
  }
}

/**
 * Build either an MCP UrlElicitationRequiredError (for clients that
 * support URL elicitation) or a descriptive CallToolResult fallback.
 * Callers decide which to throw/return based on negotiated client
 * capabilities; by default we throw the elicitation — the SDK emits
 * a well-formed JSON-RPC error that clients without URL support can
 * still surface as text.
 */
export function buildConnectionElicitation(
  issue: ConnectionIssue,
  sessionUrl: string,
): UrlElicitationRequiredError {
  const target = issue.serviceId
    ? `your ${issue.serviceId}${issue.unifiedApi ? " " + issue.unifiedApi : ""} connection`
    : "the required connection";
  const message =
    `Apideck couldn't reach ${target}: ${issue.summary}\n` +
    `Open the link below to connect or re-authorise, then retry the tool call.`;
  return new UrlElicitationRequiredError(
    [
      {
        mode: "url",
        message,
        url: sessionUrl,
        elicitationId: randomUUID(),
      },
    ],
    message,
  );
}

/** Plain-text fallback for clients that don't support URL elicitation. */
export function connectionIssueFallback(
  issue: ConnectionIssue,
  sessionUrl: string | null,
): CallToolResult {
  const parts = [
    `Apideck connection issue (HTTP ${issue.status}).`,
    issue.unifiedApi || issue.serviceId
      ? `Target: ${issue.unifiedApi ?? "?"}${issue.serviceId ? "/" + issue.serviceId : ""}`
      : undefined,
    `Reason: ${issue.summary}`,
    sessionUrl
      ? `Complete Vault consent: ${sessionUrl}`
      : "Ask the end-user to connect the service in Apideck Vault, then retry.",
  ].filter(Boolean);
  return {
    content: [{ type: "text", text: parts.join("\n") }],
    isError: true,
  };
}
