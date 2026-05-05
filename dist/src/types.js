// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
export const SCOPES = ['read', 'write', 'destructive'];
export class RuntimeError extends Error {
    status;
    code;
    body;
    constructor(message, options = {}) {
        super(message, options.cause !== undefined ? { cause: options.cause } : undefined);
        this.name = 'RuntimeError';
        if (options.status !== undefined)
            this.status = options.status;
        if (options.code !== undefined)
            this.code = options.code;
        if (options.body !== undefined)
            this.body = options.body;
    }
}
//# sourceMappingURL=types.js.map