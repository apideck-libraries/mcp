/**
 * Tests for Vault OAuth elicitation on connection failures.
 *
 * Covers:
 * - detectConnectionIssue recognises Apideck's canonical markers
 * - Benign 4xx responses don't trigger elicitation
 * - mintVaultSessionUrl hits /vault/sessions with the right headers
 * - A connection failure results in a thrown UrlElicitationRequiredError
 *   carrying the Vault session URL
 * - Plain-text fallback when session minting fails
 * - Non-connection 4xx responses keep the existing behaviour (text result)
 */

import { UrlElicitationRequiredError } from "../node_modules/@modelcontextprotocol/sdk/dist/esm/types.js";
import {
  buildConnectionElicitation,
  connectionIssueFallback,
  detectConnectionIssue,
  mintVaultSessionUrl,
} from "../esm/src/gen/elicitation.js";
import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";

let failures = 0;
const assert = (cond, msg) => {
  if (!cond) {
    console.error(`  FAIL: ${msg}`);
    failures++;
  } else {
    console.log(`  PASS: ${msg}`);
  }
};

const logger = {
  level: "info",
  debug() {},
  info() {},
  warning() {},
  error() {},
};

const CONNECTION_ERROR_BODY = JSON.stringify({
  status_code: 400,
  error: "Bad Request",
  type_name: "ConnectorExecutionError",
  message: "Odoo Connector Returned Error",
  detail: {
    context: { connector: "odoo", unified_api: "accounting" },
    error: {
      typeName: "ThrowableHookError",
      detail: {
        errors: [{
          type: "BadRequest",
          message:
            "Odoo connection is missing a valid userUID. This usually means the persistUserUID hook did not run successfully. Please re-authorize the connection to resolve this.",
        }],
      },
    },
  },
});

// ---------------------------------------------------------------------------
// 1. detectConnectionIssue recognises the Apideck error envelope
// ---------------------------------------------------------------------------
console.log("Test: detectConnectionIssue extracts connector + unified_api");
{
  const issue = detectConnectionIssue(400, CONNECTION_ERROR_BODY);
  assert(issue !== null, "issue detected");
  if (issue) {
    assert(issue.status === 400, "status preserved");
    assert(issue.serviceId === "odoo", `serviceId = odoo (got ${issue.serviceId})`);
    assert(issue.unifiedApi === "accounting", `unifiedApi = accounting (got ${issue.unifiedApi})`);
    assert(
      issue.summary.toLowerCase().includes("re-authorize"),
      "summary surfaces the actionable reason",
    );
  }
}

// ---------------------------------------------------------------------------
// 2. Benign 4xx (e.g. validation error) is NOT flagged
// ---------------------------------------------------------------------------
console.log("Test: generic 4xx is not flagged as connection issue");
{
  const issue = detectConnectionIssue(
    422,
    JSON.stringify({ message: "Required field missing: customer_id" }),
  );
  assert(issue === null, "non-connection error ignored");
}

// ---------------------------------------------------------------------------
// 3. Non-JSON connection error still detected via substring
// ---------------------------------------------------------------------------
console.log("Test: non-JSON body containing canonical marker still detected");
{
  const issue = detectConnectionIssue(
    503,
    "upstream: Connection not found for this consumer",
  );
  assert(issue !== null, "detected via substring");
  assert(issue?.unifiedApi === undefined, "no service metadata when body is non-JSON");
}

// ---------------------------------------------------------------------------
// 4. mintVaultSessionUrl calls /vault/sessions with correct headers/body
// ---------------------------------------------------------------------------
console.log("Test: mintVaultSessionUrl posts to /vault/sessions");
{
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (url, opts = {}) => {
    const hdrs = opts.headers instanceof Headers
      ? Object.fromEntries(opts.headers.entries())
      : { ...opts.headers };
    calls.push({ url: String(url), method: opts.method, headers: hdrs, body: opts.body });
    return new Response(
      JSON.stringify({ data: { session_uri: "https://vault.apideck.com/session/abc" } }),
      { status: 200, headers: { "content-type": "application/json" } },
    );
  };
  const url = await mintVaultSessionUrl({
    apiKey: "sk_test_elicit",
    appId: "app-xyz",
    consumerId: "consumer-xyz",
  });
  globalThis.fetch = orig;

  assert(url === "https://vault.apideck.com/session/abc", "session URL returned");
  assert(calls[0]?.url === "https://unify.apideck.com/vault/sessions", "hit /vault/sessions");
  assert(calls[0]?.method === "POST", "POST method");
  assert(
    calls[0]?.headers["authorization"] === "Bearer sk_test_elicit",
    "Bearer auth sent",
  );
  assert(
    calls[0]?.headers["x-apideck-consumer-id"] === "consumer-xyz",
    "consumer-id sent",
  );
}

