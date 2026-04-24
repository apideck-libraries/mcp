import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { ConsoleLogger } from "./console-logger.js";

// Version string is stamped on every PostHog event so we can attribute
// bugs / latency regressions to a specific deployed version. Resolves
// package.json by walking up from this file's location — works whether
// we're running from the src/ tree or the compiled esm/ tree.
const MCP_VERSION = (() => {
  try {
    let dir = dirname(fileURLToPath(import.meta.url));
    for (let i = 0; i < 6; i++) {
      try {
        const pkg = JSON.parse(
          readFileSync(resolve(dir, "package.json"), "utf8"),
        ) as { name?: string; version?: string };
        if (pkg.name === "@apideck/mcp" && pkg.version) return pkg.version;
      } catch {
        /* keep walking */
      }
      dir = dirname(dir);
    }
  } catch {
    /* fall through */
  }
  return "unknown";
})();

export interface AnalyticsEvent {
  distinctId: string;
  event: string;
  properties?: Record<string, unknown>;
}

export interface Analytics {
  capture(event: AnalyticsEvent): Promise<void>;
  flush(): Promise<void>;
}

const POSTHOG_API_HOST = "https://eu.i.posthog.com";

export function createAnalytics(
  apiKey: string | undefined,
  logger: ConsoleLogger,
  onBackground?: (promise: Promise<unknown>) => void,
): Analytics {
  if (!apiKey) {
    return { async capture() {}, async flush() {} };
  }

  const pending: Promise<void>[] = [];

  function send(event: AnalyticsEvent): Promise<void> {
    const payload = {
      api_key: apiKey,
      batch: [
        {
          event: event.event,
          distinct_id: event.distinctId,
          properties: {
            ...event.properties,
            $lib: "apideck-mcp",
            // PostHog convention: $lib_version surfaces on every event
            // chart automatically. We also include mcp_version as a
            // plain property for custom filters.
            $lib_version: MCP_VERSION,
            mcp_version: MCP_VERSION,
            environment: process.env["VERCEL_ENV"] || "development",
            commit_sha: process.env["VERCEL_GIT_COMMIT_SHA"],
            deployment_url: process.env["VERCEL_URL"],
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    return fetch(`${POSTHOG_API_HOST}/batch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) {
        logger.warning("PostHog batch failed", { status: res.status });
      }
    }).catch((err) => {
      logger.warning("PostHog batch error", {
        error: err instanceof Error ? err.message : String(err),
      });
    });
  }

  return {
    async capture(event: AnalyticsEvent) {
      const p = send(event);
      if (onBackground) {
        onBackground(p);
      }
      pending.push(p);
    },
    async flush() {
      await Promise.all(pending.splice(0));
    },
  };
}
