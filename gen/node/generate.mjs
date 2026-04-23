/**
 * Apideck MCP generator — full-input-schema variant.
 *
 * For each operation, builds an input schema (path + query + header + body
 * params) with real Zod validation, emitted via json-schema-to-zod.
 *
 * This is the parity-oriented successor to gen/generate.py: where the python
 * version emits `z.looseObject({})`, this version emits schemas sourced from
 * OpenAPI.
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { jsonSchemaToZod } from "json-schema-to-zod";

const REPO = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "..");
const SPEC_FILE = path.join(REPO, "speakeasy-spec.yml");
const OVERLAY_FILE = path.join(REPO, "mcp-overlay.yaml");
const OUT_DIR = path.join(REPO, "src", "gen");

const spec = yaml.load(fs.readFileSync(SPEC_FILE, "utf8"));
const overlay = yaml.load(fs.readFileSync(OVERLAY_FILE, "utf8"));

// ----------------------------------------------------------------------------
// Overlay: disabled paths
// ----------------------------------------------------------------------------
const disabledPaths = new Set();
for (const a of overlay.actions ?? []) {
  if (a.update?.["x-speakeasy-mcp"]?.disabled) {
    const m = /^\$\.paths\["([^"]+)"\]/.exec(a.target ?? "");
    if (m) disabledPaths.add(m[1]);
  }
}

// ----------------------------------------------------------------------------
// $ref resolution with cycle detection
// ----------------------------------------------------------------------------
const refCache = new Map();

function getRef(ref) {
  if (!ref.startsWith("#/")) return null;
  const parts = ref.slice(2).split("/");
  let node = spec;
  for (const p of parts) node = node?.[p];
  return node;
}

function resolveSchema(schema, visiting = new Set()) {
  if (!schema || typeof schema !== "object") return schema;

  if (schema.$ref) {
    if (visiting.has(schema.$ref)) {
      // Cycle — stop recursion with a permissive placeholder
      return { description: "(recursive reference elided)" };
    }
    const cached = refCache.get(schema.$ref);
    if (cached) return cached;
    const target = getRef(schema.$ref);
    if (!target) return {};
    const nextVisiting = new Set(visiting).add(schema.$ref);
    const resolved = resolveSchema(target, nextVisiting);
    refCache.set(schema.$ref, resolved);
    return resolved;
  }

  if (Array.isArray(schema)) {
    return schema.map((s) => resolveSchema(s, visiting));
  }

  const out = {};
  for (const [k, v] of Object.entries(schema)) {
    if (v && typeof v === "object") out[k] = resolveSchema(v, visiting);
    else out[k] = v;
  }
  return out;
}

// ----------------------------------------------------------------------------
// Per-op: build JSON schema for tool input
// ----------------------------------------------------------------------------
function buildInputSchema(op, pathItem) {
  const allParams = [
    ...(pathItem.parameters ?? []),
    ...(op.parameters ?? []),
  ].map((p) => resolveSchema(p));

  const properties = {};
  const required = [];

  for (const p of allParams) {
    if (!p?.name) continue;
    const base = resolveSchema(p.schema ?? {});
    const prop = { ...base };
    if (p.description) prop.description = p.description;
    properties[p.name] = prop;
    if (p.required) required.push(p.name);
  }

  // Request body: flatten JSON body into properties
  const rb = op.requestBody ? resolveSchema(op.requestBody) : null;
  if (rb) {
    const content = rb.content ?? {};
    const json = content["application/json"] ?? content["*/*"];
    if (json?.schema) {
      const bodySchema = resolveSchema(json.schema);
      // Nest under a `body` property so we don't collide with param names
      properties.body = bodySchema;
      if (rb.required) required.push("body");
    }
  }

  return {
    type: "object",
    additionalProperties: false,
    properties,
    required: required.length ? required : undefined,
  };
}

// ----------------------------------------------------------------------------
// Tool metadata
// ----------------------------------------------------------------------------
function methodToScope(m) {
  if (m === "get" || m === "head") return "read";
  if (m === "delete") return "destructive";
  return "write";
}

function methodToAnnotations(m) {
  const read = m === "get" || m === "head";
  return {
    readOnlyHint: read,
    destructiveHint: m === "delete",
    idempotentHint: ["get", "head", "put", "delete"].includes(m),
    openWorldHint: false,
  };
}

