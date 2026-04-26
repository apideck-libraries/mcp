# Production Observability

What we instrument, where it goes, and the queries / alerts to set up so production regressions are noticed within minutes instead of when a customer notices.

## Where signals go

| Signal | Destination | Source |
|---|---|---|
| Per-tool-call analytics | PostHog EU (`eu.i.posthog.com`) | `src/mcp-server/analytics.ts` → `mcp_tool_called` event |
| Workflow / handler errors | Same PostHog event with `is_error: true` | `src/mcp-server/tools.ts` → `captureToolCall` |
| Post-deploy smoke results | GitHub Actions → Slack on failure | `.github/workflows/post-deploy-smoke.yaml` |
| HTTP latency / cold starts | Vercel logs + Functions tab | Vercel platform |
| Build / deploy status | GitHub Actions + Vercel status checks | CI workflows |

PostHog is the only place per-call data lives. Vercel logs are good for traffic shape and cold starts but don't carry tool-name context.

## The `mcp_tool_called` event

Every successful or failed tool invocation emits one event:

```json
{
  "event": "mcp_tool_called",
  "distinct_id": "<app_id>:<consumer_id>",
  "properties": {
    "tool_name": "accounting-bills-get",
    "mode": "static" | "dynamic",
    "is_error": false,
    "duration_ms": 487,
    "app_id": "8Md6...",
    "consumer_id": "test-consumer-id",
    "$lib": "apideck-mcp",
    "$lib_version": "0.1.13",
    "mcp_version": "0.1.13",
    "environment": "production",
    "commit_sha": "5b3c0fe...",
    "deployment_url": "mcp-server-xxx.vercel.app"
  }
}
```

`distinct_id` combines `app_id:consumer_id` so PostHog's per-distinct-id aggregations correspond to per-tenant slices. `$lib_version` / `mcp_version` lets you attribute regressions to a specific shipped version. `environment` distinguishes production, preview, and dev.

## Insights to set up

Create these as saved insights in PostHog (`Activity → Insights → New insight`):

### 1. Total tool calls — sanity / traffic dashboard

- **Type:** Trends, line graph
- **Series:** `mcp_tool_called`, count of events
- **Breakdown:** `properties.environment`
- **Time:** last 7d, daily

Tells you volume per environment. A sudden drop on production usually means the function isn't responding (Vercel deploy regression, missing env var, broken transport).

### 2. Error rate — the alert candidate

- **Type:** Trends
- **Series A:** `mcp_tool_called` where `is_error = true`, count
- **Series B:** `mcp_tool_called`, count
- **Formula:** `A / B`
- **Breakdown:** `properties.environment`
- **Time:** last 24h, hourly

Baseline is ~1-3% (mostly upstream connector errors, expired auth). An hour above 10% almost always means a real regression.

**Alert:**
- *Trigger when:* current value > 0.10 for 30 minutes
- *Send to:* `#mcp-alerts` Slack
- *Cooldown:* 1 hour (avoid alert storms during a sustained regression)

### 3. Latency p95 — the second alert candidate

- **Type:** Trends
- **Series:** `mcp_tool_called`, math = "p95 of `duration_ms`"
- **Filter:** `is_error = false` (mixing in errors skews p95 because timeouts dominate)
- **Breakdown:** `properties.tool_name` (top 10)
- **Time:** last 24h, hourly

Healthy baseline: p95 ≤ 2,000 ms for read-only tools, ≤ 4,000 ms for mutating ones (writes round-trip through Apideck Vault + the connector). A 2× jump in p95 on `accounting-invoices-list` usually means the upstream connector is degraded — not necessarily our problem to fix, but useful to know.

**Alert:**
- *Trigger when:* p95 > 5,000 ms for 30 minutes (any tool)
- *Send to:* `#mcp-alerts` Slack
- *Cooldown:* 30 minutes

### 4. Per-version comparison — does this release regress?

