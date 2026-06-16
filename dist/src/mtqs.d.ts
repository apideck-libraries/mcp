/**
 * MTQS (MCP Tool Quality Spec v0.1) compliance helpers.
 *
 * The MCP SDK's ListTools handler converts every zod inputSchema with a
 * hardcoded `target: 'draft-7'` (see zod-json-schema-compat in the SDK), so
 * each emitted schema carries `"$schema": "http://json-schema.org/draft-07/..."`
 * and omits a `required` array when no field is mandatory. voke validates
 * inputSchema against the JSON-Schema-2020-12 meta-schema, so the draft-07
 * dialect fails MTQS-S03 and the implicit-optional shape trips MTQS-S07.
 *
 * The SDK exposes no hook to change the target or post-process the response,
 * so we wrap the installed tools/list handler and normalize each schema in
 * place. The transform is content-free (dialect + explicit required only);
 * descriptions, enums, and annotations are fixed at the zod/registration
 * source where the SDK passes them through untouched.
 */
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { MCPScope, ToolAnnotations } from './types.js';
/**
 * Full annotation posture per scope. Every hint is set explicitly so voke
 * never falls back to its most-restrictive defaults (MTQS-A01/A03/A04/A05).
 * `openWorldHint` defaults to true because Apideck tools reach external,
 * consumer-connected APIs; closed-domain tools (local registry lookups)
 * override it to false at their definition.
 */
export declare const scopeAnnotations: (scope: MCPScope) => Required<ToolAnnotations>;
type JsonSchema = Record<string, unknown>;
/**
 * Normalize a single JSON Schema emitted by the SDK:
 * - drop the draft-07 `$schema` so voke interprets it under 2020-12 (S03)
 * - add an explicit `required: []` to object schemas that declare properties
 *   but no required list (S07)
 */
export declare const normalizeInputSchema: (schema: JsonSchema) => JsonSchema;
interface ListToolsResultShape {
    tools?: Array<{
        inputSchema?: unknown;
    }>;
}
/** Normalize every tool's inputSchema in a tools/list result, in place. */
export declare const normalizeToolsListResult: <T extends ListToolsResultShape>(result: T) => T;
/**
 * Wrap the SDK-installed tools/list handler so every emitted inputSchema is
 * MTQS-2020-12 compliant. Must be called AFTER all tools are registered — the
 * SDK installs its handler lazily on the first registerTool call.
 *
 * The low-level Server keys request handlers by method literal in a private
 * Map with no public accessor, so we read the SDK's handler and replace it
 * with one that transforms its output.
 */
export declare const applyMtqsNormalization: (server: McpServer) => void;
export {};
//# sourceMappingURL=mtqs.d.ts.map