#!/bin/sh
# Forwards APIDECK_* env vars as --flag values to `mcp start` so the
# container can be configured via standard Docker env-var conventions.
#
# Any additional CLI args passed to `docker run <image> …` are appended
# after the auto-expanded flags, letting callers override transport,
# log-level, scope, etc.
set -e

args="start --transport stdio"

if [ -n "${APIDECK_API_KEY}" ]; then
  args="$args --api-key $APIDECK_API_KEY"
fi
if [ -n "${APIDECK_APP_ID}" ]; then
  args="$args --app-id $APIDECK_APP_ID"
fi
if [ -n "${APIDECK_CONSUMER_ID}" ]; then
  args="$args --consumer-id $APIDECK_CONSUMER_ID"
fi

# shellcheck disable=SC2086
exec mcp $args "$@"
