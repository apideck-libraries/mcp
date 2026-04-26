/**
 * Tests for `apideck-onboard-employee` — first cross-unified-API
 * workflow (ATS → HRIS).
 *
 * Covers:
 *   - registered with write scope
 *   - happy-path: applicants-get → employees-create with mapped fields
 *   - separate x-apideck-service-id headers per unified API
 *   - applicant has no name → validate-applicant error
 *   - applicants-get failure → no employee created
 *   - employees-create failure → returned with failingStep
 *   - optional hired_stage_id → 3rd call to applicants-update
 *   - stage update failure surfaces as a warning, NOT an error
 *     (employee already created — soft fail)
 *   - McpError elicitation propagates through cross-API workflow
 */

import { createGeneratedMCPServer } from "../esm/src/gen/create-server.js";
import { workflowTools } from "../esm/src/gen/workflows/index.js";

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

const fakeSDK = () => ({
  _options: {
    appId: "app",
    consumerId: "consumer",
    security: async () => ({ apiKey: "sk_test_onboard" }),
  },
});

function stubFetch(routes) {
  const calls = [];
  const orig = globalThis.fetch;
  globalThis.fetch = async (input, opts = {}) => {
    const url = input instanceof Request ? input.url : String(input);
    const body = opts.body && typeof opts.body === "string"
      ? (() => { try { return JSON.parse(opts.body); } catch { return opts.body; } })()
      : undefined;
    calls.push({
      url,
      method: opts.method,
      headers: Object.fromEntries(opts.headers?.entries?.() ?? []),
      body,
    });
    for (const [pattern, route] of Object.entries(routes)) {
      if (url.includes(pattern)) {
        const status = route.__status ?? 200;
        return new Response(JSON.stringify(route), {
          status,
          headers: { "content-type": "application/json" },
        });
      }
    }
    return new Response("not stubbed", { status: 500 });
  };
  return { calls, restore: () => (globalThis.fetch = orig) };
}

const booted = createGeneratedMCPServer({
  logger,
  dynamic: true,
  getSDK: fakeSDK,
});
const exec = booted.server._registeredTools.execute_tool;

// ---------------------------------------------------------------------------
// 1. Registered with write scope
// ---------------------------------------------------------------------------
console.log("Test: apideck-onboard-employee registered with write scope");
{
  assert(
    booted.tools.some((t) => t.name === "apideck-onboard-employee"),
    "tool registered in booted server",
  );
  const def = workflowTools.find((t) => t.name === "apideck-onboard-employee");
  assert(def, "workflow definition exported");
  assert(def.scopes?.includes("write"), "scope includes write");
  assert(def.annotations?.readOnlyHint === false, "not read-only");
  assert(def.annotations?.idempotentHint === false, "not idempotent");
}

// ---------------------------------------------------------------------------
// 2. Happy path without optional ATS stage move
// ---------------------------------------------------------------------------
console.log("Test: maps applicant → employee body, separate service IDs per API");
{
  const stub = stubFetch({
    "/ats/applicants/app-1": {
      data: {
        id: "app-1",
        first_name: "Ada",
        last_name: "Lovelace",
        middle_name: "Augusta",
        headline: "Senior Engineer",
        emails: [{ email: "ada@example.com", type: "personal" }],
        phone_numbers: [{ number: "+44 20 7946 0958" }],
        addresses: [{ city: "London", country: "GB" }],
      },
    },
    "/hris/employees": {
      data: { id: "emp-99", first_name: "Ada", last_name: "Lovelace" },
    },
  });

  const res = await exec.handler(
    {
      name: "apideck-onboard-employee",
      arguments: {
        applicant_id: "app-1",
        employment_start_date: "2026-05-01",
        department_id: "dept-eng",
        manager_id: "mgr-7",
        "x-apideck-ats-service-id": "greenhouse",
        "x-apideck-hris-service-id": "bamboohr",
      },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError !== true, "not an error");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.applicant_id === "app-1", "applicant_id echoed");
  assert(payload.employee_id === "emp-99", "employee_id from HRIS");
  assert(payload.first_name === "Ada", "first_name");
  assert(payload.last_name === "Lovelace", "last_name");
  assert(payload.title === "Senior Engineer", "title pulled from headline");
  assert(payload.ats_service_id === "greenhouse", "ats_service_id echoed");
  assert(payload.hris_service_id === "bamboohr", "hris_service_id echoed");
  assert(!payload.warnings, "no warnings without optional stage move");

  assert(stub.calls.length === 2, `2 upstream calls (got ${stub.calls.length})`);
  const [appCall, empCall] = stub.calls;
  assert(appCall.url.includes("/ats/applicants/app-1"), "GET applicant");
  assert(appCall.headers["x-apideck-service-id"] === "greenhouse", "ATS service_id on applicant call");

  assert(empCall.method === "POST" && empCall.url.includes("/hris/employees"), "POST employee");
  assert(empCall.headers["x-apideck-service-id"] === "bamboohr", "HRIS service_id on employee call");
  assert(empCall.body?.first_name === "Ada", "employee.first_name");
  assert(empCall.body?.last_name === "Lovelace", "employee.last_name");
  assert(empCall.body?.middle_name === "Augusta", "employee.middle_name carried");
  assert(empCall.body?.employment_start_date === "2026-05-01", "start_date set");
  assert(empCall.body?.employment_status === "active", "default status active");
  assert(empCall.body?.title === "Senior Engineer", "title set");
  assert(empCall.body?.department_id === "dept-eng", "department_id set");
  assert(empCall.body?.department?.id === "dept-eng", "nested department.id also set");
  assert(empCall.body?.manager?.id === "mgr-7", "manager.id set");
  assert(Array.isArray(empCall.body?.emails) && empCall.body.emails[0]?.email === "ada@example.com", "emails carried");
  assert(Array.isArray(empCall.body?.phone_numbers), "phone_numbers carried");
  assert(Array.isArray(empCall.body?.addresses), "addresses carried");
}

