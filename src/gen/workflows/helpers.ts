/**
 * Shared helpers for Apideck workflow tools.
 *
 * Workflow tools orchestrate 2-5 generated endpoint calls behind a single
 * intent-driven MCP tool. They use these helpers to:
 *   - Invoke a generated tool by name + arguments
 *   - Parse the JSON body out of a CallToolResult
 *   - Surface errors as thrown Error subclasses so the orchestrator can
 *     decide whether to abort the whole workflow or continue
 */

import type * as z from "zod";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { ApideckMcpCore } from "../../core.js";
import type { ToolDefinition } from "../../mcp-server/tools.js";
import { generatedTools } from "../tools.js";

const byName = new Map<string, (typeof generatedTools)[number]>(
  generatedTools.map((t) => [t.name, t]),
);

export class WorkflowStepError extends Error {
  constructor(
    message: string,
    public readonly tool: string,
    public readonly body: unknown,
  ) {
    super(message);
    this.name = "WorkflowStepError";
  }
}

export interface StepContext {
  signal?: AbortSignal;
}

/**
 * Call a generated tool by name. Returns the parsed JSON body on success;
 * throws WorkflowStepError on any failure so the workflow fails fast.
 */
export async function callTool(
  client: ApideckMcpCore,
  name: string,
  args: Record<string, unknown>,
  ctx: StepContext,
): Promise<unknown> {
  const def = byName.get(name);
  if (!def) throw new Error(`Unknown workflow step: ${name}`);
  const result = (await (def as unknown as {
    tool: (
      c: ApideckMcpCore,
      a: { request?: unknown },
      x: { signal?: AbortSignal | undefined },
    ) => Promise<CallToolResult>;
  }).tool(client, { request: args }, { signal: ctx.signal })) as CallToolResult;
  const body = result.content?.[0] && "text" in result.content[0]
    ? (result.content[0] as { text: string }).text
    : "";
  let parsed: unknown = body;
  try {
    parsed = JSON.parse(body);
  } catch {
    /* body isn't JSON — keep raw string */
  }
  if (result.isError) {
    throw new WorkflowStepError(
      `${name} failed: ${body.slice(0, 200)}`,
      name,
      parsed,
    );
  }
  return parsed;
}

/** Standard MCP content shape for returning JSON from a workflow. */
export function workflowJsonResult(obj: unknown, isError = false): CallToolResult {
  return {
    content: [{ type: "text", text: JSON.stringify(obj, null, 2) }],
    isError,
  };
}

/** Surface a workflow error as a CallToolResult (caller decides to re-throw or not). */
export function workflowErrorResult(err: unknown): CallToolResult {
  if (err instanceof WorkflowStepError) {
    return workflowJsonResult(
      { error: err.message, failingStep: err.tool, upstream: err.body },
      true,
    );
  }
  const message = err instanceof Error ? err.message : String(err);
  return workflowJsonResult({ error: message }, true);
}

/**
 * Outcome of one step inside a graceful (allSettled-style) workflow.
 *
 *   ok=true     → use `data` (already passed through pickData)
 *   unsupported → connector doesn't implement this resource / filter
 *   ok=false    → real error (auth, timeout, validation, upstream 5xx)
 */
export type StepOutcome<T = unknown> =
  | { ok: true; data: T }
  | { ok: false; unsupported: true; reason: string; upstream?: unknown }
  | { ok: false; unsupported: false; error: string; upstream?: unknown };

/**
 * Invoke a step and classify its outcome instead of throwing.
 * Use when the workflow should return a partial snapshot rather than abort
 * if one upstream is unsupported.
 */
export async function runStep<T = unknown>(
  client: ApideckMcpCore,
  name: string,
  args: Record<string, unknown>,
  ctx: StepContext,
  pick: (body: unknown) => T = (b) => b as T,
): Promise<StepOutcome<T>> {
  try {
    const body = await callTool(client, name, args, ctx);
    return { ok: true, data: pick(body) };
  } catch (err) {
    if (err instanceof WorkflowStepError) {
      const u = err.body as
        | { status_code?: number; type_name?: string; message?: string; detail?: unknown }
        | undefined;
      const code = u?.status_code;
      const type = u?.type_name;
      const isUnsupported = code === 404
        && (type === "ConnectorExecutionError" || type === "ResourceNotImplementedError");
      const isUnsupportedFilter = type === "UnsupportedFiltersError";
      if (isUnsupported || isUnsupportedFilter) {
        return {
          ok: false,
          unsupported: true,
          reason: u?.message ?? `${name} not supported by this connector`,
          upstream: u,
        };
      }
      return { ok: false, unsupported: false, error: err.message, upstream: u };
    }
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, unsupported: false, error: message };
  }
}

/** Pull the `data` envelope, or pass through if the shape isn't recognised. */
export function pickData(body: unknown): unknown {
  if (body && typeof body === "object" && "data" in body) {
    return (body as { data: unknown }).data;
  }
  return body;
}

/** Type alias for workflow ToolDefinitions. */
export type WorkflowTool = ToolDefinition<Record<string, z.ZodTypeAny>>;
