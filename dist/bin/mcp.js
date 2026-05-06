#!/usr/bin/env node
// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * mcp CLI entrypoint.
 *
 * Surface lock (Pattern Decision Lock #12, verified against
 * @stricli/core@1.2.6 / dist/index.d.ts):
 *   - buildApplication(rootRouteMap, { name })
 *   - buildRouteMap({ routes, docs })
 *   - buildCommand({ func, parameters: { flags? }, docs })
 *   - run(app, inputs, { process })
 *
 * Subcommands:
 *   start   — stdio transport; runs createServer with chosen mode.
 *   serve   — HTTP server delegating to api/mcp.ts handler.
 *   doctor  — environment / connectivity health check.
 *
 * Notes:
 *   - No shebang in source: `tsc` 5.x strips shebangs; the `scripts/postbuild.mjs`
 *     step prepends `#!/usr/bin/env node` to `dist/bin/mcp.js` after compile.
 *   - Flag names are kebab-case literals (e.g. `'api-key'`) so Stricli's default
 *     `original` scanner matches `--api-key` exactly.
 */
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { buildApplication, buildChoiceParser, buildCommand, buildRouteMap, numberParser, run, } from '@stricli/core';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import handler from '../api/mcp.js';
import { createAnalytics } from '../src/analytics.js';
import { createConsoleLogger } from '../src/logger.js';
import { createServer } from '../src/server.js';
const APIDECK_REACHABILITY_URL = 'https://unify.apideck.com/vault/consumers';
const POSTHOG_BATCH_URL = 'https://eu.i.posthog.com/batch';
const modeParser = buildChoiceParser(['static', 'dynamic', 'code']);
// Accepted for compatibility with `mcp-proxy -- mcp start --transport stdio`
// invocations (e.g. Glama.ai). The CLI only ever speaks stdio, so this flag
// is a no-op — it exists so Stricli does not reject the unknown argument and
// abort before the transport connects.
const transportParser = buildChoiceParser(['stdio']);
const startCommand = buildCommand({
    func: async (flags) => {
        const posthogApiKey = process.env.POSTHOG_API_KEY;
        const analytics = createAnalytics({
            ...(posthogApiKey ? { apiKey: posthogApiKey } : {}),
            logger: createConsoleLogger(),
        });
        const server = createServer({
            mode: flags.mode,
            analytics,
        });
        const transport = new StdioServerTransport();
        const onShutdown = () => {
            void analytics.flush().finally(() => process.exit(0));
        };
        process.once('SIGTERM', onShutdown);
        process.once('SIGINT', onShutdown);
        await server.connect(transport);
    },
    parameters: {
        flags: {
            mode: {
                kind: 'parsed',
                parse: modeParser,
                brief: 'MCP mode (static | dynamic | code)',
                default: 'dynamic',
            },
            transport: {
                kind: 'parsed',
                parse: transportParser,
                brief: 'Transport (stdio only — accepted for mcp-proxy compatibility)',
                default: 'stdio',
            },
        },
    },
    docs: {
        brief: 'Run the MCP server over stdio',
    },
});
const serveCommand = buildCommand({
    func: async (flags) => {
        const server = http.createServer((req, res) => {
            void handler(req, res);
        });
        server.listen(flags.port);
    },
    parameters: {
        flags: {
            port: {
                kind: 'parsed',
                parse: numberParser,
                brief: 'Port to listen on',
                default: '3000',
            },
        },
    },
    docs: {
        brief: 'Run the MCP server over HTTP (delegates to api/mcp.ts handler)',
    },
});
const checkApideckReachability = async (apiKey) => {
    try {
        const res = await fetch(APIDECK_REACHABILITY_URL, {
            headers: { authorization: `Bearer ${apiKey}` },
        });
        if (res.status !== 200) {
            return `Apideck reachability returned status ${res.status}`;
        }
        return null;
    }
    catch (err) {
        return `Apideck reachability failed: ${String(err)}`;
    }
};
const checkPostHogPing = async (apiKey) => {
    try {
        const res = await fetch(POSTHOG_BATCH_URL, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                api_key: apiKey,
                batch: [
                    {
                        event: '_doctor_ping',
                        distinct_id: 'doctor',
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });
        if (res.status !== 200) {
            return `PostHog ping returned status ${res.status}`;
        }
        return null;
    }
    catch (err) {
        return `PostHog ping failed: ${String(err)}`;
    }
};
const runDoctorChecks = async (flags) => {
    const failures = [];
    const apideckKey = flags['api-key'] ?? process.env.APIDECK_API_KEY;
    if (apideckKey === undefined || apideckKey === '') {
        failures.push('APIDECK_API_KEY missing');
    }
    else {
        const apideckErr = await checkApideckReachability(apideckKey);
        if (apideckErr)
            failures.push(apideckErr);
    }
    const posthogKey = process.env.POSTHOG_API_KEY;
    if (posthogKey !== undefined && posthogKey !== '') {
        const posthogErr = await checkPostHogPing(posthogKey);
        if (posthogErr)
            failures.push(posthogErr);
    }
    return failures;
};
const doctorCommand = buildCommand({
    func: async (flags) => {
        const failures = await runDoctorChecks(flags);
        if (failures.length > 0) {
            for (const f of failures)
                console.error(f);
            process.exit(1);
            return;
        }
        process.exit(0);
    },
    parameters: {
        flags: {
            'api-key': {
                kind: 'parsed',
                parse: (s) => s,
                brief: 'Apideck API key (overrides APIDECK_API_KEY env)',
                optional: true,
            },
        },
    },
    docs: {
        brief: 'Run health checks against Apideck and PostHog',
    },
});
const rootRouteMap = buildRouteMap({
    routes: {
        start: startCommand,
        serve: serveCommand,
        doctor: doctorCommand,
    },
    docs: {
        brief: 'Apideck MCP native CLI',
    },
});
const app = buildApplication(rootRouteMap, { name: 'mcp' });
export const runCli = async (argv) => {
    // node:process types collide with Stricli's StricliProcess under
    // exactOptionalPropertyTypes (exitCode: number | string | null vs.
    // number | string | undefined). Stricli only reads stdout/stderr/env
    // and writes exitCode, so the cast is safe.
    await run(app, argv, { process: process });
};
if (process.argv[1] !== undefined &&
    fileURLToPath(import.meta.url) === process.argv[1]) {
    void runCli(process.argv.slice(2));
}
//# sourceMappingURL=mcp.js.map