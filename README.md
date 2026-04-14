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

<!-- Start Summary [summary] -->
## Summary

Apideck: The Apideck OpenAPI Spec: SDK Optimized

For more information about the API: [Apideck Developer Docs](https://developers.apideck.com)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Apideck MCP Server](#apideck-mcp-server)
  * [Tools](#tools)
  * [Hosted](#hosted)
  * [Connect from Any Agent Framework](#connect-from-any-agent-framework)
  * [Static vs Dynamic Mode](#static-vs-dynamic-mode)
  * [Configuring Included APIs](#configuring-included-apis)
  * [Regeneration](#regeneration)
  * [Scopes](#scopes)
  * [Testing](#testing)
  * [License](#license)
  * [Installation](#installation)
  * [Progressive Discovery](#progressive-discovery)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

> [!TIP]
> To finish publishing your MCP Server to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).
<details>
<summary>Claude Desktop</summary>

Install the MCP server as a Desktop Extension using the pre-built [`mcp-server.mcpb`](https://github.com/apideck-libraries/mcp/releases/download/v0.1.9/mcp-server.mcpb) file:

Simply drag and drop the [`mcp-server.mcpb`](https://github.com/apideck-libraries/mcp/releases/download/v0.1.9/mcp-server.mcpb) file onto Claude Desktop to install the extension.

The MCP bundle package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> MCP bundles provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=ApideckMcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIm1jcC1yZW1vdGVAMC4xLjI1IiwiaHR0cHM6Ly9leGFtcGxlLWNsb3VkZmxhcmUtd29ya2VyLmNvbS9zc2UiLCItLWhlYWRlciIsImFwaS1rZXk6JHtBUElfS0VZfSIsIi0taGVhZGVyIiwiY29uc3VtZXItaWQ6JHtDT05TVU1FUl9JRH0iLCItLWhlYWRlciIsImFwcC1pZDoke0FQUF9JRH0iXX0=)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "command": "npx",
  "args": [
    "@apideck/mcp",
    "start",
    "--api-key",
    "",
    "--consumer-id",
    "",
    "--app-id",
    ""
  ]
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add ApideckMcp -- npx -y @apideck/mcp start --api-key  --consumer-id  --app-id 
```

</details>
<details>
<summary>Gemini</summary>

```bash
gemini mcp add ApideckMcp -- npx -y @apideck/mcp start --api-key  --consumer-id  --app-id 
```

</details>
<details>
<summary>Windsurf</summary>

Refer to [Official Windsurf documentation](https://docs.windsurf.com/windsurf/cascade/mcp#adding-a-new-mcp-plugin) for latest information

1. Open Windsurf Settings
2. Select Cascade on left side menu
3. Click on `Manage MCPs`. (To Manage MCPs you should be signed in with a Windsurf Account)
4. Click on `View raw config` to open up the mcp configuration file.
5. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "@apideck/mcp",
    "start",
    "--api-key",
    "",
    "--consumer-id",
    "",
    "--app-id",
    ""
  ]
}
```
</details>
<details>
<summary>VS Code</summary>

[![Install in VS Code](https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20ApideckMcp%20MCP&color=0098FF)](vscode://ms-vscode.vscode-mcp/install?name=ApideckMcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIm1jcC1yZW1vdGVAMC4xLjI1IiwiaHR0cHM6Ly9leGFtcGxlLWNsb3VkZmxhcmUtd29ya2VyLmNvbS9zc2UiLCItLWhlYWRlciIsImFwaS1rZXk6JHtBUElfS0VZfSIsIi0taGVhZGVyIiwiY29uc3VtZXItaWQ6JHtDT05TVU1FUl9JRH0iLCItLWhlYWRlciIsImFwcC1pZDoke0FQUF9JRH0iXX0=)

Or manually:

Refer to [Official VS Code documentation](https://code.visualstudio.com/api/extension-guides/ai/mcp) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search and open `MCP: Open User Configuration`. This should open mcp.json file
2. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "@apideck/mcp",
    "start",
    "--api-key",
    "",
    "--consumer-id",
    "",
    "--app-id",
    ""
  ]
}
```

</details>
<details>
<summary> Stdio installation via npm </summary>
To start the MCP server, run:

```bash
npx @apideck/mcp start --api-key  --consumer-id  --app-id 
```

For a full list of server arguments, run:

```
npx @apideck/mcp --help
```

</details>
<!-- End Installation [installation] -->

<!-- Start Progressive Discovery [dynamic-mode] -->
## Progressive Discovery

MCP servers with many tools can bloat LLM context windows, leading to increased token usage and tool confusion. Dynamic mode solves this by exposing only a small set of meta-tools that let agents progressively discover and invoke tools on demand.

To enable dynamic mode, pass the `--mode dynamic` flag when starting your server:

```jsonc
{
  "mcpServers": {
    "ApideckMcp": {
      "command": "npx",
      "args": ["@apideck/mcp", "start", "--mode", "dynamic"],
      // ... other server arguments
    }
  }
}
```

In dynamic mode, the server registers only the following meta-tools instead of every individual tool:

- **`list_tools`**: Lists all available tools with their names and descriptions.
- **`describe_tool`**: Returns the input schema for one or more tools by name.
- **`execute_tool`**: Executes a tool by name with the provided input parameters.
- **`list_scopes`**: Lists the scopes available on the server.

This approach significantly reduces the number of tokens sent to the LLM on each request, which is especially useful for servers with a large number of tools.

You can combine dynamic mode with scope and tool filters:

```jsonc
{
  "mcpServers": {
    "ApideckMcp": {
      "command": "npx",
      "args": ["@apideck/mcp", "start", "--mode", "dynamic", "--scope", "destructive"],
      // ... other server arguments
    }
  }
}
```
<!-- End Progressive Discovery [dynamic-mode] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
