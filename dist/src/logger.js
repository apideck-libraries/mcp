// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
export const createConsoleLogger = () => ({
    info: (msg, meta) => {
        console.info(`${msg} ${JSON.stringify(meta ?? {})}`);
    },
    warn: (msg, meta) => {
        console.warn(`${msg} ${JSON.stringify(meta ?? {})}`);
    },
    error: (msg, meta) => {
        console.error(`${msg} ${JSON.stringify(meta ?? {})}`);
    },
});
//# sourceMappingURL=logger.js.map