// ---------------------------------------------------------------------------
// 3. Applicant with no name → validate-applicant error, no employee POST
// ---------------------------------------------------------------------------
console.log("Test: applicant missing first_name + last_name aborts");
{
  const stub = stubFetch({
    "/ats/applicants/app-blank": { data: { id: "app-blank" } },
  });

  const res = await exec.handler(
    {
      name: "apideck-onboard-employee",
      arguments: { applicant_id: "app-blank", employment_start_date: "2026-05-01" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "validate-applicant", "failingStep is validate-applicant");
  assert(stub.calls.length === 1, "no employee POST attempted");
}

// ---------------------------------------------------------------------------
// 4. Applicant lookup failure
// ---------------------------------------------------------------------------
console.log("Test: applicant lookup failure aborts before employee create");
{
  const stub = stubFetch({
    "/ats/applicants/app-missing": {
      __status: 404,
      status_code: 404,
      type_name: "EntityNotFoundError",
      message: "Applicant not found",
    },
  });

  const res = await exec.handler(
    {
      name: "apideck-onboard-employee",
      arguments: { applicant_id: "app-missing", employment_start_date: "2026-05-01" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  const payload = JSON.parse(res.content[0].text);
  assert(res.isError === true, "isError flagged");
  assert(payload.failingStep === "ats-applicants-get", "failingStep on applicant lookup");
  assert(stub.calls.length === 1, "no employee POST after lookup failure");
}

// ---------------------------------------------------------------------------
// 5. Employee create failure surfaces as failingStep
// ---------------------------------------------------------------------------
console.log("Test: HRIS create failure carries failingStep");
{
  const stub = stubFetch({
    "/ats/applicants/app-1": {
      data: { id: "app-1", first_name: "Bo", last_name: "Beep" },
    },
    "/hris/employees": {
      __status: 422,
      status_code: 422,
      type_name: "ValidationError",
      message: "department_id required for this connector",
    },
  });

  const res = await exec.handler(
    {
      name: "apideck-onboard-employee",
      arguments: { applicant_id: "app-1", employment_start_date: "2026-05-01" },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError === true, "isError flagged");
  const payload = JSON.parse(res.content[0].text);
  assert(payload.failingStep === "hris-employees-create", "failingStep on HRIS create");
  assert(
    typeof payload.error === "string" && payload.error.includes("department_id required"),
    "upstream error text bubbles up",
  );
}

// ---------------------------------------------------------------------------
// 6. Optional hired_stage_id → 3rd ATS call, success path
// ---------------------------------------------------------------------------
console.log("Test: hired_stage_id triggers 3rd ATS update call");
{
  const stub = stubFetch({
    "/ats/applicants/app-1": { data: { id: "app-1", first_name: "Ada", last_name: "L" } },
    "/hris/employees": { data: { id: "emp-1" } },
    "/ats/applicants/app-1\":": null, // pattern key trick — see route loop
  });
  // The PATCH update reuses the same /ats/applicants/app-1 path; stubFetch
  // matches on substring so the same data response is returned.
  const res = await exec.handler(
    {
      name: "apideck-onboard-employee",
      arguments: {
        applicant_id: "app-1",
        employment_start_date: "2026-05-01",
        hired_stage_id: "stage-hired",
      },
    },
    { signal: new AbortController().signal },
  );
  stub.restore();

  assert(res.isError !== true, "not an error");
  const payload = JSON.parse(res.content[0].text);
  assert(!payload.warnings, "no warnings on successful stage move");
  // Two GET applicant + one POST employee + one PATCH applicant = 3 calls
  // (applicant GET happens once, ATS update is the 3rd).
  const updateCall = stub.calls.find((c) => c.method === "PATCH" || (c.method === "POST" && c.url.endsWith("/app-1")));
  // Apideck's ATS update is PATCH on /ats/applicants/{id}
  const patchOrPost = stub.calls.filter((c) => c.url.includes("/ats/applicants/app-1") && c.method !== "GET");
  assert(patchOrPost.length === 1, `1 ATS write call after employee create (got ${patchOrPost.length})`);
  assert(patchOrPost[0].body?.stage_id === "stage-hired", "stage_id set in update body");
}

// ---------------------------------------------------------------------------
// 7. Stage move failure → warning only, employee result still returned
// ---------------------------------------------------------------------------
console.log("Test: stage update failure → soft warning, not isError");
{
  let appGetCount = 0;
  const stub = stubFetch({}); // build manually
  const orig = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (input, opts = {}) => {
    const url = input instanceof Request ? input.url : String(input);
    calls.push({ url, method: opts.method });
    if (url.includes("/ats/applicants/app-1")) {
      if (opts.method === "GET") {
        appGetCount++;
        return new Response(
          JSON.stringify({ data: { id: "app-1", first_name: "Ada", last_name: "L" } }),
          { status: 200, headers: { "content-type": "application/json" } },
        );
      }
      // PATCH update fails
      return new Response(
        JSON.stringify({ status_code: 500, message: "Greenhouse momentarily unavailable" }),
        { status: 500, headers: { "content-type": "application/json" } },
      );
    }
    if (url.includes("/hris/employees")) {
      return new Response(
        JSON.stringify({ data: { id: "emp-2" } }),
        { status: 200, headers: { "content-type": "application/json" } },
      );
    }
    return new Response("not stubbed", { status: 500 });
  };

  const res = await exec.handler(
    {
      name: "apideck-onboard-employee",
      arguments: {
        applicant_id: "app-1",
        employment_start_date: "2026-05-01",
        hired_stage_id: "stage-hired",
      },
    },
    { signal: new AbortController().signal },
  );
  globalThis.fetch = orig;
  stub.restore();

  assert(res.isError !== true, `not flagged as error (employee was created) — got isError=${res.isError}`);
  const payload = JSON.parse(res.content[0].text);
  assert(payload.employee_id === "emp-2", "employee_id present despite stage failure");
  assert(
    Array.isArray(payload.warnings) && payload.warnings[0]?.includes("stage update failed"),
    "warning describes the soft failure",
  );
}

// ---------------------------------------------------------------------------
// 8. McpError elicitation propagates through cross-API workflow
// ---------------------------------------------------------------------------
console.log("Test: McpError elicitation thrown from ATS lookup");
{
  const stub = stubFetch({
    "/ats/applicants/app-X": {
      __status: 401,
      message: "Connection is missing — please re-authorise the connection.",
      detail: { context: { connector: "greenhouse", unified_api: "ats" } },
    },
    "/vault/sessions": { data: { session_uri: "https://vault.apideck.com/session/onboard-jwt" } },
  });

  let thrown;
  try {
    await exec.handler(
      {
        name: "apideck-onboard-employee",
        arguments: { applicant_id: "app-X", employment_start_date: "2026-05-01" },
      },
      { signal: new AbortController().signal },
    );
  } catch (err) {
    thrown = err;
  }
  stub.restore();

  assert(thrown?.name === "McpError", `McpError thrown, got ${thrown?.name}`);
  const url = thrown?.data?.elicitations?.[0]?.url;
  assert(
    typeof url === "string" && url.includes("vault.apideck.com/session"),
    "consent URL preserved through cross-API workflow",
  );
}

console.log(
  `\n${failures === 0 ? "All onboard-employee tests passed" : `${failures} test(s) failed`}`,
);
process.exit(failures === 0 ? 0 : 1);
