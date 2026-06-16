// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * Full annotation posture per scope. Every hint is set explicitly so voke
 * never falls back to its most-restrictive defaults (MTQS-A01/A03/A04/A05).
 * `openWorldHint` defaults to true because Apideck tools reach external,
 * consumer-connected APIs; closed-domain tools (local registry lookups)
 * override it to false at their definition.
 */
export const scopeAnnotations = (scope) => {
    switch (scope) {
        case 'read':
            return {
                readOnlyHint: true,
                destructiveHint: false,
                idempotentHint: true,
                openWorldHint: true,
            };
        case 'write':
            return {
                readOnlyHint: false,
                destructiveHint: false,
                idempotentHint: false,
                openWorldHint: true,
            };
        case 'destructive':
            return {
                readOnlyHint: false,
                destructiveHint: true,
                idempotentHint: false,
                openWorldHint: true,
            };
    }
};
/**
 * Normalize a single JSON Schema emitted by the SDK:
 * - drop the draft-07 `$schema` so voke interprets it under 2020-12 (S03)
 * - add an explicit `required: []` to object schemas that declare properties
 *   but no required list (S07)
 */
export const normalizeInputSchema = (schema) => {
    const out = { ...schema };
    delete out['$schema'];
    if (out['type'] === 'object' &&
        out['properties'] !== undefined &&
        out['required'] === undefined) {
        out['required'] = [];
    }
    return out;
};
/** Normalize every tool's inputSchema in a tools/list result, in place. */
export const normalizeToolsListResult = (result) => {
    if (!result || !Array.isArray(result.tools))
        return result;
    for (const tool of result.tools) {
        if (tool.inputSchema && typeof tool.inputSchema === 'object') {
            tool.inputSchema = normalizeInputSchema(tool.inputSchema);
        }
    }
    return result;
};
/**
 * Wrap the SDK-installed tools/list handler so every emitted inputSchema is
 * MTQS-2020-12 compliant. Must be called AFTER all tools are registered — the
 * SDK installs its handler lazily on the first registerTool call.
 *
 * The low-level Server keys request handlers by method literal in a private
 * Map with no public accessor, so we read the SDK's handler and replace it
 * with one that transforms its output.
 */
export const applyMtqsNormalization = (server) => {
    const lowLevel = server.server;
    const method = 'tools/list';
    const original = lowLevel._requestHandlers.get(method);
    if (!original)
        return;
    lowLevel._requestHandlers.set(method, async (req, extra) => {
        const result = await original(req, extra);
        return normalizeToolsListResult(result);
    });
};
//# sourceMappingURL=mtqs.js.map