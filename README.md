# Apideck MCP Server

[![npm version](https://img.shields.io/npm/v/%40apideck%2Fmcp?logo=npm&label=%40apideck%2Fmcp)](https://www.npmjs.com/package/@apideck/mcp)
[![MCP Registry](https://img.shields.io/badge/MCP%20Registry-com.apideck%2Fmcp-blue)](https://registry.modelcontextprotocol.io/v0/servers/com.apideck%2Fmcp/versions)
[![Glama score](https://glama.ai/mcp/servers/apideck-libraries/mcp/badges/score.svg)](https://glama.ai/mcp/servers/apideck-libraries/mcp)
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

Apideck ships a Claude plugin bundle (`.mcpb` — Anthropic's Model Context Protocol Bundle format). Drop it into Claude Desktop and you get the full server (330 endpoint tools + 4 workflow tools) with API key / consumer ID / app ID prompted via the standard plugin UI.

```bash
pnpm mcpb:build       # → dist/mcp-server.mcpb (~590 KB)
```

The bundle is built locally; CI publication to GitHub Releases is deferred. Open the `.mcpb` with Claude Desktop's plugin installer; Claude Desktop reads `manifest.json` to wire credentials and spawn the server.

---

## Tools

**330 tools** across 10 unified APIs:

| API | Tools | Coverage |
|---|---|---|
| Accounting | 143 | Invoices, bills, payments, suppliers, customers, journal entries, ledger accounts, purchase orders, tax rates, P&L, balance sheet, and more |
| CRM | 50 | Companies, contacts, leads, opportunities, pipelines, notes, activities, users |
| File Storage | 32 | Files, folders, drives, shared links, upload sessions |
| HRIS | 25 | Employees, companies, departments, payrolls, time-off requests |
| Vault | 23 | Connections, consumers, sessions, custom mappings, logs |
| ATS | 15 | Applicants, applications, jobs |
| Issue Tracking | 15 | Collections, tickets, users, tags, comments |
| Connector | 8 | APIs, connectors, resources, coverage metadata |
| Ecommerce | 7 | Customers, orders, products, stores |
| Webhook | 6 | Webhook subscriptions, logs |
| Proxy | 6 | GET, POST, PUT, PATCH, DELETE, OPTIONS |

### Workflow tools

Intent-grouped workflows orchestrate multiple calls behind a single MCP tool — saving agents the round-trips and field-plumbing they routinely get wrong.

| Tool | What it does | Calls |
|---|---|---|
| `apideck-month-end-close-check` | Fans out aged-creditors, aged-debtors, balance-sheet, and P&L in parallel. Returns a partial result when some reports aren't supported by the connector. | 4 |

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
| `x-apideck-consumer-id` | The end-user / customer ID in your app |
| `x-apideck-app-id` | Your Apideck application ID |

---

## Three Modes

| Mode | Tools exposed | Initial tokens | Best for |
|---|---|---|---|
| `dynamic` (default) | 4 meta-tools | ~1,300 | General-purpose agents, token-sensitive contexts |
| `static` | All 330 tools | ~35–55K | Focused agents doing a specific API |
| `code` | `apideck_search` + `apideck_run` | ~600 | Agents that call endpoints programmatically via JS |

### Dynamic mode

Agents discover tools progressively — **~85% fewer tokens** than loading all 330 schemas upfront:

```
list_tools({})
  → { total: 330, domains: [{ name: "accounting", count: 143 }, ...],
      hint: "Call list_tools(domain=X) or list_tools(search_terms=[...])" }

list_tools({"search_terms": ["invoices"]})
  → accounting-invoices-list, accounting-invoices-create, accounting-invoices-get, ...

describe_tool_input({"name": "accounting-invoices-list"})
  → Full JSON Schema with all parameters

execute_tool({"name": "accounting-invoices-list", "input": {"request": {"limit": 10}}})
  → Invoice data from the connected accounting system
```

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

Code mode exposes two tools instead of 330+. Designed for agents that prefer calling endpoints as methods rather than tool calls:

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

The sandbox strips `process`, `require`, `fs`, `child_process`, and other Node globals — scripts only have access to the `apideck` object.

---

## Scopes

Filter tools by HTTP method class:

| Scope | HTTP methods | Flag |
|---|---|---|
| `read` | GET, HEAD | `--scope read` |
| `write` | POST, PUT, PATCH | `--scope write` |
| `destructive` | DELETE | `--scope destructive` |

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

# Static mode (all 330 tools)
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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup, dev workflow, commit conventions, and the release process.

## Regenerating `src/tools.ts`

`src/tools.ts` is generated from the Apideck OpenAPI spec via the `generate-and-pr` workflow.

### Trigger via GitHub Actions

1. Set the `APIDECK_SPEC_URL` repo variable once (Settings → Secrets and variables → Actions → Variables).
2. Go to Actions → **generate-and-pr** → **Run workflow**.
3. The workflow runs `pnpm generate` + `pnpm parity-probe`, commits `src/tools.ts` and `reports/*.json` on a `bot/spec-update-<run_id>` branch, and opens a PR with the tool-count delta and parity summary.

> **Note:** Bot PRs opened via `GITHUB_TOKEN` do not auto-trigger CI. Re-run manually from the Actions tab, or push an empty commit from a maintainer branch.

### Regenerate locally

```bash
# 1. Generate src/tools.ts from spec
pnpm generate

# 2. Check tool-count parity against the reference
pnpm parity-probe

# 3. Build
pnpm build

# 4. Run tests
pnpm test
```

Parity reports are written to `reports/` and uploaded as the `parity-reports` artifact on each workflow run.

---

## License

MIT
