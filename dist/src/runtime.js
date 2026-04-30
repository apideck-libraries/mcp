// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { Buffer } from 'node:buffer';
import { RuntimeError } from './types.js';
import { buildConnectionElicitation, connectionIssueFallback, detectConnectionIssue, mintVaultSessionUrl, } from './elicitation.js';
const DEFAULT_BASE_URL = 'https://unify.apideck.com';
const MAX_ATTEMPTS = 4;
const BASE_DELAY_MS = 500;
const CAP_MS = 30_000;
const RETRIABLE_NETWORK_CODES = new Set([
    'ECONNRESET',
    'ECONNREFUSED',
    'EAI_AGAIN',
    'UND_ERR_SOCKET',
    'ETIMEDOUT',
    'ENETUNREACH',
]);
const RETRIABLE_STATUSES = new Set([408, 500, 502, 503, 504]);
const IDEMPOTENT_METHODS = new Set([
    'GET',
    'HEAD',
    'PUT',
    'DELETE',
    'OPTIONS',
    'TRACE',
]);
const DATA_URL_PATTERN = /^data:([^;,]+);base64,(.+)$/;
const isBinaryStruct = (value) => {
    if (typeof value !== 'object' || value === null)
        return false;
    const v = value;
    if (typeof v.mimeType !== 'string')
        return false;
    return typeof v.data === 'string' || v.data instanceof Uint8Array;
};
const isDataUrl = (value) => typeof value === 'string' && DATA_URL_PATTERN.test(value);
const decodeBase64 = (s) => new Uint8Array(Buffer.from(s, 'base64'));
const parseDataUrl = (s) => {
    const match = DATA_URL_PATTERN.exec(s);
    if (!match || !match[1] || !match[2]) {
        throw new RuntimeError('invalid data URL');
    }
    return { mimeType: match[1], bytes: decodeBase64(match[2]) };
};
const structToBytes = (data) => typeof data === 'string' ? decodeBase64(data) : data;
const classifyBody = (body) => {
    if (body === undefined || body === null)
        return { kind: 'none' };
    if (isDataUrl(body)) {
        const { mimeType, bytes } = parseDataUrl(body);
        return { kind: 'binary', bytes, mimeType };
    }
    if (isBinaryStruct(body)) {
        return {
            kind: 'binary',
            bytes: structToBytes(body.data),
            mimeType: body.mimeType,
        };
    }
    return { kind: 'json', data: body };
};
const buildUrl = (req) => {
    const base = process.env.APIDECK_BASE_URL ?? DEFAULT_BASE_URL;
    const url = new URL(req.path, base);
    if (req.query) {
        for (const [k, v] of Object.entries(req.query)) {
            if (v === undefined)
                continue;
            url.searchParams.set(k, String(v));
        }
    }
    return url;
};
const isIdempotent = (method) => IDEMPOTENT_METHODS.has(method);
const isRetriableStatus = (status, method) => {
    if (!RETRIABLE_STATUSES.has(status))
        return false;
    if (status === 408)
        return true;
    return isIdempotent(method);
};
const isNetworkError = (err) => {
    if (!(err instanceof TypeError))
        return false;
    if (err.message !== 'fetch failed')
        return false;
    const cause = err.cause;
    if (typeof cause !== 'object' || cause === null)
        return false;
    const code = cause.code;
    return typeof code === 'string' && RETRIABLE_NETWORK_CODES.has(code);
};
export const computeDelay = (attempt, base, cap) => {
    const expCeil = Math.min(cap, base * 2 ** attempt);
    return expCeil * 0.8 + Math.random() * expCeil * 0.2;
};
const abortError = (signal) => {
    const reason = signal?.reason;
    if (reason instanceof Error)
        return reason;
    return new DOMException('Aborted', 'AbortError');
};
const sleep = (ms, signal) => new Promise((resolve, reject) => {
    if (signal?.aborted) {
        reject(abortError(signal));
        return;
    }
    let onAbort;
    const timer = setTimeout(() => {
        if (signal && onAbort)
            signal.removeEventListener('abort', onAbort);
        resolve();
    }, ms);
    if (signal) {
        onAbort = () => {
            clearTimeout(timer);
            reject(abortError(signal));
        };
        signal.addEventListener('abort', onAbort, { once: true });
    }
});
const extractMimeType = (contentType) => (contentType.split(';')[0] ?? '').trim().toLowerCase();
const tryParseBody = async (resp) => {
    const ct = resp.headers.get('content-type') ?? '';
    if (ct.includes('application/json')) {
        try {
            return await resp.json();
        }
        catch {
            return null;
        }
    }
    const text = await resp.text();
    return text === '' ? null : text;
};
const mapSuccessResponse = async (resp, requestPath) => {
    const mime = extractMimeType(resp.headers.get('content-type') ?? '');
    if (mime.startsWith('image/')) {
        const bytes = new Uint8Array(await resp.arrayBuffer());
        return {
            kind: 'mcpContent',
            block: {
                type: 'image',
                data: Buffer.from(bytes).toString('base64'),
                mimeType: mime,
            },
        };
    }
    if (mime.startsWith('audio/')) {
        const bytes = new Uint8Array(await resp.arrayBuffer());
        return {
            kind: 'mcpContent',
            block: {
                type: 'audio',
                data: Buffer.from(bytes).toString('base64'),
                mimeType: mime,
            },
        };
    }
    if (mime === 'application/octet-stream' || mime === '') {
        const bytes = new Uint8Array(await resp.arrayBuffer());
        return {
            kind: 'mcpContent',
            block: {
                type: 'resource',
                resource: {
                    uri: `apideck://unify${requestPath}`,
                    blob: Buffer.from(bytes).toString('base64'),
                    mimeType: mime || 'application/octet-stream',
                },
            },
        };
    }
    const body = await tryParseBody(resp);
    return { kind: 'json', status: resp.status, body };
};
const prepareRequest = async (req) => {
    const { apiKey } = await req.context.apiKey();
    const headers = {};
    const shape = classifyBody(req.body);
    const canHaveBody = req.method !== 'GET' && req.method !== 'HEAD';
    let body;
    if (canHaveBody && shape.kind === 'json') {
        headers['content-type'] = 'application/json';
        body = JSON.stringify(shape.data);
    }
    else if (canHaveBody && shape.kind === 'binary') {
        const form = new FormData();
        const blob = new Blob([shape.bytes], { type: shape.mimeType });
        form.append('file', blob);
        body = form;
    }
    headers.authorization = `Bearer ${apiKey}`;
    headers['x-apideck-consumer-id'] = req.context.consumerId;
    headers['x-apideck-app-id'] = req.context.appId;
    if (req.headers) {
        for (const [k, v] of Object.entries(req.headers))
            headers[k] = v;
    }
    const init = { method: req.method, headers };
    if (body !== undefined)
        init.body = body;
    if (req.context.signal !== undefined)
        init.signal = req.context.signal;
    return { url: buildUrl(req), init };
};
export const callRuntime = async (req, options = {}) => {
    const maxAttempts = options.maxAttempts ?? MAX_ATTEMPTS;
    const baseDelay = options.baseDelayMs ?? BASE_DELAY_MS;
    const cap = options.capMs ?? CAP_MS;
    const { logger, signal } = req.context;
    if (signal?.aborted)
        throw abortError(signal);
    const { url, init } = await prepareRequest(req);
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        if (signal?.aborted)
            throw abortError(signal);
        logger.info('runtime.fetch', {
            method: req.method,
            path: req.path,
            attempt,
        });
        let resp;
        try {
            resp = await fetch(url, init);
        }
        catch (err) {
            if (signal?.aborted)
                throw abortError(signal);
            if (isNetworkError(err)) {
                logger.warn('runtime.network-error', {
                    code: err.cause.code,
                    attempt,
                });
                if (attempt < maxAttempts - 1) {
                    await sleep(computeDelay(attempt, baseDelay, cap), signal);
                    continue;
                }
                logger.error('runtime.network-exhausted', { code: err.cause.code });
                throw new RuntimeError('network error', {
                    code: err.cause.code,
                    cause: err,
                });
            }
            throw err;
        }
        if (resp.ok) {
            return await mapSuccessResponse(resp, req.path);
        }
        const retriable = isRetriableStatus(resp.status, req.method);
        if (retriable && attempt < maxAttempts - 1) {
            logger.warn('runtime.retriable-status', {
                status: resp.status,
                attempt,
            });
            await sleep(computeDelay(attempt, baseDelay, cap), signal);
            continue;
        }
        const body = await tryParseBody(resp);
        logger.error('runtime.http-error', { status: resp.status });
        const issue = detectConnectionIssue(resp.status, body);
        if (issue) {
            let sessionUrl = null;
            try {
                sessionUrl = await mintVaultSessionUrl({
                    apiKey: req.context.apiKey,
                    appId: req.context.appId,
                    consumerId: req.context.consumerId,
                    ...(signal !== undefined ? { signal } : {}),
                });
            }
            catch {
                sessionUrl = null;
            }
            if (sessionUrl !== null)
                throw buildConnectionElicitation(issue, sessionUrl);
            return connectionIssueFallback(issue);
        }
        throw new RuntimeError(`HTTP ${resp.status}`, {
            status: resp.status,
            body,
        });
    }
    throw new RuntimeError('runtime loop exhausted without resolution');
};
//# sourceMappingURL=runtime.js.map