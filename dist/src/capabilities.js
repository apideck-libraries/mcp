// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
// Lives here (not runtime.ts) so runtime -> capabilities stays one-way.
export const DEFAULT_BASE_URL = 'https://unify.apideck.com';
export const CAPABILITY_TTL_MS = 600_000;
// Failed lookups retry sooner so one blip doesn't disable scoping for 10 min.
export const CAPABILITY_FAILURE_TTL_MS = 30_000;
export const CAPABILITY_LOOKUP_TIMEOUT_MS = 5_000;
export const CAPABILITY_CACHE_MAX_ENTRIES = 1_000;
// ponytail: this matches Unify's message text, so update the regex if Unify
// changes the wording.
const UNSUPPORTED_RESOURCE_MESSAGE = /^Spec or operation \S+ for \S+ not found$/;
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const asString = (value) => typeof value === 'string' ? value : undefined;
/**
 * Classify a downstream response as "the connector does not implement this
 * resource" (as opposed to an empty result or a record-level 404).
 */
export const detectUnsupportedResource = (status, body) => {
    if (status !== 404 || !isRecord(body))
        return null;
    if (body.type_name !== 'ConnectorExecutionError')
        return null;
    const detail = body.detail;
    if (!isRecord(detail) || !isRecord(detail.error))
        return null;
    const message = detail.error.message;
    if (typeof message !== 'string' || !UNSUPPORTED_RESOURCE_MESSAGE.test(message)) {
        return null;
    }
    const ctx = isRecord(detail.context) ? detail.context : {};
    return {
        connector: asString(ctx.connector),
        unifiedApi: asString(ctx.unified_api),
        resource: asString(ctx.resource),
        action: asString(ctx.action),
    };
};
// ponytail: FIFO-capped per-process map (callers control service_id, so it
// must be bounded); switch to LRU if hit rate suffers at the cap.
const capabilityCache = new Map();
export const clearCapabilityCache = () => {
    capabilityCache.clear();
};
const SUPPORTED_STATUSES = new Set(['live', 'beta']);
const parseSupportedResources = (payload) => {
    if (!isRecord(payload) || !isRecord(payload.data))
        return null;
    const apis = payload.data.unified_apis;
    if (!Array.isArray(apis))
        return null;
    const result = new Map();
    for (const api of apis) {
        if (!isRecord(api) || typeof api.id !== 'string')
            continue;
        const ids = new Set();
        const resources = Array.isArray(api.supported_resources)
            ? api.supported_resources
            : [];
        for (const res of resources) {
            if (isRecord(res) &&
                typeof res.id === 'string' &&
                typeof res.status === 'string' &&
                SUPPORTED_STATUSES.has(res.status)) {
                ids.add(res.id);
            }
        }
        result.set(api.id, ids);
    }
    return result;
};
/**
 * Look up which unified resources a connector implements. Fail-open: any
 * failure (including the lookup timeout) yields `null`, cached for the
 * shorter failure TTL.
 */
export const fetchSupportedResources = async ({ context, serviceId, now = Date.now, }) => {
    const key = `${context.appId}:${serviceId}`;
    const cached = capabilityCache.get(key);
    if (cached !== undefined && cached.expiresAt > now())
        return cached.value;
    let value = null;
    try {
        const { apiKey } = await context.apiKey();
        const baseUrl = process.env.APIDECK_BASE_URL ?? DEFAULT_BASE_URL;
        const resp = await fetch(`${baseUrl}/connector/connectors/${encodeURIComponent(serviceId)}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'x-apideck-app-id': context.appId,
                Accept: 'application/json',
                ...(context.authType === 'JWT' ? { 'x-apideck-auth-type': 'JWT' } : {}),
            },
            // list_tools awaits this, so bound it even when the caller has no signal.
            signal: context.signal !== undefined
                ? AbortSignal.any([
                    context.signal,
                    AbortSignal.timeout(CAPABILITY_LOOKUP_TIMEOUT_MS),
                ])
                : AbortSignal.timeout(CAPABILITY_LOOKUP_TIMEOUT_MS),
        });
        if (resp.status === 200) {
            value = parseSupportedResources(await resp.json());
        }
    }
    catch {
        value = null;
    }
    // A cancelled call says nothing about the connector; don't cache it.
    if (context.signal?.aborted === true)
        return value;
    capabilityCache.delete(key);
    if (capabilityCache.size >= CAPABILITY_CACHE_MAX_ENTRIES) {
        const oldest = capabilityCache.keys().next().value;
        if (oldest !== undefined)
            capabilityCache.delete(oldest);
    }
    const ttl = value === null ? CAPABILITY_FAILURE_TTL_MS : CAPABILITY_TTL_MS;
    capabilityCache.set(key, { expiresAt: now() + ttl, value });
    return value;
};
/** Fail-open: unknown mapping, null caps, or undeclared API all keep the tool. */
export const isResourceSupported = (tool, caps) => {
    if (tool.resource === undefined || caps === null)
        return true;
    const ids = caps.get(tool.resource.api);
    if (ids === undefined)
        return true;
    return ids.has(tool.resource.id);
};
//# sourceMappingURL=capabilities.js.map