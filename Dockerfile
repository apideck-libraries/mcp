# Apideck MCP server — container image for the Glama.ai directory.
#
# Glama uses a committed Dockerfile as the authoritative build spec
# (https://glama.ai/mcp/methodology); without one it AI-infers a Dockerfile.
# The inferred image curled nodesource, astral.sh (uv), and a python 3.14
# preview before `npm install -g @apideck/mcp@latest`, and failed with a
# "socket hang up" / ECONNRESET during the build. This image removes every
# unnecessary network hop — official Node base, one global npm install — and
# hardens that install against transient npm-registry drops.
FROM node:20-bookworm-slim

# Survive transient ECONNRESET / "socket hang up" from the npm registry inside
# isolated build networks (Glama runs builds in ephemeral Firecracker microVMs).
ENV NPM_CONFIG_FETCH_RETRIES=5 \
    NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=10000 \
    NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=60000

# Install the published CLI globally. `mcp` lands on PATH (package bin).
RUN npm install -g @apideck/mcp@latest

# stdio transport — run the container interactively: `docker run -i --rm <image>`.
ENTRYPOINT ["mcp"]
CMD ["start", "--transport", "stdio"]
