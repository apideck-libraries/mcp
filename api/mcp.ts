import type { IncomingMessage, ServerResponse } from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { waitUntil } from "@vercel/functions";
import { createAnalytics } from "../src/mcp-server/analytics.js";
import { createMCPServer } from "../src/mcp-server/server.js";
import { createConsoleLogger } from "../src/mcp-server/console-logger.js";
import { ApideckMcpCore } from "../src/core.js";
import { createGeneratedMCPServer } from "../src/gen/create-server.js";

const logger = createConsoleLogger("info");

function getAnalytics() {
  const key = process.env["POSTHOG_API_KEY"];
  return createAnalytics(key, logger, waitUntil);
}

export const config = {
  maxDuration: 60,
};

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, *");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    return res.end();
  }

  if (req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    return res.end(
      JSON.stringify({
        name: "Apideck MCP Server",
        description:
          "MCP server for Apideck — Accounting, ATS, CRM, Ecommerce, File Storage, HRIS, Issue Tracking, Vault, Webhook, Proxy",
        tools: 330,
        modes: ["static", "dynamic"],
      })
    );
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Method not allowed" }));
  }

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  const getSDK = () => {
    const apiKey =
      headers.get("x-apideck-api-key") ||
      headers.get("authorization")?.replace("Bearer ", "") ||
      process.env["APIDECK_API_KEY"] ||
      "";

    return new ApideckMcpCore({
      security: async () => ({ apiKey }),
      consumerId:
        headers.get("x-apideck-consumer-id") || process.env["APIDECK_CONSUMER_ID"] || undefined,
      appId: headers.get("x-apideck-app-id") || process.env["APIDECK_APP_ID"] || undefined,
    });
  };

  const analytics = getAnalytics();
  const transport = new StreamableHTTPServerTransport({});

  // Custom generator is the default. Query knobs:
  //   ?engine=legacy  → fall back to the legacy (Speakeasy) MCP server
  //   ?mode=code      → serve only apideck_search + apideck_run (see src/gen/code-tools.ts)
  const url = new URL(req.url ?? "", "http://localhost");
  const engine = url.searchParams.get("engine");
  const mode = url.searchParams.get("mode");
  const useLegacy = engine === "legacy";
  const codeMode = mode === "code";
  if (useLegacy) logger.info("Using legacy generator engine");
  if (codeMode) logger.info("Using code-sandbox mode");

  const { server: mcpServer } = useLegacy
    ? createMCPServer({ logger, analytics, dynamic: true, getSDK })
    : createGeneratedMCPServer({
      logger,
      analytics,
      dynamic: !codeMode,
      codeMode,
      getSDK,
    });

  mcpServer.server.onerror = (error: unknown) => {
    logger.error("MCP error", {
      error: error instanceof Error ? error.message : String(error),
    });
  };

  await mcpServer.connect(transport as Transport);
  await transport.handleRequest(req, res, req.body);
}
