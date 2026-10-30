# Apideck MCP Server

[![npm version](https://img.shields.io/npm/v/%40apideck%2Fmcp?logo=npm&label=%40apideck%2Fmcp)](https://www.npmjs.com/package/@apideck/mcp)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-com.apideck%2Fmcp-blue)](https://registry.modelcontextprotocol.io/v0/servers/com.apideck%2Fmcp/versions)
[![Glama score](https://glama.ai/mcp/servers/apideck-libraries/mcp/badges/score.svg)](https://glama.ai/mcp/servers/apideck-libraries/mcp)
[![voke MTQS](https://img.shields.io/badge/voke%20MTQS-Tier%20A-brightgreen)](https://github.com/voke-sh/voke)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Model Context Protocol server for the [Apideck Unified API](https://www.apideck.com). Connect any MCP-compatible agent to 200+ connectors — accounting systems, HRIS platforms, CRM, file storage, and more — through one integration.

## Quick Connect

[![Install in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=Apideck&config=eyJ1cmwiOiJodHRwczovL21jcC5hcGlkZWNrLmRldi9tY3AiLCJoZWFkZXJzIjp7IngtYXBpZGVjay1hcGkta2V5IjoiJHtBUElERUNLX0FQSV9LRVl9IiwieC1hcGlkZWNrLWNvbnN1bWVyLWlkIjoiJHtBUElERUNLX0NPTlNVTUVSX0lEfSIsIngtYXBpZGVjay1hcHAtaWQiOiIke0FQSURFQ0tfQVBQX0lEfSJ9fQ==)
[![Install in VS Code](https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20Apideck%20MCP&color=0098FF)](vscode://ms-vscode.vscode-mcp/install?name=Apideck&config=eyJ1cmwiOiJodHRwczovL21jcC5hcGlkZWNrLmRldi9tY3AiLCJoZWFkZXJzIjp7IngtYXBpZGVjay1hcGkta2V5IjoiJHtBUElERUNLX0FQSV9LRVl9IiwieC1hcGlkZWNrLWNvbnN1bWVyLWlkIjoiJHtBUElERUNLX0NPTlNVTUVSX0lEfSIsIngtYXBpZGVjay1hcHAtaWQiOiIke0FQSURFQ0tfQVBQX0lEfSJ9fQ==)

<details>
<summary>Claude Desktop (.mcpb bundle)</summary>

**Recommended — prebuilt bundle:**

Drag and drop the prebuilt [`mcp-server.mcpb`](https://github.com/apideck-libraries/mcp/releases/latest) onto Claude Desktop. Claude reads `manifest.json` to prompt for credentials and spawn the server — no manual config needed.

> [!NOTE]
> Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

**Local stdio (npx) alternative:**

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "apideck": {
      "command": "npx",
      "args": ["-y", "@apideck/mcp", "start"],
      "env": {
        "APIDECK_API_KEY": "YOUR_API_KEY",
        "APIDECK_CONSUMER_ID": "YOUR_CONSUMER_ID",
        "APIDECK_APP_ID": "YOUR_APP_ID"
      }
    }
  }
}
```

Restart Claude Desktop after saving. Pin a specific version by replacing `@apideck/mcp` with `@apideck/mcp@0.1.15`.

</details>

<details>
<summary>Claude Code CLI</summary>

Set credentials in your shell:

```bash
export APIDECK_API_KEY="..."
export APIDECK_CONSUMER_ID="..."
export APIDECK_APP_ID="..."
```

**Hosted (recommended):**

```bash
claude mcp add --transport http apideck https://mcp.apideck.dev/mcp \
  --header "Authorization: Bearer $APIDECK_API_KEY" \
  --header "x-apideck-consumer-id: $APIDECK_CONSUMER_ID" \
  --header "x-apideck-app-id: $APIDECK_APP_ID"
```

**Local stdio (npx):**

```bash
claude mcp add apideck \
  -e APIDECK_API_KEY="$APIDECK_API_KEY" \
  -e APIDECK_CONSUMER_ID="$APIDECK_CONSUMER_ID" \
  -e APIDECK_APP_ID="$APIDECK_APP_ID" \
  -- npx -y @apideck/mcp start
```

The `start` command reads credentials from environment variables only — it does not accept `--api-key` / `--consumer-id` / `--app-id` flags.

</details>

<details>
<summary>Windsurf</summary>

Settings → Cascade → Manage MCPs → View raw config, then paste:

```json
{
  "mcpServers": {
    "apideck": {
      "url": "https://mcp.apideck.dev/mcp",
      "headers": {
        "x-apideck-api-key": "YOUR_API_KEY",
        "x-apideck-consumer-id": "YOUR_CONSUMER_ID",
        "x-apideck-app-id": "YOUR_APP_ID"
      }
    }
  }
}
```

</details>

<details>
<summary>Any MCP client (manual JSON)</summary>

```json
{
  "mcpServers": {
    "apideck": {
      "url": "https://mcp.apideck.dev/mcp",
      "headers": {
        "x-apideck-api-key": "YOUR_API_KEY",
        "x-apideck-consumer-id": "YOUR_CONSUMER_ID",
        "x-apideck-app-id": "YOUR_APP_ID"
      }
    }
  }
}
```

</details>

---

## Claude Desktop (.mcpb plugin bundle)

Apideck ships a Claude plugin bundle (`.mcpb` — Anthropic's Model Context Protocol Bundle format). Drop it into Claude Desktop and you get the full server (380+ tools: every endpoint tool plus 4 workflow tools) with API key / consumer ID / app ID prompted via the standard plugin UI.

```bash
pnpm mcpb:build       # → dist/mcp-server.mcpb (~590 KB)
```

Each release attaches `mcp-server.mcpb` to the [latest release](https://github.com/apideck-libraries/mcp/releases/latest). To build it yourself: `pnpm mcpb:build` → `dist/mcp-server.mcpb`. Open the `.mcpb` with Claude Desktop's plugin installer; Claude Desktop reads `manifest.json` to wire credentials and spawn the server.

---

## Tools

**380+ tools** across 10 unified APIs (run `list_tools({})` for live per-domain counts):

| API | Coverage |
|---|---|
| Accounting | Invoices, bills, payments, suppliers, customers, journal entries, ledger accounts, purchase orders, tax rates, P&L, balance sheet, and more |
| CRM | Companies, contacts, leads, opportunities, pipelines, notes, activities, users |
| File Storage | Files, folders, drives, shared links, upload sessions |
| HRIS | Employees, companies, departments, payrolls, time-off requests |
| Vault | Connections, consumers, sessions, custom mappings, logs |
| ATS | Applicants, applications, jobs |
| Issue Tracking | Collections, tickets, users, tags, comments |
| Connector | APIs, connectors, resources, coverage metadata |
| Ecommerce | Customers, orders, products, stores |
| Webhook | Webhook subscriptions, logs |
| Proxy | GET, POST, PUT, PATCH, DELETE |

### Workflow tools

Intent-grouped workflows orchestrate multiple calls behind a single MCP tool — saving agents the round-trips and field-plumbing they routinely get wrong.

| Tool | What it does | Calls |
|---|---|---|
| `apideck-month-end-close-check` | Fans out aged-creditors, aged-debtors, balance-sheet, and P&L in parallel. Returns a partial result when some reports aren't supported by the connector. | 4 |
| `apideck-pay-bill` | Looks up a vendor bill and creates a bill payment allocated against it, so the accounting system marks the bill (partially) paid. | 2 |
| `apideck-receive-customer-payment` | Looks up an invoice and creates a customer payment allocated against it, so the accounting system marks the invoice (partially) paid. | 2 |
| `apideck-onboard-employee` | Converts a hired ATS applicant into an HRIS employee, and optionally moves the applicant to a "hired" stage. | 2–3 |

---

## Hosted

The server is live at:

```
https://mcp.apideck.dev/mcp
```

Pass credentials via headers:

| Header | Description |
|---|---|
| `x-apideck-api-key` | Your Apideck API key |
| `x-apideck-consumer-id` | The end-user / customer ID in your app (**optional** — see below) |
| `x-apideck-app-id` | Your Apideck application ID |
| `x-apideck-auth-type` | Optional. Set to `JWT` to authenticate with a Vault session token instead of an API key |

#### Query parameters (single-credential clients)

Some clients can send only one credential, such as a bearer token. Put the API
key in `Authorization` and the ids in the URL:

```
https://mcp.apideck.dev/mcp?app_id=<your app ID>&consumer_id=<consumer ID>
Authorization: Bearer <your API key>
```

`service_id` works the same way. Precedence: header > query param > env var.
Empty values are ignored. The API key is never accepted in the URL, because
URLs end up in logs.

#### Vault session tokens (JWT)

To let an end user's browser or agent call tools without your API key, create a
[Vault session](https://developers.apideck.com/apis/vault/reference/sessions)
on your backend and pass its `session_token` instead:

```
Authorization: Bearer <session_token>
x-apideck-auth-type: JWT
x-apideck-app-id: <your app ID>
x-apideck-consumer-id: <the session's consumer ID>
```

The server forwards `x-apideck-auth-type: JWT` on every Apideck API call, the
same way the API Explorer authenticates sessions. Any other value keeps API-key
auth. A few limits:

- The header only takes effect alongside a bearer token in the request. The
  server's own `APIDECK_API_KEY` is never sent as a JWT.
- A session token can't create a new Vault session. If a connection needs
  re-authorizing, the tool returns the plain error message instead of a
  re-auth link.
- JWT auth works over HTTP only. The stdio CLI always uses an API key.

### Consumer scoping (optional)

The consumer ID is **optional at connect time**. Leave `APIDECK_CONSUMER_ID` /
`x-apideck-consumer-id` unset to start the server **unscoped**, then supply or
override the consumer per call by passing a `consumer_id` argument to any tool:

```
execute_tool({ name: "crm-contacts-all", input: { consumer_id: "acme-inc" } })
```

Precedence: per-call `consumer_id` argument > `x-apideck-consumer-id` header >
`?consumer_id=` query param > `APIDECK_CONSUMER_ID` env var.

- **Unscoped calls** work for application-scoped endpoints that don't need a
  consumer — e.g. webhook logs (`webhook-event-logs-all`) and
  `vault-connections-all`.
- **Consumer-scoped endpoints** called without a consumer return Apideck's
  "consumer required" error, so set `consumer_id` (or the env/header) for those.

#### Locking identity (opt-in)

To pin identity to the boot header/query/env and stop agents from switching consumer
or connection per call, start with `--lock-identity` (CLI) or append
`?lock_identity=true` (hosted). Locked calls ignore per-call `consumer_id` /
`service_id` arguments. Off by default. Vault consumer tools that take
`consumer_id` as a path parameter (e.g. `vault-consumers-one`) only accept the
locked consumer; any other value, or no locked consumer, is refused.
`service_id` path parameters (e.g. `vault-connections-one`) are unaffected.

---

## Three Modes

| Mode | Tools exposed | Initial tokens | Best for |
|---|---|---|---|
| `dynamic` (default) | 4 meta-tools | ~1,300 | General-purpose agents, token-sensitive contexts |
| `static` | All endpoint tools + workflows | ~35–55K | Focused agents doing a specific API |
| `code` | `apideck_search` + `apideck_run` | ~600 | Agents that call endpoints programmatically via JS |

### Dynamic mode

Agents discover tools progressively — **~85% fewer tokens** than loading all 380+ schemas upfront:

```
list_tools({})
  → { total: <n>, domains: [{ name: "accounting", count: <n> }, ...],
      hint: "Call list_tools(domain=X) or list_tools(search_terms=[...])" }

list_tools({"search_terms": ["invoices"]})
  → accounting-invoices-all, accounting-invoices-add, accounting-invoices-one, ...

describe_tool_input({"name": "accounting-invoices-all"})
  → Full JSON Schema with all parameters

execute_tool({"name": "accounting-invoices-all", "input": {"limit": 10}})
  → Invoice data from the connected accounting system
```

Put operation fields directly in `input`, using the contract returned by
`describe_tool_input`. Dynamic execution validates the arguments before dispatch;
malformed wrappers and schema violations return `isError: true` with
`code: "invalid_tool_input"`, a field path or issue paths, and no downstream call.
Write tools also reject unknown top-level fields, so nothing undeclared reaches
the API. Validation errors do not echo submitted values. Per-call `consumer_id` and
`service_id` overrides remain supported; identity-lock rules still apply.
When a `service_id` is set, `list_tools` only lists tools the connector
supports, and calls to an unsupported resource return
`code: "unsupported_resource"`, which means the connector can't serve it, not
that the result is empty.
Request schemas omit read-only response fields, while retaining writable linked
IDs and required path IDs. This does not add idempotency or make write retries safe.

You can combine dynamic mode with a scope filter:

```json
{
  "mcpServers": {
    "apideck": {
      "command": "node",
      "args": ["dist/bin/mcp.js", "--mode", "dynamic", "--scope", "read"],
      "env": { "APIDECK_API_KEY": "...", "APIDECK_CONSUMER_ID": "...", "APIDECK_APP_ID": "..." }
    }
  }
}
```

### Code mode

Code mode exposes two tools instead of 380+. Designed for agents that prefer calling endpoints as methods rather than tool calls:

1. **`apideck_search`** — find endpoints by substring, returns camelCase method names
2. **`apideck_run`** — execute a JS script with `apideck.<methodName>` bound to live endpoint dispatchers, sandboxed in `node:vm`

```
apideck_search("invoices")
  → {
      count: 4,
      endpoints: [
        { name: "accounting-invoices-list",   method: "accountingInvoicesList" },
        { name: "accounting-invoices-create",  method: "accountingInvoicesCreate" },
        { name: "accounting-invoices-get",     method: "accountingInvoicesGet" },
        { name: "accounting-invoices-delete",  method: "accountingInvoicesDelete" }
      ]
    }

apideck_run({
  script: "return await apideck.accountingInvoicesList({ request: { limit: 5 } })"
})
  → Invoice data from the connected accounting system
```

If an endpoint call fails with an HTTP error, `apideck_run` returns the status and the Apideck error body next to the message, matching `execute_tool`:

```json
{"error":"HTTP 401: Unauthorized Request - Application: invalid-test-app not found.","status":401,"body":{"type_name":"UnauthorizedError","detail":"Application: invalid-test-app not found.","...":"..."},"logs":[]}
```

Scripts can handle it themselves: `catch (e)` exposes `e.message`, `e.status` and `e.body`.

The sandbox strips `process`, `require`, `fs`, `child_process`, and other Node globals — scripts only have access to the `apideck` object.

---

## Scopes

Filter tools by HTTP method class:

| Scope | HTTP methods | Flag |
|---|---|---|
| `read` | GET, HEAD | `--scope read` |
| `write` | POST, PUT, PATCH | `--scope write` |
| `destructive` | DELETE | `--scope destructive` |

Repeat the flag to combine scopes (`--scope read --scope write`). On the hosted
endpoint use a comma-separated query param: `?scopes=read,write`. Invalid or
empty values are rejected (CLI parse error / HTTP 400). Scopes apply in every
mode, including `code`. When the scopes leave out `destructive`, `execute_tool`
is also marked non-destructive (`destructiveHint: false`).

---

## Connect from Any Agent Framework

### Remote (hosted — no local install)

```python
# OpenAI Agents SDK
from agents import Agent
from agents.mcp import MCPServerHTTP

agent = Agent(
    name="Apideck Agent",
    mcp_servers=[MCPServerHTTP(
        url="https://mcp.apideck.dev/mcp",
        headers={
            "x-apideck-api-key": "...",
            "x-apideck-consumer-id": "...",
            "x-apideck-app-id": "..."
        }
    )]
)
```

```python
# Pydantic AI
from pydantic_ai import Agent
from pydantic_ai.mcp import MCPServerHTTP

agent = Agent("anthropic:claude-sonnet-4-5", mcp_servers=[
    MCPServerHTTP(
        url="https://mcp.apideck.dev/mcp",
        headers={
            "x-apideck-api-key": "...",
            "x-apideck-consumer-id": "...",
            "x-apideck-app-id": "..."
        }
    )
])
```

```python
# LangChain / LangGraph
from langchain_mcp_adapters.client import MultiServerMCPClient

client = MultiServerMCPClient({
    "apideck": {
        "url": "https://mcp.apideck.dev/mcp",
        "transport": "streamable_http",
        "headers": {
            "x-apideck-api-key": "...",
            "x-apideck-consumer-id": "...",
            "x-apideck-app-id": "..."
        }
    }
})
tools = await client.get_tools()
```

### Local stdio (for development)

```bash
pnpm install
pnpm build

# Dynamic mode (default)
APIDECK_API_KEY=... APIDECK_CONSUMER_ID=... APIDECK_APP_ID=... node dist/bin/mcp.js start

# Static mode (all endpoint tools + workflows)
APIDECK_API_KEY=... node dist/bin/mcp.js start --mode static

# Code mode
APIDECK_API_KEY=... node dist/bin/mcp.js start --mode code

# Read-only
APIDECK_API_KEY=... node dist/bin/mcp.js start --scope read
```

```python
# OpenAI Agents SDK (local stdio)
from agents import Agent
from agents.mcp import MCPServerStdio

mcp = MCPServerStdio(name="apideck", params={
    "command": "node",
    "args": ["dist/bin/mcp.js", "start", "--mode", "dynamic"],
    "env": {
        "APIDECK_API_KEY": "...",
        "APIDECK_CONSUMER_ID": "...",
        "APIDECK_APP_ID": "..."
    }
})
agent = Agent(name="Apideck Agent", mcp_servers=[mcp])
```

---

## Reliability

The runtime automatically retries failed requests so transient errors don't surface to your agent:

- **Retried status codes**: 408, 500, 502, 503, 504
- **Retried network errors**: `ECONNRESET`, `ECONNREFUSED`, `ETIMEDOUT`, and similar
- **Strategy**: exponential backoff, up to 4 attempts, capped at 30 s
- **Idempotency**: retries only fire on GET, HEAD, PUT, DELETE, OPTIONS, TRACE — POST/PATCH are not retried automatically

## Binary Content

File Storage endpoints that return images or audio send them as native MCP content blocks rather than base64 strings in JSON:

```json
{ "type": "image", "data": "<base64>", "mimeType": "image/png" }
{ "type": "audio", "data": "<base64>", "mimeType": "audio/mpeg" }
```

Agents that support multi-modal MCP content (Claude, GPT-4o) receive the raw bytes — no extra decoding step needed.

---


## License

MIT
