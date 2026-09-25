import type { ToolDefinition } from '../types.js';
/**
 * Build the `apideck_search` tool definition. Factory takes the endpoint
 * tool array (typically `tools` from `tools.ts`) so tests can inject a
 * small fixture without module-level mocking.
 *
 * Note: `apideck_search`'s result set is unaffected by any server-level
 * `allowedTools` configuration — it always operates on whatever array is
 * passed to the factory. `allowedTools` is a fine-grained name allowlist
 * that doesn't compose with this mode, so it's ignored; the caller
 * (`createServer`) does pre-filter that array by `scopes` before
 * constructing this tool.
 */
export declare const createApideckSearch: (endpointTools: ReadonlyArray<ToolDefinition>) => ToolDefinition;
//# sourceMappingURL=search.d.ts.map