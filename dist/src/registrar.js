// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
const annotationsForScope = (scope) => {
    switch (scope) {
        case 'read':
            return { readOnlyHint: true };
        case 'write':
            return { readOnlyHint: false };
        case 'destructive':
            return { readOnlyHint: false, destructiveHint: true };
    }
};
export const registerTool = (server, tool, opts) => {
    if (opts.allowedTools && !opts.allowedTools.includes(tool.name)) {
        return 0;
    }
    if (opts.scopes && !opts.scopes.includes(tool.scope)) {
        return 0;
    }
    const annotations = annotationsForScope(tool.scope);
    server.registerTool(tool.name, {
        ...(tool.title !== undefined ? { title: tool.title } : {}),
        ...(tool.description !== undefined
            ? { description: tool.description }
            : {}),
        inputSchema: tool.inputSchema,
        annotations,
    }, tool.handler);
    return 1;
};
//# sourceMappingURL=registrar.js.map