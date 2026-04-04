# Apideck MCP Server

Model Context Protocol server for the [Apideck Unified API](https://www.apideck.com). Connect any MCP-compatible agent framework to 20+ accounting systems, HRIS platforms, file storage providers, and more through one integration.

Generated from Apideck's OpenAPI spec using [Speakeasy](https://www.speakeasy.com).

## Tools

**229 tools** across 5 unified APIs:

| API | Tools | Coverage |
|---|---|---|
| Accounting | 143 | Invoices, bills, payments, suppliers, customers, journal entries, ledger accounts, purchase orders, tax rates, P&L, balance sheet, and more |
| File Storage | 32 | Files, folders, drives, shared links, upload sessions |
| HRIS | 25 | Employees, companies, departments, payrolls, time-off requests |
| Vault | 23 | Connections, consumers, sessions, custom mappings, logs |
| Proxy | 6 | GET, POST, PUT, PATCH, DELETE, OPTIONS |

## Hosted

The MCP server is live at:

```
https://mcp.apideck.dev/mcp
```

Pass Apideck credentials via headers:

| Header | Description |
|---|---|
| `x-apideck-api-key` | Your Apideck API key |
| `x-apideck-consumer-id` | The end-user/customer ID in your app |
| `x-apideck-app-id` | Your Apideck application ID |

## Connect from Any Agent Framework

### Remote (hosted — no installation needed)

```python
# OpenAI Agents SDK (remote)
from agents import Agent
from agents.mcp import MCPServerHTTP

agent = Agent(
    name="AP Agent",
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
# Pydantic AI (remote)
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
# LangChain / LangGraph (remote)
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

### Claude Desktop / Cursor / Windsurf

Add to your MCP client config:

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

### Local (stdio — for development)

```bash
npm install

# Dynamic mode (default — progressive discovery, 4 meta-tools, ~1,300 tokens)
node bin/mcp-server.js start --api-key "$APIDECK_API_KEY" --consumer-id "$APIDECK_CONSUMER_ID" --app-id "$APIDECK_APP_ID"

# Static mode (all 229 tools)
node bin/mcp-server.js start --api-key "$APIDECK_API_KEY" --consumer-id "$APIDECK_CONSUMER_ID" --app-id "$APIDECK_APP_ID" --mode static

# Read-only tools only
node bin/mcp-server.js start --api-key "$APIDECK_API_KEY" --consumer-id "$APIDECK_CONSUMER_ID" --app-id "$APIDECK_APP_ID" --scope read
```

```python
# OpenAI Agents SDK (local stdio)
from agents import Agent
from agents.mcp import MCPServerStdio

mcp = MCPServerStdio(name="apideck", params={
    "command": "node",
    "args": ["bin/mcp-server.js", "start", "--mode", "dynamic"],
    "env": {
        "APIDECK_API_KEY": "...",
        "APIDECK_CONSUMER_ID": "...",
        "APIDECK_APP_ID": "..."
    }
})
agent = Agent(name="AP Agent", mcp_servers=[mcp])
```

```python
# Pydantic AI (local stdio)
from pydantic_ai import Agent
from pydantic_ai.mcp import MCPServerStdio

agent = Agent("anthropic:claude-sonnet-4-5", mcp_servers=[
    MCPServerStdio("node", [
        "bin/mcp-server.js", "start", "--mode", "dynamic",
        "--api-key", "...", "--consumer-id", "...", "--app-id", "..."
    ])
])
```

## Static vs Dynamic Mode

| Mode | Tools exposed | Initial tokens | Best for |
|---|---|---|---|
| `dynamic` (default) | 4 meta-tools: `list_tools`, `describe_tool_input`, `execute_tool`, `list_scopes` | ~1,300 | General-purpose agents, token-sensitive contexts |
| `static` | All 229 tools | ~25-40K | Focused agents doing specific operations |

In dynamic mode, agents discover tools progressively:

```
list_tools({"search_terms": ["invoices"]})
  → accounting-invoices-list, accounting-invoices-create, accounting-invoices-get, ...

describe_tool_input({"tool_names": ["accounting-invoices-list"]})
  → Full JSON Schema with all parameters

execute_tool({"tool_name": "accounting-invoices-list", "input": {"request": {"limit": 10}}})
  → Invoice data from the connected accounting system
```

## Configuring Included APIs

The `generate-overlay.py` script controls which Apideck APIs are included:

```bash
# Default: accounting, fileStorage, hris, vault, proxy (229 tools)
python generate-overlay.py

# Accounting only (143 tools)
python generate-overlay.py accounting

# Custom selection
python generate-overlay.py accounting,hris,vault

# All APIs (336 tools — exceeds Speakeasy free tier of 250)
python generate-overlay.py all

# Then regenerate + apply fixes:
speakeasy run
./post-generate.sh
```

## Regeneration

The MCP server is generated from Apideck's Speakeasy-optimized OpenAPI spec. To regenerate after spec changes:

```bash
# 1. Optionally reconfigure APIs
python generate-overlay.py accounting,fileStorage,hris,vault,proxy

# 2. Regenerate
speakeasy run

# 3. Apply post-generation fixes (Zod transforms fix + wrangler.toml)
./post-generate.sh

# 4. Run tests
node bin/mcp-server.js serve --port 4567 --mode dynamic --log-level error &
npx tsx test/mcp-server.test.ts
```

## Scopes

Tools are annotated with scopes for fine-grained control:

| Scope | HTTP methods | Flag |
|---|---|---|
| `read` | GET, HEAD | `--scope read` |
| `write` | POST, PUT, PATCH | `--scope write` |
| `destructive` | DELETE | `--scope destructive` |

## Testing

```bash
# Local
node bin/mcp-server.js serve --port 4567 --mode dynamic --log-level error &
npx tsx test/mcp-server.test.ts

# Remote
MCP_URL=https://mcp.apideck.dev/mcp npx tsx test/mcp-server.test.ts
```

## License

MIT
