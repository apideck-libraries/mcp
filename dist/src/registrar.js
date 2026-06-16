// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { z } from 'zod';
import { scopeAnnotations } from './mtqs.js';
const SERVICE_ID_SHAPE = {
    service_id: z
        .string()
        .optional()
        .describe('Apideck service_id (e.g. "quickbooks", "xero") selecting which downstream connection to route to. Overrides the x-apideck-service-id header and APIDECK_SERVICE_ID env for this call. Omit to use the consumer default.'),
};
export const registerTool = (server, tool, opts) => {
    if (opts.allowedTools && !opts.allowedTools.includes(tool.name)) {
        return 0;
    }
    if (opts.scopes && !opts.scopes.includes(tool.scope)) {
        return 0;
    }
    // Full scope-derived posture, with optional per-tool overrides (e.g. a
    // closed-domain tool setting openWorldHint:false). Every hint is explicit
    // so voke never falls back to its most-restrictive defaults.
    const annotations = { ...scopeAnnotations(tool.scope), ...tool.annotations };
    server.registerTool(tool.name, {
        ...(tool.title !== undefined ? { title: tool.title } : {}),
        ...(tool.description !== undefined
            ? { description: tool.description }
            : {}),
        inputSchema: tool.inputSchema.extend(SERVICE_ID_SHAPE),
        annotations,
    }, tool.handler);
    return 1;
};
//# sourceMappingURL=registrar.js.map