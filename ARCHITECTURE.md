# Architecture & Design Decisions

This document captures the reasoning behind the Apideck MCP server design — what we chose, what we rejected, and why.

## Why MCP

Every major agent framework (OpenAI Agents SDK, Pydantic AI, LangChain, CrewAI, Google ADK) connects to tools via MCP. Without an MCP server, developers must build custom tool wrappers for each framework. With one MCP server, every framework works out of the box:

```python
# Same MCP server, any framework
agent = Agent(name="AP Agent", mcp_servers=[apideck_mcp])
```

Xero, Stripe, and Intuit all ship MCP servers for this reason. Apideck's Unified API — covering 20+ accounting systems, HRIS platforms, and more through one integration — is a natural fit.

## MCP + CLI: Complementary, Not Competing

Apideck's blog post ["Your MCP Server Is Eating Your Context Window"](https://www.apideck.com/blog/mcp-server-eating-context-window-cli-alternative) argues that MCP and CLIs are complementary tools — the mistake is treating MCP as the universal answer.

We ship both:

| Tool | Best for | Token cost |
|---|---|---|
| **MCP server** (this repo) | Agent frameworks, Claude Desktop, Cursor | ~1,300 tokens (dynamic mode) |
| **[CLI](https://github.com/apideck-libraries/cli)** (`agent-prompt`) | Claude Code, terminal, broad API exploration | ~80 tokens |

The CLI uses progressive disclosure (`--list` → `--help` → execute) at ~80 tokens. The MCP server speaks the protocol every agent framework expects. Different tools for different contexts.

## Why Speakeasy (Not Hand-Built)

Apideck already uses [Speakeasy](https://www.speakeasy.com) for SDK generation. The OpenAPI spec is Speakeasy-optimized with 986 `x-speakeasy` extensions for cleaner naming and grouping. Generating the MCP server from the same spec means:

- **Zero manual tool definitions** — 229 tools auto-generated from the OpenAPI spec
- **Naming consistency** — `accounting-invoices-list` matches the SDK naming
- **Maintenance-free** — when the API spec changes, `speakeasy run` regenerates everything
- **Dynamic toolsets built-in** — Speakeasy's `--mode dynamic` provides progressive discovery without custom code

### Previous attempts (all archived)

| Repo | Approach | Why it was shelved |
|---|---|---|
| `apideck-libraries/mcp-speakeasy` (Nov 2025) | Speakeasy embedded MCP (`enableMCPServer: true` inside TypeScript SDK target) | Old architecture — MCP was bolted onto the SDK, not standalone. No dynamic toolsets. |
| `apideck-io/mcp-servers` (Dec 2025) | Hand-built MCP monorepo with auto-generation pipeline (webhook → S3 → generate → PR) | Complex custom pipeline. Only had CRM. Maintenance burden. |
| `apideck-io/apideck_tools` (Nov 2024) | Python tool registry for LLMs (OpenAI + Cohere) | Pre-MCP era. Direct SDK calls. Not framework-agnostic. |

This repo uses Speakeasy's new **standalone `mcp-typescript` target** — a dedicated MCP server, not an SDK with MCP bolted on. This is the approach Speakeasy now recommends and includes dynamic toolsets.

## Static vs Dynamic Mode

The server supports two modes, selectable via `--mode dynamic`:

### Static (default)

All 229 tools are registered and their schemas loaded at startup. Every framework sees every tool immediately.

- **Pros:** No discovery overhead, frameworks can inspect all tools upfront
- **Cons:** ~25-40K tokens consumed before the agent processes a single message
- **Best for:** Focused agents that always use the same 3-5 operations

### Dynamic (progressive discovery)

Only 4 meta-tools are exposed: `list_tools`, `describe_tool_input`, `execute_tool`, `list_scopes`. The agent discovers what it needs on demand.

- **Pros:** ~1,300 tokens initial, scales to any API surface size without token cost increase
- **Cons:** Extra round-trips for discovery (2-3x more tool calls per workflow)
- **Best for:** General-purpose agents, token-sensitive contexts, large API surfaces

### Why dynamic mode matters for Apideck

Xero exposes 50 flat tools. Stripe exposes 19. They can afford static mode because they're single-vendor APIs with a bounded tool set.

Apideck's Unified API covers 200+ endpoints across accounting, CRM, HRIS, file storage, and more. Static mode for the full surface would consume 55,000+ tokens — exceeding most context windows. Dynamic mode keeps the cost at ~1,300 tokens regardless of how many APIs are included.

### Who else uses progressive discovery

| Company / Project | Implementation | Scale |
|---|---|---|
| **Speakeasy** (built-in) | `search_tools` + `describe_tool_input` + `execute_tool` | 400+ tools → ~1,300 tokens |
| **GitHub MCP Server** | `--dynamic-toolsets` flag, starts with 4 core tools | 51-100+ tools |
| **Anthropic API** | `tool_search_tool` with `defer_loading: true` | Up to 10,000 tools |
| **MCPrism** | PostgreSQL + pgvector semantic search | Any size, 98% token savings |

## API Selection & Overlay

The full Apideck Unified API has 360 operations across 12 API groups. We use a Speakeasy overlay to select which APIs become MCP tools.

### Current selection (229 tools)

| API | Operations | Why included |
|---|---|---|
| **Accounting** | 143 | Core use case — AP, AR, reconciliation, financial reporting |
| **File Storage** | 32 | Document management for invoices, receipts, attachments |
| **HRIS** | 25 | Payroll, employee data for expense and payroll agents |
| **Vault** | 23 | Connection management — agents need to check connector status |
| **Proxy** | 6 | Pass-through for connector-specific operations |

### Excluded APIs

| API | Operations | Why excluded |
|---|---|---|
| CRM | 50 | Different domain — would be a separate MCP server |
| ATS | 15 | Recruiting, not financial ops |
| Ecommerce | 7 | Orders/products, not agent-relevant yet |
| File Storage could move to its own | — | If the server grows too large |
| Connector | 8 | Internal API metadata |
| Issue Tracking | 15 | Not financial ops |
| SMS | 5 | Not financial ops |
| Webhook | 6 | Infrastructure, not agent-relevant |

### Configurable via script

```bash
python generate-overlay.py accounting,fileStorage,hris,vault,proxy  # default
python generate-overlay.py accounting                                # accounting only (143 tools)
python generate-overlay.py all                                       # everything (336 tools, exceeds free tier)
```

The overlay uses Speakeasy's JSONPath targeting to disable non-selected API paths and annotate operations with `read`/`write`/`destructive` scopes.

### Speakeasy free tier

The free tier allows 250 operations per language. Our default selection (229 tools) fits within this limit. Including CRM (247 total) also fits. Including everything (336) requires a paid plan.

## Scopes & Permissions

Tools are annotated with scopes based on HTTP method:

| Scope | HTTP methods | Risk level |
|---|---|---|
| `read` | GET, HEAD | Safe — no side effects |
| `write` | POST, PUT, PATCH | Creates or modifies data |
| `destructive` | DELETE | Irreversible data loss |

Agents can be restricted to specific scopes at startup:

```bash
node bin/mcp-server.js start --scope read          # read-only agent
node bin/mcp-server.js start --scope read --scope write  # read + write, no deletes
```

This maps to the Apideck CLI's permission model (GET=auto-approved, POST/PUT=prompt, DELETE=blocked) but enforced at the MCP tool level.

## Authentication

Three Apideck credentials are required:

| Credential | What it is | How to pass |
|---|---|---|
| `api-key` | Apideck API key | `--api-key` flag or `x-apideck-api-key` header |
| `consumer-id` | The end-user/customer ID in your app | `--consumer-id` flag or `x-apideck-consumer-id` header |
| `app-id` | Your Apideck application ID | `--app-id` flag or `x-apideck-app-id` header |

For local/stdio mode, pass via CLI flags. For remote/hosted mode, pass via HTTP headers — this supports multi-tenant deployments where each request comes from a different consumer.

To target a specific connector (e.g., QuickBooks vs Xero), pass `xApideckServiceId` in the tool input:

```json
{
  "tool_name": "accounting-invoices-list",
  "input": {
    "request": {
      "limit": 10,
      "xApideckServiceId": "quickbooks"
    }
  }
}
```

## Hosting

The server supports three deployment modes:

| Mode | Command | Use case |
|---|---|---|
| **Local stdio** | `node bin/mcp-server.js start` | Claude Desktop, Cursor, local agent development |
| **Remote HTTP** | `node bin/mcp-server.js serve --port 3000` | Self-hosted, Railway, Fly.io |
| **Vercel** | `vercel deploy` | Serverless, auto-scaling |

### Cloudflare Workers (not recommended for now)

Speakeasy generates a Cloudflare Workers deployment (`wrangler.toml` + Durable Objects). However, the free plan's CPU startup limit (50ms) is too tight for 229 tools. A paid Workers plan (400ms) would work. We use Vercel instead.

### Current deployment

`https://mcp-server-one-mu.vercel.app/mcp` — deployed on the Apideck Vercel org. The Vercel API route (`api/mcp.ts`) wraps the Speakeasy-generated server with credential resolution from headers and runs in dynamic mode.

## Post-Generation Fixes

Speakeasy's code generation has two issues that require patching after each `speakeasy run`:

### 1. `describe_tool_input` Zod transforms error

Speakeasy generates Zod schemas with `.transform()` calls. When `describe_tool_input` converts these to JSON Schema via `z.toJSONSchema()`, Zod v4 throws "Transforms cannot be represented in JSON Schema."

**Fix:** Add `unrepresentable: "any"` option (renders transforms as `{}` instead of throwing) + try/catch fallback.

### 2. `wrangler.toml` naming

Speakeasy generates the worker name from the package name (`@apideck/mcp` → `@apideck/mcp-mcp-server`), which contains invalid characters for Cloudflare. It also uses `new_classes` instead of `new_sqlite_classes` (required for free plan).

**Fix:** `post-generate.sh` patches both files automatically:

```bash
speakeasy run
./post-generate.sh
```

## Competitive Landscape

### How other companies approach this

| Company | MCP server | Tools | Approach |
|---|---|---|---|
| **Xero** | `XeroAPI/xero-mcp-server` | 50 | Hand-built, single vendor |
| **Stripe** | `stripe/ai` (includes MCP) | 19 | Hand-built, curated |
| **Intuit/QuickBooks** | `intuit/quickbooks-online-mcp-server` | 12 | Hand-built, single vendor |
| **Plaid** | Dashboard MCP (4 tools) + sandbox MCP (4 tools) | 8 | Hand-built, operations only (no financial data via MCP) |
| **Apideck** | This repo | 229 | **Auto-generated from OpenAPI, multi-vendor, dynamic discovery** |

### Apideck's differentiation

1. **Multi-vendor** — One MCP server, any accounting system. Xero/Intuit/Stripe lock you into their platform.
2. **Auto-generated** — `speakeasy run` regenerates from the OpenAPI spec. No manual tool definitions to maintain.
3. **Dynamic discovery** — Progressive disclosure at ~1,300 tokens. Competitors dump all tools upfront.
4. **Configurable** — Select which APIs to include via `generate-overlay.py`. Ship accounting-only or the full stack.

## Repository Structure

```
├── README.md                    # Quick start, usage, framework examples
├── ARCHITECTURE.md              # This document
├── api/mcp.ts                   # Vercel serverless function wrapper
├── vercel.json                  # Vercel deployment config
├── wrangler.toml                # Cloudflare Workers config (patched by post-generate.sh)
├── generate-overlay.py          # Configure which APIs to include
├── mcp-overlay.yaml             # Generated overlay (output of generate-overlay.py)
├── post-generate.sh             # Fixes applied after speakeasy run
├── test/mcp-server.test.ts      # 21 integration tests
├── .speakeasy/
│   ├── workflow.yaml            # Source spec + overlay config
│   └── gen.yaml                 # Generation settings (sdkClassName, packageName, etc.)
├── src/
│   ├── core.ts                  # ApideckMcpCore SDK client
│   ├── funcs/                   # One function per API operation
│   ├── models/                  # Request/response Zod schemas
│   ├── mcp-server/
│   │   ├── server.ts            # MCP server factory
│   │   ├── tools.ts             # Tool registration + dynamic meta-tools
│   │   ├── tools/               # One tool definition per operation (229 files)
│   │   ├── scopes.ts            # read, write, destructive
│   │   ├── cli/                 # start + serve command implementations
│   │   └── ...
│   └── cloudflare-worker/       # Cloudflare Workers entry point
├── bin/mcp-server.js            # CLI entry point
└── package.json                 # @apideck/mcp
```
