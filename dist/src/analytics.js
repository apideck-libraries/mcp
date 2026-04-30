// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { RuntimeError } from './types.js';
const VERSION = process.env.npm_package_version ?? '0.1.0';
const POSTHOG_BATCH_URL = 'https://eu.i.posthog.com/batch';
const deriveDistinctId = (props) => {
    const appId = typeof props.app_id === 'string' && props.app_id ? props.app_id : '';
    const consumerId = typeof props.consumer_id === 'string' && props.consumer_id
        ? props.consumer_id
        : '';
    if (appId && consumerId)
        return `${appId}:${consumerId}`;
    if (appId)
        return appId;
    if (consumerId)
        return consumerId;
    return 'mcp-server';
};
const buildAutoProps = () => ({
    $lib: 'apideck-mcp',
    $lib_version: VERSION,
    mcp_version: VERSION,
    environment: process.env.VERCEL_ENV ?? 'development',
    commit_sha: process.env.VERCEL_GIT_COMMIT_SHA,
    deployment_url: process.env.VERCEL_URL,
});
export const createAnalytics = (opts = {}) => {
    const { apiKey, logger, onBackground } = opts;
    const queue = [];
    const flush = async () => {
        if (!apiKey || queue.length === 0)
            return;
        const batch = queue.splice(0, queue.length);
        try {
            const response = await fetch(POSTHOG_BATCH_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ api_key: apiKey, batch }),
            });
            if (!response.ok) {
                logger?.warn('analytics flush non-2xx', { status: response.status });
            }
        }
        catch (err) {
            logger?.warn('analytics flush failed', { error: String(err) });
        }
    };
    const capture = (event, props = {}) => {
        if (!apiKey)
            return;
        const payload = {
            event,
            distinct_id: deriveDistinctId(props),
            properties: { ...buildAutoProps(), ...props },
            timestamp: new Date().toISOString(),
        };
        queue.push(payload);
        if (onBackground)
            onBackground(flush());
    };
    return { capture, flush };
};
export const deriveScope = (toolName) => {
    const dashIdx = toolName.indexOf('-');
    if (dashIdx === -1)
        return null;
    const prefix = toolName.slice(0, dashIdx);
    if (prefix === 'apideck')
        return null;
    return prefix;
};
export const classifyError = (err) => {
    if (err instanceof RuntimeError) {
        const body = err.body;
        if (body?.type_name === 'TimeoutError') {
            return { error_type: 'timeout', status: 'timeout' };
        }
        if (err.status === undefined || err.status === 0) {
            return { error_type: 'network', status: 'error' };
        }
        if (err.status >= 400 && err.status < 500) {
            if (body?.type_name === 'ValidationError') {
                return { error_type: 'validation', status: 'error' };
            }
            return { error_type: 'upstream_4xx', status: 'error' };
        }
        if (err.status >= 500) {
            return { error_type: 'upstream_5xx', status: 'error' };
        }
    }
    if (err instanceof TypeError && !(err instanceof RuntimeError)) {
        return { error_type: 'sandbox', status: 'error' };
    }
    return { error_type: 'upstream_4xx', status: 'error' };
};
export const wrapHandlerWithAnalytics = (tool, analytics, mode) => {
    if (!analytics)
        return tool;
    const scope = deriveScope(tool.name);
    const wrappedHandler = async (args, extra) => {
        const start = Date.now();
        try {
            const result = await tool.handler(args, extra);
            analytics.capture('mcp_tool_called', {
                tool_name: tool.name,
                is_error: false,
                duration_ms: Date.now() - start,
                mode,
                scope,
                status: 'ok',
                error_type: null,
            });
            return result;
        }
        catch (err) {
            const classified = classifyError(err);
            analytics.capture('mcp_tool_called', {
                tool_name: tool.name,
                is_error: true,
                duration_ms: Date.now() - start,
                mode,
                scope,
                status: classified.status,
                error_type: classified.error_type,
            });
            throw err;
        }
    };
    return { ...tool, handler: wrappedHandler };
};
//# sourceMappingURL=analytics.js.map