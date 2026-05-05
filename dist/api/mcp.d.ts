import type { IncomingMessage, ServerResponse } from 'node:http';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createAnalytics } from '../src/analytics.js';
import { createServer } from '../src/server.js';
export declare const config: {
    maxDuration: number;
};
export interface CreateHandlerOpts {
    transportFactory?: () => StreamableHTTPServerTransport;
    serverFactory?: typeof createServer;
    analyticsFactory?: typeof createAnalytics;
}
export declare const createHandler: (opts?: CreateHandlerOpts) => (req: IncomingMessage, res: ServerResponse) => Promise<void>;
declare const _default: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
export default _default;
//# sourceMappingURL=mcp.d.ts.map