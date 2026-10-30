import type { Analytics } from '../analytics.js';
import type { MCPMode, ToolDefinition } from '../types.js';
/**
 * Build a readable message for an upstream HTTP failure: `HTTP <status>`,
 * plus `: <message> - <detail>` from the Apideck error body when present.
 */
export declare const formatHttpErrorMessage: (status: number, body: unknown) => string;
export interface RunToolOpts {
    analytics?: Analytics;
    mode?: MCPMode;
}
/**
 * Build the `apideck_run` tool definition. Factory takes the endpoint
 * tool array (typically `tools` from `tools.ts`) so each call binds
 * `apideck.*` methods against a known set.
 *
 * When `opts.analytics` is provided, every `apideck.<method>(input)` call
 * inside the sandbox emits an `mcp_tool_called` event for the real
 * dispatched tool — `apideck_run` itself stays unwrapped so a single
 * client invocation that calls multiple endpoints emits one event per
 * endpoint dispatch.
 */
export declare const createRunTool: (endpointTools: ReadonlyArray<ToolDefinition>, opts?: RunToolOpts) => ToolDefinition;
//# sourceMappingURL=run.d.ts.map