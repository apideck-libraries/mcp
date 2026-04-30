// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { z } from 'zod';
export const createSmokeTool = (mode) => ({
    name: 'apideck-ping',
    title: 'Apideck Ping',
    description: 'Smoke-test tool. Returns ok + version + mode.',
    domain: 'smoke',
    scope: 'read',
    inputSchema: z.object({}),
    handler: (_args, _extra) => ({
        content: [
            {
                type: 'text',
                text: JSON.stringify({
                    ok: true,
                    version: process.env.npm_package_version ?? '0.0.0',
                    mode,
                }),
            },
        ],
    }),
});
//# sourceMappingURL=smoke-tool.js.map