- **Type:** Trends
- **Series:** `mcp_tool_called`, count + p95 duration
- **Breakdown:** `properties.mcp_version`
- **Time:** last 14d, daily

After each release, eyeball this for: error rate jump, latency jump, traffic cliff. If the new version's bar looks structurally different from the prior one, roll back.

### 5. Top tools by traffic — capacity planning

- **Type:** Trends
- **Series:** `mcp_tool_called`, count
- **Breakdown:** `properties.tool_name`
- **Time:** last 30d

Tells you which 10 tools account for ~80% of traffic. Useful for prioritising description quality / workflow-tool design / connector coverage gaps.

### 6. Workflow tool adoption

- **Type:** Trends
- **Series:** `mcp_tool_called` where `tool_name` starts with `apideck-`, count
- **Breakdown:** `properties.tool_name`
- **Time:** last 14d

Tracks whether agents are picking up the workflow tools (`apideck-pay-bill`, `apideck-month-end-close-check`, etc.) over the raw endpoints. If counts stay near zero after a release, the workflow descriptions need clearer "use when" guidance.

### 7. Cold-start latency (bonus, Vercel-only)

PostHog doesn't see Vercel cold starts directly. But: `duration_ms > 8000` on the first call of a function instance is almost always a cold start. Filter `mcp_tool_called` where `duration_ms > 8000` and look at the time-of-day distribution; if cold starts cluster outside business hours, the function is hibernating overnight (consider a Vercel Cron warm-up or move to Fluid Compute steady-state).

## Alert routing

Two Slack channels, three signals:

| Channel | Source | Frequency |
|---|---|---|
| `#mcp-alerts` | PostHog (error rate + p95) | 0–3 / week typical |
| `#mcp-alerts` | Post-deploy smoke failure (`SLACK_WEBHOOK_URL`) | After every red prod deploy |
| `#mcp-deploys` (optional) | GitHub Actions deploy success notifications | Every prod deploy |

`#mcp-alerts` should page someone — the first two are the actually-actionable signals. `#mcp-deploys` is informational and exists so the team has a shared timeline of what shipped when.

## Verification — is the data actually flowing?

Run a known-good event from your laptop and check PostHog Live Events:

```bash
APIDECK_API_KEY=... APIDECK_APP_ID=... APIDECK_CONSUMER_ID=test-consumer-id \
  npx -y @apideck/mcp start --mode static --include vault-connections-list
```

Then call `vault-connections-list` once. The event should appear in PostHog → Live Events within ~2s with `environment: development` and the local commit SHA in `commit_sha`.

If it doesn't:
- Check `POSTHOG_API_KEY` is set in the environment
- Check the `analytics.ts` no-op fallback isn't being hit (`!apiKey` short-circuits)
- Check the Vercel deployment env vars (`vercel env ls`)

## What we deliberately don't track

- **Tool input arguments / response bodies** — these contain customer data (invoice line items, employee SSNs, …). Tool-name + duration + is_error is enough for SRE; full payloads belong in customer-controlled logs, not our analytics.
- **API keys / consumer IDs** — `consumer_id` is included as a property because it's a tenant identifier in your *own* application, not a credential. The Apideck API key is never in PostHog payloads.
- **Per-call connector identity** — we'd love to break down by `service_id` (Xero vs QuickBooks vs Odoo) but that requires wiring a property through `runtime.ts → captureToolCall`. Tracked as future work in [Phase 7](../README.md#phase-7).

## Reference

- Source: [`src/mcp-server/analytics.ts`](../src/mcp-server/analytics.ts), [`src/mcp-server/tools.ts`](../src/mcp-server/tools.ts) (`captureToolCall`)
- PostHog project: `eu.i.posthog.com` (key in `POSTHOG_API_KEY` env var)
- Slack: `#mcp-alerts`, `#mcp-deploys` (set up `SLACK_WEBHOOK_URL` repo secret for the smoke pager)
