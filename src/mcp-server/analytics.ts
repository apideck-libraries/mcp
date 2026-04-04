import { ConsoleLogger } from "./console-logger.js";

export interface AnalyticsEvent {
  distinctId: string;
  event: string;
  properties?: Record<string, unknown>;
}

export interface Analytics {
  capture(event: AnalyticsEvent): void;
  flush(): Promise<void>;
}

const POSTHOG_API_HOST = "https://eu.i.posthog.com";
const BATCH_SIZE = 20;
const FLUSH_INTERVAL_MS = 10_000;

export function createAnalytics(
  apiKey: string | undefined,
  logger: ConsoleLogger,
): Analytics {
  if (!apiKey) {
    return { capture() {}, async flush() {} };
  }

  const queue: AnalyticsEvent[] = [];
  let timer: ReturnType<typeof setTimeout> | null = null;

  async function flush() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (queue.length === 0) return;

    const batch = queue.splice(0);
    const payload = {
      api_key: apiKey,
      batch: batch.map((e) => ({
        event: e.event,
        distinct_id: e.distinctId,
        properties: {
          ...e.properties,
          $lib: "apideck-mcp",
        },
        timestamp: new Date().toISOString(),
      })),
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

  function scheduleFlush() {
    if (!timer) {
      timer = setTimeout(() => flush(), FLUSH_INTERVAL_MS);
    }
  }

  return {
    capture(event: AnalyticsEvent) {
      queue.push(event);
      if (queue.length >= BATCH_SIZE) {
        flush();
      } else {
        scheduleFlush();
      }
    },
    flush,
  };
}
