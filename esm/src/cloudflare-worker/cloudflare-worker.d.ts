import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import type { Env } from "../../worker-configuration.js";
import { ApideckMcpCore } from "../core.js";
interface State {
}
type Props = Record<string, string>;
export declare class AtApideckMcpMCP extends McpAgent<Env, State, Props> {
    server: McpServer;
    init(): Promise<void>;
    getSDK(): ApideckMcpCore;
}
declare const _default: {
    fetch(request: Request, env: Env, ctx: any): Promise<Response>;
};
export default _default;
//# sourceMappingURL=cloudflare-worker.d.ts.map