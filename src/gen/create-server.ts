/**
 * Build an McpServer from the custom-generated tools.
 *
 * Thin wrapper over the existing createRegisterTool / registerDynamicTools
 * plumbing. Accepts the same knobs as createMCPServer (dynamic, scopes,
 * allowedTools, annotationFilter, analytics) so a switch-over from the
 * Speakeasy-generated server is a one-line change in api/mcp.ts.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ApideckMcpCore } from "../core.js";
import type { Analytics } from "../mcp-server/analytics.js";
import type { ConsoleLogger } from "../mcp-server/console-logger.js";
import { MCPScope } from "../mcp-server/scopes.js";
import {
  createRegisterTool,
  MCPToolAnnotationFilter,
  registerDynamicTools,
} from "../mcp-server/tools.js";
import { apideckRun, apideckSearch } from "./code-tools.js";
import { generatedTools } from "./tools.js";

export function createGeneratedMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  dynamic?: boolean | undefined;
  /**
   * When true, register only `apideck_search` + `apideck_run` instead of
   * the 330 individual tools. The agent drives Apideck by writing code
   * against a bound `apideck.*` SDK — see src/gen/sandbox.ts.
   */
  codeMode?: boolean | undefined;
  scopes?: MCPScope[] | undefined;
  annotationFilter?: MCPToolAnnotationFilter | undefined;
  getSDK: () => ApideckMcpCore;
  analytics?: Analytics | undefined;
}) {
  const server = new McpServer({ name: "ApideckMcp", version: "gen" });
  const scopes = new Set(deps.scopes);
  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);

  const [tool, tools, toolMap] = createRegisterTool(
    deps.logger,
    server,
    deps.getSDK,
    scopes,
    allowedTools,
    deps.dynamic,
    deps.annotationFilter,
    deps.analytics,
  );

  if (deps.codeMode) {
    tool(apideckSearch);
    tool(apideckRun);
  } else {
    for (const t of generatedTools) tool(t);
    if (deps.dynamic) {
      registerDynamicTools(deps.logger, server, deps.getSDK, toolMap, scopes, deps.analytics);
    }
  }

  return { server, tools };
}
