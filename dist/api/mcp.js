// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { waitUntil } from '@vercel/functions';
import { createAnalytics } from '../src/analytics.js';
import { createConsoleLogger } from '../src/logger.js';
import { createServer } from '../src/server.js';
import { tools as allTools } from '../src/tools.js';
import { workflows } from '../src/workflows/index.js';
export const config = { maxDuration: 60 };
const CORS_HEADERS = [
    ['Access-Control-Allow-Origin', '*'],
    ['Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS'],
    ['Access-Control-Allow-Headers', 'Content-Type, *'],
];
const setCorsHeaders = (res) => {
    for (const [k, v] of CORS_HEADERS)
        res.setHeader(k, v);
};
const deriveDomainScopes = (ts) => [...new Set(ts.map((t) => t.domain))].sort();
const SERVER_DESCRIPTION = 'Apideck MCP server (clean-room): unified API tools across CRM, Accounting, HRIS, file storage, and more.';
const parseUrl = (rawUrl) => new URL(rawUrl ?? '/', 'http://localhost');
const getHeader = (headers, name) => {
    const v = headers[name.toLowerCase()];
    if (Array.isArray(v))
        return v[0];
    return v;
};
const parseAuthApiKey = (headers) => {
    const headerKey = getHeader(headers, 'x-apideck-api-key');
    if (headerKey)
        return headerKey;
    const auth = getHeader(headers, 'authorization');
    if (auth && /^Bearer\s+/i.test(auth)) {
        return auth.replace(/^Bearer\s+/i, '');
    }
    return undefined;
};
const envOrThrow = (key) => {
    const v = process.env[key];
    if (v === undefined || v === '') {
        throw new Error(`${key} must be set to invoke Apideck tools`);
    }
    return v;
};
export const createHandler = (opts = {}) => async (req, res) => {
    setCorsHeaders(res);
    const method = req.method ?? 'GET';
    if (method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }
    const url = parseUrl(req.url);
    if (url.searchParams.get('engine') === 'legacy') {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            error: 'engine knob removed; clean-room generator only',
        }));
        return;
    }
    if (method === 'GET') {
        const body = {
            name: 'apideck-mcp',
            description: SERVER_DESCRIPTION,
            tools: allTools.length + workflows.length,
            modes: ['static', 'dynamic', 'code'],
            scopes: deriveDomainScopes(allTools),
            version: process.env.npm_package_version ?? '0.1.0',
            commit_sha: process.env.VERCEL_GIT_COMMIT_SHA ?? null,
            sample_tools: allTools.slice(0, 5).map((t) => t.name),
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(body));
        return;
    }
    if (method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Method not allowed' }));
        return;
    }
    const headerApiKey = parseAuthApiKey(req.headers);
    const headerConsumerId = getHeader(req.headers, 'x-apideck-consumer-id');
    const headerAppId = getHeader(req.headers, 'x-apideck-app-id');
    const modeParam = url.searchParams.get('mode');
    const VALID_MODES = ['static', 'dynamic', 'code'];
    if (modeParam !== null && !VALID_MODES.includes(modeParam)) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            error: `invalid mode: ${modeParam}; expected one of ${VALID_MODES.join(', ')}`,
        }));
        return;
    }
    const mode = modeParam ?? 'dynamic';
    const getContext = () => ({
        apiKey: async () => {
            const key = headerApiKey ?? process.env.APIDECK_API_KEY;
            if (!key || key === '') {
                throw new Error('APIDECK_API_KEY must be set to invoke Apideck tools');
            }
            return { apiKey: key };
        },
        consumerId: headerConsumerId ?? envOrThrow('APIDECK_CONSUMER_ID'),
        appId: headerAppId ?? envOrThrow('APIDECK_APP_ID'),
        logger: createConsoleLogger(),
    });
    const posthogApiKey = process.env.POSTHOG_API_KEY;
    const analytics = (opts.analyticsFactory ?? createAnalytics)({
        ...(posthogApiKey ? { apiKey: posthogApiKey } : {}),
        logger: createConsoleLogger(),
        onBackground: (p) => waitUntil(p),
    });
    const server = (opts.serverFactory ?? createServer)({
        mode,
        getContext,
        analytics,
    });
    const transport = (opts.transportFactory ?? (() => new StreamableHTTPServerTransport({})))();
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
};
export default createHandler({});
//# sourceMappingURL=mcp.js.map