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
fi

cd "$CLARO_DIR"
echo "[claro] pnpm install"
pnpm install --frozen-lockfile || pnpm install

echo "[claro] enhance --specId $SPEC_ID --format yaml --cacheResponses"
pnpm run enhance \
  --specId "$SPEC_ID" \
  --incomingSpecUrl "$SPEC_URL" \
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
