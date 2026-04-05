import { ConsoleLogger } from "./console-logger.js";

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
): Analytics {
  if (!apiKey) {
    return { async capture() {}, async flush() {} };
  }

  const buffer: Array<{
    event: string;
    distinct_id: string;
    properties: Record<string, unknown>;
    timestamp: string;
  }> = [];

  async function sendBatch(
    batch: typeof buffer,
  ) {
    const payload = {
      api_key: apiKey,
      batch,
    };

    try {
      const res = await fetch(`${POSTHOG_API_HOST}/batch`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        logger.warning("PostHog batch failed", { status: res.status });
      }
    } catch (err) {
      logger.warning("PostHog batch error", {
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return {
    async capture(event: AnalyticsEvent) {
      buffer.push({
        event: event.event,
        distinct_id: event.distinctId,
        properties: {
          ...event.properties,
          $lib: "apideck-mcp",
        },
        timestamp: new Date().toISOString(),
      });
    },
    async flush() {
      if (buffer.length === 0) return;
      const batch = buffer.splice(0);
      await sendBatch(batch);
    },
  };
}
