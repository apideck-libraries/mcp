#!/bin/bash
# Post-generation fixes applied after `speakeasy run`
# Speakeasy regenerates these files, overwriting our patches.
# Run this after every `speakeasy run`.

set -e

echo "Applying post-generation fixes..."

# Fix 1: describe_tool_input — add unrepresentable: "any" to handle Zod transforms
sed -i.bak 's/z\.toJSONSchema(z\.object(def\.args), {/try { const jsonSchema = z.toJSONSchema(z.object(def.args), {/' src/mcp-server/tools.ts
sed -i.bak 's/target: "draft-2020-12",$/target: "draft-2020-12", unrepresentable: "any",/' src/mcp-server/tools.ts
# Wrap the JSON.stringify line with catch block
sed -i.bak '/schemaText += JSON\.stringify(jsonSchema, null, 2);/c\          schemaText += JSON.stringify(jsonSchema, null, 2);\n        } catch {\n          schemaText += JSON.stringify({ type: "object", note: "Schema unavailable due to transforms." }, null, 2);\n        }' src/mcp-server/tools.ts
# Remove the now-orphaned `const jsonSchema =` declaration (try already declares it)
sed -i.bak 's/^        const jsonSchema = try/        try/' src/mcp-server/tools.ts
rm -f src/mcp-server/tools.ts.bak

# Fix 1b: execute_tool — use raw input to prevent binary upload double-parse
# Speakeasy regen uses `vres.data` (transformed) which breaks base64 uploads.
# The SDK re-parses input, so we must pass the original untransformed values.
sed -i.bak 's/const vres = z\.object(def\.args)\.safeParse(args\.input ?? {});/const rawInput = args.input ?? {};\n      const vres = z.object(def.args).safeParse(rawInput);/' src/mcp-server/tools.ts
sed -i.bak 's/validatedInput = vres\.data;/validatedInput = rawInput;/' src/mcp-server/tools.ts
rm -f src/mcp-server/tools.ts.bak

# Fix 2: wrangler.toml — fix worker name and use sqlite for free plan
sed -i.bak 's/name = "@apideck\/mcp-mcp-server"/name = "apideck-mcp-server"/' wrangler.toml
sed -i.bak 's/new_classes = /new_sqlite_classes = /' wrangler.toml
rm -f wrangler.toml.bak

# Fix 3: Default to dynamic mode — add `default: "dynamic"` to mode flag
sed -i.bak 's/values: \["dynamic"\],$/values: ["dynamic"],\n        default: "dynamic",/' src/mcp-server/cli/start/command.ts
sed -i.bak 's/values: \["dynamic"\],$/values: ["dynamic"],\n        default: "dynamic",/' src/mcp-server/cli/serve/command.ts
rm -f src/mcp-server/cli/start/command.ts.bak src/mcp-server/cli/serve/command.ts.bak

# Fix 4: Restore Vercel deployment requirements
# Speakeasy regen overwrites package.json (dropping @vercel/functions)
# and .gitignore (adding /bin and /esm which must be tracked for Vercel
# since buildCommand is empty).
if ! grep -q '@vercel/functions' package.json; then
  sed -i.bak 's/"@stricli\/core": "\^1.1.2",/"@stricli\/core": "^1.1.2",\n    "@vercel\/functions": "^3.4.3",/' package.json
  rm -f package.json.bak
  echo "  - package.json: restored @vercel/functions dependency"
fi
sed -i.bak '/^\/bin$/d; /^\/esm$/d' .gitignore
rm -f .gitignore.bak

echo "Post-generation fixes applied."
echo "  - tools.ts: describe_tool_input with unrepresentable: 'any' + try/catch"
echo "  - tools.ts: execute_tool raw input to prevent binary double-parse"
echo "  - wrangler.toml: worker name + sqlite migration"
echo "  - start/serve: dynamic mode is now the default"
echo "  - package.json: @vercel/functions dependency preserved"
echo "  - .gitignore: /bin and /esm kept tracked for Vercel deploy"
