// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * `apideck_run` code-tool. Runs a user-supplied JS script inside a
 * `node:vm` sandbox with `apideck.<methodName>` bound to endpoint
 * dispatches. Single-chokepoint preserved — bound methods invoke
 * `tool.handler` (which itself goes through `runtime.ts`).
 *
 * Sandbox isolation: `process`, `require`, `fs`, `child_process`,
 * `module`, `Buffer`, `global`, `__dirname`, `__filename` are NOT
 * injected. Tests assert `typeof process === 'undefined'`.
 */
import vm from 'node:vm';
import { z } from 'zod';
import { kebabToCamel } from '../search-filter.js';
const inputSchema = z.object({
    script: z.string(),
    timeout_ms: z.number().optional(),
});
const DEFAULT_TIMEOUT_MS = 5000;
const stringifyArg = (arg) => {
    if (arg === null)
        return 'null';
    if (arg === undefined)
        return 'undefined';
    if (typeof arg === 'object') {
        try {
            return JSON.stringify(arg);
        }
        catch {
            return String(arg);
        }
    }
    return String(arg);
};
const buildApideckProxy = (endpointTools, extra) => {
    const proxy = {};
    for (const t of endpointTools) {
        const key = kebabToCamel(t.name);
        proxy[key] = async (input) => {
            const result = await t.handler(input ?? {}, extra);
            const first = result.content[0];
            const text = first !== undefined && first.type === 'text' ? first.text : '';
            if (result.isError === true) {
                throw new Error(text);
            }
            try {
                const parsed = JSON.parse(text);
                return parsed.body?.data;
            }
            catch {
                return text;
            }
        };
    }
    return proxy;
};
/**
 * Build the `apideck_run` tool definition. Factory takes the endpoint
 * tool array (typically `tools` from `tools.ts`) so each call binds
 * `apideck.*` methods against a known set.
 */
export const createRunTool = (endpointTools) => ({
    name: 'apideck_run',
    title: 'Apideck Run',
    description: 'Execute a JavaScript script in a sandbox. The `apideck` global exposes endpoint methods (e.g. apideck.accountingInvoicesList(input)). Returns { result, logs } on success.',
    domain: 'code-tools',
    scope: 'destructive',
    inputSchema,
    handler: async (args, extra) => {
        const script = typeof args.script === 'string' ? args.script : '';
        const timeout = typeof args.timeout_ms === 'number' && args.timeout_ms > 0
            ? args.timeout_ms
            : DEFAULT_TIMEOUT_MS;
        const logs = [];
        const captureConsole = {
            log: (...a) => logs.push(a.map(stringifyArg).join(' ')),
            info: (...a) => logs.push(a.map(stringifyArg).join(' ')),
            warn: (...a) => logs.push(a.map(stringifyArg).join(' ')),
            error: (...a) => logs.push(a.map(stringifyArg).join(' ')),
        };
        const apideck = buildApideckProxy(endpointTools, extra);
        const ctx = vm.createContext({ apideck, console: captureConsole });
        // Bootstrap: replace each host-realm callable on `apideck` and
        // `console` with a vm-realm wrapper that closes over the original.
        // Without this, `apideck.foo.constructor` / `console.log.constructor`
        // resolve to the host's Function realm, allowing user scripts to
        // construct functions that run in the host context (with access to
        // process, require, etc.). After the wrap, `.constructor` resolves
        // to the vm-realm Function — `Function('return require')()` returns
        // undefined inside the sandbox.
        const bootstrap = `
      (() => {
        const wrapAll = (originalRef) => {
          const wrapped = Object.create(null);
          for (const k of Object.keys(originalRef)) {
            const fn = originalRef[k];
            wrapped[k] = function(...args) { return fn.apply(undefined, args); };
          }
          return wrapped;
        };
        globalThis.apideck = wrapAll(globalThis.apideck);
        globalThis.console = wrapAll(globalThis.console);
      })();
    `;
        vm.runInContext(bootstrap, ctx);
        const wrapped = `(async () => { ${script} })()`;
        let timer;
        try {
            const vmPromise = Promise.resolve(vm.runInContext(wrapped, ctx, { timeout }));
            const timeoutPromise = new Promise((_, reject) => {
                timer = setTimeout(() => reject(new Error('apideck_run timeout')), timeout);
            });
            const result = await Promise.race([vmPromise, timeoutPromise]);
            return {
                content: [
                    { type: 'text', text: JSON.stringify({ result, logs }) },
                ],
            };
        }
        catch (err) {
            // Errors thrown inside the vm context have a different Error realm,
            // so `err instanceof Error` returns false. Duck-type on `.message`.
            const message = err !== null &&
                typeof err === 'object' &&
                'message' in err &&
                typeof err.message === 'string'
                ? err.message
                : String(err);
            return {
                isError: true,
                content: [
                    { type: 'text', text: JSON.stringify({ error: message, logs }) },
                ],
            };
        }
        finally {
            if (timer !== undefined)
                clearTimeout(timer);
        }
    },
});
//# sourceMappingURL=run.js.map