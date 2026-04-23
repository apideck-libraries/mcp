# Minimal container image for the Apideck MCP server.
#
# Runs the stdio transport by default (what MCP clients like Claude
# Desktop, Cursor, and Glama's introspector expect). The entrypoint
# forwards APIDECK_* env vars as CLI flags so `docker run -e ... image`
# works without a wrapper script.
#
# Usage (with creds for real API calls):
#
#   docker run -i --rm \
#     -e APIDECK_API_KEY=sk_live_... \
#     -e APIDECK_APP_ID=... \
#     -e APIDECK_CONSUMER_ID=... \
#     ghcr.io/apideck-libraries/mcp
#
# Usage (introspection only — no creds needed):
#
#   docker run -i --rm ghcr.io/apideck-libraries/mcp
#
FROM node:20-alpine

# `@apideck/mcp` pins its version via npm; update the tag in CI when
# publishing a new release.
ARG APIDECK_MCP_VERSION=latest
RUN npm install -g "@apideck/mcp@${APIDECK_MCP_VERSION}"

# Smoke that the binary was installed correctly so the image fails to
# build rather than at runtime.
RUN mcp --help > /dev/null

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
