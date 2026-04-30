import type { ToolDefinition } from '../types.js';
/**
 * Build the `apideck_search` tool definition. Factory takes the endpoint
 * tool array (typically `tools` from `tools.ts`) so tests can inject a
 * small fixture without module-level mocking.
 *
 * Note: `apideck_search`'s result set is unaffected by any server-level
 * `allowedTools` configuration — it always operates on the full array
 * passed to the factory. Code mode is opinionated this way by design.
 */
export declare const createApideckSearch: (endpointTools: ReadonlyArray<ToolDefinition>) => ToolDefinition;
//# sourceMappingURL=search.d.ts.map