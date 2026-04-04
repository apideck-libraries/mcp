#!/bin/bash
# Post-generation fixes applied after `speakeasy run`
# Speakeasy regenerates these files, overwriting our patches.
# Run this after every `speakeasy run`.

set -e

echo "Applying post-generation fixes..."

# Fix 1: describe_tool_input — add unrepresentable: "any" to handle Zod transforms
sed -i.bak 's/const jsonSchema = z\.toJSONSchema(z\.object(def\.args), {/try { const jsonSchema = z.toJSONSchema(z.object(def.args), {/' src/mcp-server/tools.ts
sed -i.bak 's/target: "draft-2020-12",/target: "draft-2020-12", unrepresentable: "any",/' src/mcp-server/tools.ts
sed -i.bak '/schemaText += JSON\.stringify(jsonSchema, null, 2);/{
  s/$/\n        } catch { schemaText += JSON.stringify({ type: "object", note: "Schema unavailable due to transforms. Use execute_tool with best-effort parameters." }, null, 2); }/
}' src/mcp-server/tools.ts
rm -f src/mcp-server/tools.ts.bak

# Fix 2: wrangler.toml — fix worker name and use sqlite for free plan
sed -i.bak 's/name = "@apideck\/mcp-mcp-server"/name = "apideck-mcp-server"/' wrangler.toml
sed -i.bak 's/new_classes = /new_sqlite_classes = /' wrangler.toml
rm -f wrangler.toml.bak

echo "Post-generation fixes applied."
echo "  - tools.ts: describe_tool_input with unrepresentable: 'any' + try/catch"
echo "  - wrangler.toml: worker name + sqlite migration"
