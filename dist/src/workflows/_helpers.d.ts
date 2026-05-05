import type { CallToolResult, RequestHandlerExtra, ServerNotification, ServerRequest, ToolDefinition } from '../types.js';
/**
 * Discriminated union returned by `runStep`.
 *
 * - `{ ok: true }` — step succeeded; `data` is the extracted payload.
 * - `{ ok: false, unsupported: true }` — connector returned a
 *   `ConnectorExecutionError` (endpoint not implemented by this connector).
 * - `{ ok: false, unsupported: false }` — tool returned `isError: true`
 *   (upstream HTTP error, validation failure, etc.).
 */
export type StepOutcome<T> = {
    ok: true;
    data: T;
} | {
    ok: false;
    unsupported: true;
    reason: string;
    upstream?: unknown;
} | {
    ok: false;
    unsupported: false;
    error: string;
    upstream?: unknown;
};
/**
 * Look up `name` in `tools` and dispatch through `tool.handler(args, extra)`.
 *
 * Returns a `StepOutcome<T>` — never throws for business-level failures.
 * Re-throws `McpError` instances so the MCP layer (e.g. URL elicitation)
 * can propagate to the client.
 *
 * @param tools    The full tool array to search.
 * @param name     The exact tool name to invoke.
 * @param args     Arguments passed verbatim to the handler.
 * @param extra    Request handler context forwarded to the handler.
 * @param pick     Optional extractor applied to the full parsed `body`
 *                 object. When omitted, defaults to `body.data`.
 */
export declare const runStep: <T>(tools: ReadonlyArray<ToolDefinition>, name: string, args: Record<string, unknown>, extra: RequestHandlerExtra<ServerRequest, ServerNotification>, pick?: (body: unknown) => T) => Promise<StepOutcome<T>>;
/**
 * Extract `x-apideck-service-id` from handler args.
 *
 * Returns `serviceId` (string or undefined) and `common` — a record that
 * can be spread into downstream step args to forward the service id.
 */
export declare const extractServiceContext: (args: Record<string, unknown>) => {
    serviceId: string | undefined;
    common: Record<string, unknown>;
};
/** Return the `data` field of a parsed response body. */
export declare const pickData: (body: unknown) => unknown;
/**
 * Wrap a payload as a JSON `CallToolResult`.
 *
 * When `isError` is `true` the result object is marked with `isError: true`
 * so the MCP client treats it as a tool error.
 */
export declare const workflowJsonResult: (payload: unknown, isError?: boolean) => CallToolResult;
//# sourceMappingURL=_helpers.d.ts.map