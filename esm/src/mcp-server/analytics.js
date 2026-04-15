const POSTHOG_API_HOST = "https://eu.i.posthog.com";
export function createAnalytics(apiKey, logger, onBackground) {
    if (!apiKey) {
        return { async capture() { }, async flush() { } };
    }
    const pending = [];
    function send(event) {
        const payload = {
            api_key: apiKey,
            batch: [
                {
                    event: event.event,
                    distinct_id: event.distinctId,
                    properties: {
                        ...event.properties,
                        $lib: "apideck-mcp",
                        environment: process.env["VERCEL_ENV"] || "development",
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
        async capture(event) {
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
//# sourceMappingURL=analytics.js.map