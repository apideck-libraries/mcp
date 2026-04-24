# Apideck MCP — enhanced spec

This directory holds Claro's LLM-enhanced OpenAPI spec.

`enhanced-openapi.yml` is consumed by `gen/node/generate.mjs` in place of
the raw upstream spec (`speakeasy-spec.yml`) when present. The enhanced
spec carries richer operation summaries and parameter descriptions, which
roll up into better tool descriptions and — per Glama's TDQS scoring —
a higher quality grade.

## Generating / refreshing

```bash
# Needs OPENAI_API_KEY or ANTHROPIC_API_KEY + gh CLI access to apideck-io/claro
./gen/run-claro.sh
```

The script clones Claro into `/tmp/apideck-claro`, runs
`pnpm run enhance`, and copies the resulting YAML into this directory.

## Why not check the raw spec in too?

The raw Apideck OpenAPI (`speakeasy-spec.yml`) lives on S3 and
`.gitignore` excludes it — it's upstream content we don't version.
The enhanced spec is our derivative: we run Claro on it, review the
diff, and commit the output here so CI can rebuild the generator
without needing an LLM provider configured.
