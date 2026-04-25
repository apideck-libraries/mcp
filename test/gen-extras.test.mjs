/**
 * Gap-closure tests for the generator runtime:
 * - binary uploads (base64 → raw bytes with correct Content-Type)
 * - retries on 408/5xx with exponential backoff
 * - image/audio responses surfaced as MCP content blocks
 * - pagination hint appears in tool description
 */

import { generatedTools } from "../esm/src/gen/tools.js";

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) {
    console.error(`  FAIL: ${msg}`);
    failures++;
  } else {
    console.log(`  PASS: ${msg}`);
  }
};

const byName = new Map(generatedTools.map((t) => [t.name, t]));
const fakeSDK = {
  _options: { appId: "a", consumerId: "c", security: { apiKey: "k" } },
};

// ---------------------------------------------------------------------------
// 1. Binary upload: base64 body → raw bytes with correct Content-Type
// ---------------------------------------------------------------------------
console.log("Test: binary upload ships raw bytes");
const upload = byName.get("filestorage-files-upload")
  ?? byName.get("file-storage-files-upload")
  ?? byName.get("fileStorage-files-upload");
assert(upload, "file-storage-files-upload present");

const captured = [];
const origFetch = globalThis.fetch;
globalThis.fetch = async (url, opts) => {
  captured.push({
    url: String(url),
    contentType: opts.headers.get("content-type"),
    // Body is a Uint8Array (Node's Buffer decodes base64 into one)
    bodyLen: opts.body?.length ?? opts.body?.byteLength,
  });
  return new Response('{"ok":true}', { status: 200, headers: { "content-type": "application/json" } });
};
// 1x1 transparent PNG, base64
const png1x1 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
await upload.tool(
  fakeSDK,
  { body: { data: png1x1, mimeType: "image/png" } },
  { signal: new AbortController().signal },
);
globalThis.fetch = origFetch;

assert(captured.length === 1, "upload dispatched");
assert(captured[0].contentType === "image/png", "Content-Type from payload");
assert(captured[0].bodyLen > 50, "body is non-empty raw bytes");

// ---------------------------------------------------------------------------
// 2. Retries: 503 retried, eventual success returns 200
// ---------------------------------------------------------------------------
console.log("Test: 5xx is retried with backoff");
const list = byName.get("accounting-invoices-list");
let calls = 0;
globalThis.fetch = async () => {
  calls++;
  if (calls < 3) return new Response("busy", { status: 503 });
  return new Response('{"data":[]}', { status: 200, headers: { "content-type": "application/json" } });
};
const start = Date.now();
const retryRes = await list.tool(fakeSDK, { limit: 1 }, { signal: new AbortController().signal });
const elapsed = Date.now() - start;
globalThis.fetch = origFetch;

assert(calls === 3, `fetch called 3× (1 initial + 2 retries) — got ${calls}`);
assert(retryRes.isError !== true, "eventual success not flagged error");
assert(elapsed >= 500, `backoff took >=500ms (got ${elapsed}ms)`);

// ---------------------------------------------------------------------------
// 3. Image response → image content block with base64
// ---------------------------------------------------------------------------
console.log("Test: image response surfaced as image content block");
const download = byName.get("filestorage-files-download")
  ?? byName.get("file-storage-files-download")
  ?? byName.get("fileStorage-files-download");
assert(download, "file download tool present");
globalThis.fetch = async () =>
  new Response(Buffer.from([0x89, 0x50, 0x4e, 0x47]), {
    status: 200,
    headers: { "content-type": "image/png" },
  });
const imgRes = await download.tool(
  fakeSDK,
  { id: "file-123" },
  { signal: new AbortController().signal },
);
globalThis.fetch = origFetch;
assert(imgRes.content[0].type === "image", "content block type is 'image'");
assert(imgRes.content[0].mimeType === "image/png", "mimeType preserved");
assert(typeof imgRes.content[0].data === "string" && imgRes.content[0].data.length > 0, "base64 payload set");

// ---------------------------------------------------------------------------
// 4. Pagination hint appears in description for cursor-paginated tools
// ---------------------------------------------------------------------------
console.log("Test: pagination hint in tool description");
assert(
  list.description.toLowerCase().includes("cursor"),
  "invoices-list description mentions cursor pagination",
);
assert(
  list.description.includes("$.meta.cursors.next"),
  "description tells LLM where to find the next cursor",
);

// Non-paginated tool should not have the hint
const getTool = byName.get("accounting-invoices-get");
if (getTool) {
  assert(
    !getTool.description.toLowerCase().includes("cursor"),
    "non-paginated tool lacks cursor hint",
  );
}

// ---------------------------------------------------------------------------
// 5. Retries give up after max attempts on persistent 5xx
// ---------------------------------------------------------------------------
console.log("Test: retries give up and return error after max attempts");
let persistentCalls = 0;
globalThis.fetch = async () => {
  persistentCalls++;
  return new Response("server exploded", { status: 502 });
};
const giveUpRes = await list.tool(fakeSDK, { limit: 1 }, { signal: new AbortController().signal });
globalThis.fetch = origFetch;
assert(persistentCalls === 4, `fetch called 4× (default attempts) — got ${persistentCalls}`);
assert(giveUpRes.isError === true, "gives up with isError: true");

console.log(`\n${failures === 0 ? "All gen-extras tests passed" : `${failures} test(s) failed`}`);
process.exit(failures === 0 ? 0 : 1);
