/// <reference types="bun-types" />

import { build } from "bun";
import { chmod, cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { packExtension } from "@anthropic-ai/mcpb";
import { join } from "node:path";
import { createGeneratedMCPServer } from "../gen/create-server.ts";
import { ApideckMcpCore } from "../core.ts";
import { createConsoleLogger } from "./console-logger.ts";

const shouldPack = process.argv.includes("--pack");

async function buildMcpServer() {
  // Use the custom generator so the bundled .mcpb advertises the same
  // tool surface the deployed server exposes — including the Phase 3
  // workflow tools (apideck-pay-bill, apideck-receive-customer-payment,
  // apideck-onboard-employee, apideck-month-end-close-check) — and the
  // flat schemas that score AAA on Glama TDQS. Static mode here so the
  // manifest carries the full 330+4 list, not just the 4 meta-tools.
  const logger = createConsoleLogger("info");
  const { tools } = createGeneratedMCPServer({
    logger,
    dynamic: false,
    getSDK: () =>
      new ApideckMcpCore({
        appId: "manifest-build",
        consumerId: "manifest-build",
        security: { apiKey: "manifest-build" },
      }),
  });

  // Iterate through all registered tools and add them to the manifest
  const manifest = await readFile("manifest.json", "utf8");
  const manifestJson = JSON.parse(manifest);

  // remove previous 
  manifestJson.tools = [];
  manifestJson.tools.push(...tools.map((tool: any) => ({
    name: tool.name,
    description: tool.description,
  })));

  await writeFile("manifest.json", JSON.stringify(manifestJson, null, 2));
  const entrypoint = "./src/mcp-server/mcp-server.ts";
  const destinationDir = "./bin";

  // Generate tool-names.ts for the landing page
  const toolNamesContent = `// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= ${JSON.stringify(
    tools.map((tool: any) => ({
      name: tool.name,
      description: tool.description,
    })),
    null,
    2
  )};
`;
  await writeFile("./src/tool-names.ts", toolNamesContent);

  await build({
    entrypoints: [entrypoint],
    outdir: destinationDir,
    sourcemap: shouldPack ? "none" : "linked",
    target: "node",
    format: "esm",
    minify: shouldPack,
    throw: true,
    banner: "#!/usr/bin/env node",
  });

  // Set executable permissions on the output file
  const outputFile = join(destinationDir, "mcp-server.js");
  await chmod(outputFile, 0o755);
  // create static directory for cloudflare deployment
  const staticDir = "./static";
  await mkdir(staticDir, { recursive: true });

  // Build the MCP bundle file
  if (shouldPack) {
    // Stage only the files needed for distribution to avoid bloated bundles.
    // Without this, packExtension would include node_modules and source files.
    const stageDir = ".mcpb-stage";
    await mkdir(join(stageDir, "bin"), { recursive: true });
    await cp(
      join(destinationDir, "mcp-server.js"),
      join(stageDir, "bin", "mcp-server.js"),
    );
    await cp("manifest.json", join(stageDir, "manifest.json"));

    // Copy icon and screenshot assets if they exist
    const assetExts = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
    for (const file of await readdir(".")) {
      if (assetExts.some((ext) => file.toLowerCase().endsWith(ext))) {
        await cp(file, join(stageDir, file));
      }
    }

    await packExtension({
      extensionPath: stageDir,
      outputPath: "./mcp-server.mcpb",
      silent: false,
    });

    // Clean up staging directory
    await rm(stageDir, { recursive: true, force: true });
  }
}

await buildMcpServer().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
