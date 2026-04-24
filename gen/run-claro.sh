#!/usr/bin/env bash
# Run Claro (github.com/apideck-io/claro — private) to produce an
# LLM-enhanced OpenAPI spec. Output goes to
# specs/apideck-mcp/enhanced-openapi.yml and is consumed by
# gen/node/generate.mjs.
#
# Requirements:
#   - gh CLI authenticated with access to apideck-io/claro
#   - pnpm installed
#   - OPENAI_API_KEY or ANTHROPIC_API_KEY in the environment
#
# The script clones Claro into a gitignored sibling directory, installs,
# builds, and runs `enhance` against the raw Apideck spec. Rerun whenever
# the upstream spec changes.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLARO_DIR="${CLARO_DIR:-/tmp/apideck-claro}"
SPEC_URL="${SPEC_URL:-https://ci-spec-unify.s3.eu-central-1.amazonaws.com/speakeasy-spec.yml}"
SPEC_ID="${SPEC_ID:-apideck-mcp}"
OUT_DIR="$REPO_ROOT/specs/$SPEC_ID"

echo "[claro] repo root: $REPO_ROOT"
echo "[claro] spec source: $SPEC_URL"
echo "[claro] claro checkout: $CLARO_DIR"

if [ ! -d "$CLARO_DIR" ]; then
  echo "[claro] cloning apideck-io/claro …"
  gh repo clone apideck-io/claro "$CLARO_DIR"
else
  echo "[claro] pulling latest from origin/main …"
  git -C "$CLARO_DIR" fetch origin main
  git -C "$CLARO_DIR" checkout main
  git -C "$CLARO_DIR" reset --hard origin/main
fi

cd "$CLARO_DIR"
echo "[claro] pnpm install"
pnpm install --frozen-lockfile || pnpm install
# sqlite3 ships as a native module; pnpm doesn't run its install
# script by default, so prebuild-install never fires. Trigger it
# manually when the native artifact is missing.
if ! [ -f node_modules/.pnpm/sqlite3@*/node_modules/sqlite3/build/Release/node_sqlite3.node ] 2>/dev/null; then
  echo "[claro] building sqlite3 native module"
  (cd node_modules/.pnpm/sqlite3@*/node_modules/sqlite3 && npm run install >/dev/null 2>&1) || true
fi
echo "[claro] pnpm run build"
pnpm run build

# Pick the provider based on which key the caller has exported. Defaults
# point at the latest-generation models available as of April 2026;
# override the MODEL env vars if you want to pin something older or try
# a smaller/cheaper variant.
if [ -n "${ANTHROPIC_API_KEY:-}" ]; then
  PROVIDER="${PROVIDER:-anthropic}"
  : "${ANTHROPIC_MODEL:=claude-sonnet-4-6}"
  export ANTHROPIC_API_KEY ANTHROPIC_MODEL
elif [ -n "${OPENAI_API_KEY:-}" ]; then
  PROVIDER="${PROVIDER:-openai}"
  : "${OPENAI_MODEL:=gpt-4.1-mini}"
  export OPENAI_API_KEY OPENAI_MODEL
else
  echo "[claro] ERROR: set ANTHROPIC_API_KEY or OPENAI_API_KEY in the environment" >&2
  exit 2
fi

# Pre-process: fetch the upstream spec and ensure every operation has
# a `description` (fall back to `summary`). Claro's enhancement graph
# requires content.description to be populated; Apideck's spec has
# summary-only operations that would otherwise fail mid-pipeline.
PREPPED_SPEC="$CLARO_DIR/tmp/apideck-mcp-input.yml"
mkdir -p "$(dirname "$PREPPED_SPEC")"
echo "[claro] fetching + normalising spec → $PREPPED_SPEC"
node --input-type=module -e "
  import https from 'node:https';
  import fs from 'node:fs';
  import yaml from '$CLARO_DIR/node_modules/js-yaml/dist/js-yaml.mjs';
  const url = '$SPEC_URL';
  const chunks = [];
  https.get(url, r => {
    r.on('data', c => chunks.push(c));
    r.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8');
      const spec = yaml.load(raw);
      let filled = 0;
      for (const ops of Object.values(spec.paths ?? {})) {
        for (const m of ['get','post','put','patch','delete','options','head']) {
          const op = ops?.[m];
          if (op && !op.description && op.summary) {
            op.description = op.summary;
            filled++;
          }
        }
      }
      fs.writeFileSync('$PREPPED_SPEC', yaml.dump(spec));
      console.error('[claro] filled ' + filled + ' missing operation descriptions');
    });
  }).on('error', e => { console.error(e); process.exit(1); });
"

echo "[claro] enhance --specId $SPEC_ID --provider $PROVIDER --format yaml --cacheResponses"
pnpm run enhance \
  --specId "$SPEC_ID" \
  --incomingSpecPath "$PREPPED_SPEC" \
  --provider "$PROVIDER" \
  --format yaml \
  --cacheResponses

ENHANCED="$CLARO_DIR/specs/$SPEC_ID/openapi.yml"
if [ ! -f "$ENHANCED" ]; then
  echo "[claro] ERROR: expected $ENHANCED to exist after enhance" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"
cp "$ENHANCED" "$OUT_DIR/enhanced-openapi.yml"
echo "[claro] wrote $OUT_DIR/enhanced-openapi.yml ($(wc -c < "$OUT_DIR/enhanced-openapi.yml") bytes)"
echo "[claro] next: cd $REPO_ROOT && node gen/node/generate.mjs"