// ---------------------------------------------------------------------------
// 5. Missing consumer_id: mintVaultSessionUrl returns null, no fetch call
// ---------------------------------------------------------------------------
console.log("Test: mintVaultSessionUrl bails when consumer_id is missing");
{
  let called = false;
  const orig = globalThis.fetch;
  globalThis.fetch = async () => {
    called = true;
    return new Response("{}", { status: 200 });
  };
  const url = await mintVaultSessionUrl({
    apiKey: "sk_test",
    appId: "app",
    consumerId: undefined,
  });
  globalThis.fetch = orig;
  assert(url === null, "returned null");
  assert(!called, "did not call Vault");
}

// ---------------------------------------------------------------------------
// 6. buildConnectionElicitation produces a well-formed error
// ---------------------------------------------------------------------------
console.log("Test: buildConnectionElicitation shapes a URL elicitation");
{
  const err = buildConnectionElicitation(
    { status: 400, serviceId: "xero", unifiedApi: "accounting", summary: "re-auth needed" },
    "https://vault.apideck.com/session/xyz",
  );
  assert(err instanceof UrlElicitationRequiredError, "is UrlElicitationRequiredError");
  assert(err.elicitations.length === 1, "one elicitation");
  const e = err.elicitations[0];
  assert(e.mode === "url", "mode=url");
  assert(e.url === "https://vault.apideck.com/session/xyz", "url carries session URL");
  assert(typeof e.elicitationId === "string" && e.elicitationId.length > 0, "elicitationId set");
  assert(
    e.message.toLowerCase().includes("xero"),
    "message references the failing service",
  );
}

// ---------------------------------------------------------------------------
// 7. End-to-end via the real tool: connection error → elicitation thrown
// ---------------------------------------------------------------------------
console.log("Test: e2e — connection error from Apideck triggers elicitation");
{
  const booted = createGeneratedMCPServer({
    logger,
    dynamic: true,
    getSDK: () => ({
      _options: {
        appId: "app",
        consumerId: "consumer",
        security: async () => ({ apiKey: "sk_test_e2e" }),
      },
    }),
  });

  const orig = globalThis.fetch;
  globalThis.fetch = async (input) => {
    const url = input instanceof Request ? input.url : String(input);
    if (url.includes("/vault/sessions")) {
      return new Response(
        JSON.stringify({ data: { session_uri: "https://vault.apideck.com/session/e2e" } }),
        { status: 200, headers: { "content-type": "application/json" } },
      );
    }
    // The actual tool call: return the connection error shape
    return new Response(CONNECTION_ERROR_BODY, {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  };

  let thrown;
  try {
    await booted.server._registeredTools.execute_tool.handler(
      {
        name: "accounting-invoices-list",
        arguments: { request: { limit: 1 } },
      },
      { signal: new AbortController().signal },
    );
  } catch (err) {
    thrown = err;
  }
  globalThis.fetch = orig;

  assert(thrown instanceof UrlElicitationRequiredError, "UrlElicitationRequiredError thrown");
  assert(
    thrown?.elicitations?.[0]?.url === "https://vault.apideck.com/session/e2e",
    "session URL from minted response",
  );
}

// ---------------------------------------------------------------------------
// 8. Fallback path: if Vault session minting fails, return text result
// ---------------------------------------------------------------------------
console.log("Test: fallback text result when session minting fails");
{
  const result = connectionIssueFallback(
    { status: 401, serviceId: "xero", unifiedApi: "accounting", summary: "token expired" },
    null,
  );
  assert(result.isError === true, "isError set");
  const text = result.content[0].text;
  assert(text.includes("accounting/xero"), "target referenced");
  assert(text.includes("token expired"), "reason carried through");
}

// ---------------------------------------------------------------------------
// 9. Non-connection errors pass through unchanged (no elicitation fired)
// ---------------------------------------------------------------------------
console.log("Test: non-connection 4xx returns plain text result, no elicitation");
{
  const booted = createGeneratedMCPServer({
    logger,
    dynamic: true,
    getSDK: () => ({
      _options: {
        appId: "app",
        consumerId: "consumer",
        security: async () => ({ apiKey: "sk_test" }),
      },
    }),
  });

  const orig = globalThis.fetch;
  let vaultCalled = false;
  globalThis.fetch = async (input) => {
    const url = input instanceof Request ? input.url : String(input);
    if (url.includes("/vault/sessions")) vaultCalled = true;
    return new Response(
      JSON.stringify({ message: "Required field missing: customer_id" }),
      { status: 422, headers: { "content-type": "application/json" } },
    );
  };

  const res = await booted.server._registeredTools.execute_tool.handler(
    {
      name: "accounting-invoices-list",
      arguments: { request: { limit: 1 } },
    },
    { signal: new AbortController().signal },
  );
  globalThis.fetch = orig;

  assert(res.isError === true, "isError=true on 422");
  assert(
    res.content[0].text.includes("customer_id"),
    "original error text passes through",
  );
  assert(!vaultCalled, "Vault session URL was NOT minted for a validation error");
}

console.log(
  `\n${failures === 0 ? "All elicitation tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
