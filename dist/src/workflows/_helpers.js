// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * Workflow engine foundation.
 *
 * `runStep` dispatches a workflow step through `tool.handler` (preserving
 * the single-chokepoint rule from `runtime.ts`). On step failure it returns
 * a typed `StepOutcome` discriminant — callers never need to catch.
 *
 * `workflowJsonResult` wraps a payload object as an MCP `CallToolResult`
 * with JSON-stringified content. Pass `isError: true` to mark the result
 * as an error.
 */
import { McpError } from '@modelcontextprotocol/sdk/types.js';
import { RuntimeError } from '../types.js';
const UPSTREAM_MESSAGE_CAP = 500;
/**
 * Reduce a thrown error or parsed upstream payload to a fixed shape with
 * truncated message before relaying it through the workflow `upstream`
 * field. This keeps the workflow's error envelope from echoing arbitrary
 * connector response data (request payloads, internal IDs, validation
 * fault details) verbatim to the MCP client.
 */
const sanitizeUpstream = (err) => {
    if (err instanceof RuntimeError) {
        const out = { name: 'RuntimeError' };
        if (err.status !== undefined)
            out.status = err.status;
        if (err.code !== undefined)
            out.code = err.code;
        if (err.message)
            out.message = err.message.slice(0, UPSTREAM_MESSAGE_CAP);
        return out;
    }
    if (err instanceof Error) {
        return {
            name: err.name,
            message: err.message.slice(0, UPSTREAM_MESSAGE_CAP),
        };
    }
    return { message: String(err).slice(0, UPSTREAM_MESSAGE_CAP) };
};
/**
 * Reduce a parsed upstream JSON body (from a handler returning
 * `isError: true`) to a fixed shape: `status_code`, `type_name`, truncated
 * `message`. Strips `detail`, `request`, and any other connector-specific
 * fields that may carry caller payload echoes.
 */
const sanitizeUpstreamBody = (body) => {
    if (body === null || typeof body !== 'object') {
        return { message: String(body).slice(0, UPSTREAM_MESSAGE_CAP) };
    }
    const o = body;
    const out = {};
    if (typeof o.status_code === 'number')
        out.status_code = o.status_code;
    if (typeof o.type_name === 'string')
        out.type_name = o.type_name;
    if (typeof o.message === 'string') {
        out.message = o.message.slice(0, UPSTREAM_MESSAGE_CAP);
    }
    return out;
};
/**
 * Look up `name` in `tools` and dispatch through `tool.handler(args, extra)`.
 *
 * Returns a `StepOutcome<T>` — never throws for business-level failures.
 * Re-throws `McpError` instances so the MCP layer (e.g. URL elicitation)
 * can propagate to the client.
 *
 * @param tools    The full tool array to search.
 * @param name     The exact tool name to invoke.
 * @param args     Arguments passed verbatim to the handler.
 * @param extra    Request handler context forwarded to the handler.
 * @param pick     Optional extractor applied to the full parsed `body`
 *                 object. When omitted, defaults to `body.data`.
 */
export const runStep = async (tools, name, args, extra, pick) => {
    const tool = tools.find((t) => t.name === name);
    if (tool === undefined) {
        throw new Error(`runStep: tool not found: ${name}`);
    }
    let result;
    try {
        result = await tool.handler(args, extra);
    }
    catch (err) {
        if (err instanceof McpError)
            throw err;
        const message = err instanceof Error ? err.message : String(err);
        return {
            ok: false,
            unsupported: false,
            error: message,
            upstream: sanitizeUpstream(err),
        };
    }
    const first = result.content[0];
    const text = first !== undefined && first.type === 'text' ? first.text : '';
    if (result.isError === true) {
        let upstream;
        try {
            upstream = sanitizeUpstreamBody(JSON.parse(text));
        }
        catch {
            // text is not JSON — leave upstream undefined
        }
        const truncatedError = text.slice(0, UPSTREAM_MESSAGE_CAP);
        const outcome = {
            ok: false,
            unsupported: false,
            error: truncatedError,
        };
        if (upstream !== undefined)
            outcome.upstream = upstream;
        return outcome;
    }
    let parsed;
    try {
        parsed = JSON.parse(text);
    }
    catch {
        return {
            ok: false,
            unsupported: false,
            error: `runStep: handler for "${name}" emitted non-JSON content`,
            upstream: text,
        };
    }
    if (parsed.body !== undefined &&
        parsed.body.type_name === 'ConnectorExecutionError') {
        const body = parsed.body;
        const reason = (body.message ?? 'unsupported').slice(0, UPSTREAM_MESSAGE_CAP);
        return {
            ok: false,
            unsupported: true,
            reason,
            upstream: sanitizeUpstreamBody(parsed.body),
        };
    }
    const data = pick ? pick(parsed.body) : pickData(parsed.body);
    return { ok: true, data };
};
/**
 * Extract `x-apideck-service-id` from handler args.
 *
 * Returns `serviceId` (string or undefined) and `common` — a record that
 * can be spread into downstream step args to forward the service id.
 */
export const extractServiceContext = (args) => {
    const raw = args['x-apideck-service-id'];
    const serviceId = typeof raw === 'string' ? raw : undefined;
    return {
        serviceId,
        common: serviceId ? { 'x-apideck-service-id': serviceId } : {},
    };
};
/** Return the `data` field of a parsed response body. */
export const pickData = (body) => body?.data;
/**
 * Wrap a payload as a JSON `CallToolResult`.
 *
 * When `isError` is `true` the result object is marked with `isError: true`
 * so the MCP client treats it as a tool error.
 */
export const workflowJsonResult = (payload, isError) => ({
    ...(isError ? { isError: true } : {}),
    content: [{ type: 'text', text: JSON.stringify(payload) }],
});
//# sourceMappingURL=_helpers.js.map