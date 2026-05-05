// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { randomUUID } from 'node:crypto';
import { UrlElicitationRequiredError, } from '@modelcontextprotocol/sdk/types.js';
export const VAULT_SESSIONS_ENDPOINT = 'https://unify.apideck.com/vault/sessions';
export const CONNECTION_ISSUE_MARKERS = [
    're-authorize the connection',
    're-authorise the connection',
    'connection is missing',
    'no active connection',
    'connection not found',
    'connection is disabled',
    'invalid grant',
    'unauthorized_client',
    'persistuseruid hook',
    'noconnectionfound',
    'connector not authorized',
    'connector credentials error',
    'connectorcredentialserror',
];
const bodyToString = (body) => {
    if (body === null || body === undefined)
        return '';
    if (typeof body === 'string')
        return body;
    try {
        return JSON.stringify(body);
    }
    catch {
        return String(body);
    }
};
export const detectConnectionIssue = (status, body) => {
    if (status < 400)
        return null;
    // 200-char window — Apideck's connection-error markers all appear within
    // the first ~150 chars of the response body. Larger windows waste cycles
    // on responses that contain customer payload after the error envelope.
    const text = bodyToString(body).toLowerCase().slice(0, 200);
    for (const marker of CONNECTION_ISSUE_MARKERS) {
        if (text.includes(marker)) {
            return {
                marker,
                userMessage: `Apideck connection issue: ${marker}. Re-authorise the connector in Apideck Vault.`,
            };
        }
    }
    return null;
};
export const mintVaultSessionUrl = async (ctx) => {
    let apiKey;
    try {
        const resolved = await ctx.apiKey();
        apiKey = resolved.apiKey;
    }
    catch {
        return null;
    }
    try {
        const resp = await fetch(VAULT_SESSIONS_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'x-apideck-consumer-id': ctx.consumerId,
                'x-apideck-app-id': ctx.appId,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({}),
            ...(ctx.signal !== undefined ? { signal: ctx.signal } : {}),
        });
        if (!resp.ok)
            return null;
        const data = (await resp.json());
        const candidate = data.data?.session_uri;
        if (typeof candidate !== 'string')
            return null;
        // Reject any non-https scheme to prevent open-redirect attacks
        // through a compromised/MITM Vault response handing the MCP client
        // a `javascript:`, `file:`, or `data:` URL.
        let parsed;
        try {
            parsed = new URL(candidate);
        }
        catch {
            return null;
        }
        if (parsed.protocol !== 'https:')
            return null;
        return parsed.toString();
    }
    catch {
        return null;
    }
};
export const buildConnectionElicitation = (issue, sessionUrl) => {
    const elicitation = {
        mode: 'url',
        url: sessionUrl,
        message: issue.userMessage,
        elicitationId: `vault-oauth-${randomUUID()}`,
    };
    return new UrlElicitationRequiredError([elicitation], issue.userMessage);
};
export const connectionIssueFallback = (issue) => ({
    content: [{ type: 'text', text: issue.userMessage }],
    isError: true,
});
//# sourceMappingURL=elicitation.js.map