function shortDesc(op, fallback) {
  const src = (op.summary || op.description || fallback).trim().split("\n")[0];
  return src.length > 240 ? src.slice(0, 237) + "..." : src;
}

// ----------------------------------------------------------------------------
// Emit
// ----------------------------------------------------------------------------
const tools = [];
for (const [apiPath, pathItem] of Object.entries(spec.paths ?? {})) {
  if (disabledPaths.has(apiPath)) continue;
  for (const method of ["get", "post", "put", "patch", "delete"]) {
    const op = pathItem[method];
    if (!op) continue;
    if (op["x-speakeasy-mcp"]?.disabled) continue;

    const group = op["x-speakeasy-group"] ?? "";
    const override = op["x-speakeasy-name-override"] ?? "";
    if (!group || !override) continue;
    const name = `${group.replaceAll(".", "-")}-${override}`.toLowerCase();

    const pathParams = [];
    const queryParams = [];
    const headerParams = [];
    const allParams = [
      ...(pathItem.parameters ?? []),
      ...(op.parameters ?? []),
    ].map((p) => resolveSchema(p));
    for (const p of allParams) {
      if (!p?.name || !p?.in) continue;
      if (p.in === "path") pathParams.push(p.name);
      else if (p.in === "query") queryParams.push(p.name);
      else if (p.in === "header") headerParams.push(p.name);
    }
    const hasBody = Boolean(op.requestBody);

    const inputJsonSchema = buildInputSchema(op, pathItem);
    const zodSrc = jsonSchemaToZod(inputJsonSchema, { module: "none", noImport: true });

    tools.push({
      name,
      description: shortDesc(op, name),
      method: method.toUpperCase(),
      path: apiPath,
      pathParams,
      queryParams,
      headerParams,
      hasBody,
      scope: methodToScope(method),
      annotations: methodToAnnotations(method),
      zodSrc,
    });
  }
}

tools.sort((a, b) => a.name.localeCompare(b.name));

fs.mkdirSync(OUT_DIR, { recursive: true });

const out = [];
out.push("/* Auto-generated by gen/node/generate.mjs. DO NOT EDIT. */");
out.push("/* eslint-disable */");
out.push("// @ts-nocheck");
out.push('import * as z from "zod";');
out.push('import type { ToolDefinition } from "../mcp-server/tools.js";');
out.push('import { callApideck } from "./runtime.js";');
out.push("");
out.push("export const generatedTools: ToolDefinition<any>[] = [");

for (const t of tools) {
  out.push("  {");
  out.push(`    name: ${JSON.stringify(t.name)},`);
  out.push(`    description: ${JSON.stringify(t.description)},`);
  out.push(`    scopes: [${JSON.stringify(t.scope)}],`);
  out.push("    annotations: {");
  out.push('      title: "",');
  for (const [k, v] of Object.entries(t.annotations)) {
    out.push(`      ${k}: ${JSON.stringify(v)},`);
  }
  out.push("    },");
  // Wrap the input schema shape as a ZodRawShape by extracting inner shape
  // `z.object({ ...shape })` → we want the raw shape. json-schema-to-zod
  // always emits `z.object({...})` for object schemas. Pull the shape via
  // a small runtime trick: rewrap as shape.
  out.push(`    args: (${t.zodSrc}).shape,`);
  out.push("    async tool(client, args, ctx) {");
  out.push("      return callApideck(client, {");
  out.push(`        method: ${JSON.stringify(t.method)},`);
  out.push(`        path: ${JSON.stringify(t.path)},`);
  out.push(`        pathParams: ${JSON.stringify(t.pathParams)},`);
  out.push(`        queryParams: ${JSON.stringify(t.queryParams)},`);
  out.push(`        headerParams: ${JSON.stringify(t.headerParams)},`);
  out.push(`        hasBody: ${JSON.stringify(t.hasBody)},`);
  out.push("        signal: ctx.signal,");
  out.push("      }, args);");
  out.push("    },");
  out.push("  },");
}
out.push("];");
out.push("");

fs.writeFileSync(path.join(OUT_DIR, "tools.ts"), out.join("\n"));
console.log(`Generated ${tools.length} tools → src/gen/tools.ts`);
console.log(`  total bytes: ${fs.statSync(path.join(OUT_DIR, "tools.ts")).size.toLocaleString()}`);
