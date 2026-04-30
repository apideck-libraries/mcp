import type { ToolDefinition } from '../types.js';
/**
 * Build the `apideck_run` tool definition. Factory takes the endpoint
 * tool array (typically `tools` from `tools.ts`) so each call binds
 * `apideck.*` methods against a known set.
 */
export declare const createRunTool: (endpointTools: ReadonlyArray<ToolDefinition>) => ToolDefinition;
//# sourceMappingURL=run.d.ts.map