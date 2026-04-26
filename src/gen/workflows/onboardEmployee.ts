/**
 * `apideck-onboard-employee` — converts a hired ATS applicant into an
 * HRIS employee in one MCP call. Crosses two unified APIs (ATS + HRIS),
 * which means the consumer needs both connections active.
 *
 *   ats-applicants-get   → pull name, emails, phone, addresses
 *   hris-employees-create → create the employee record with the mapped
 *                           fields plus caller-supplied employment data
 *   ats-applicants-update → (optional) move the applicant to a "hired"
 *                           stage so the ATS reflects the conversion
 */

import * as z from "zod";
import {
  extractServiceContext,
  pickData,
  runStep,
  workflowJsonResult,
  type WorkflowTool,
} from "./helpers.js";

const args = {
  applicant_id: z
    .string()
    .min(1)
    .describe("ID of the hired applicant in the ATS (returned by `ats-applicants-list`)."),
  employment_start_date: z
    .string()
    .describe("First day of employment (YYYY-MM-DD). Required by most HRIS connectors."),
  department_id: z
    .string()
    .optional()
    .describe(
      "Department to assign the new employee to (returned by `hris-departments-list`). Some connectors require this; others derive it from the job.",
    ),
  title: z
    .string()
    .optional()
    .describe("Job title. Defaults to the applicant's `headline` or `title` field if present."),
  manager_id: z
    .string()
    .optional()
    .describe("Reporting manager's HRIS employee id."),
  employment_status: z
    .enum(["active", "inactive", "pending", "leave", "terminated"])
    .optional()
    .describe("HRIS employment status. Defaults to `active` for fresh hires."),
  hired_stage_id: z
    .string()
    .optional()
    .describe(
      "If set, the workflow updates the ATS applicant's `stage_id` to this after the employee is created (closes the loop in the ATS). Skip if your ATS pipeline doesn't have a Hired stage or you mark hires manually.",
    ),
  "x-apideck-ats-service-id": z
    .string()
    .optional()
    .describe(
      "Target ATS service when the consumer has multiple ATS connections (e.g. \"greenhouse\", \"lever\").",
    ),
  "x-apideck-hris-service-id": z
    .string()
    .optional()
    .describe(
      "Target HRIS service when the consumer has multiple HRIS connections (e.g. \"bamboohr\", \"workday\").",
    ),
};

type OnboardArgs = {
  applicant_id: string;
  employment_start_date: string;
  department_id?: string;
  title?: string;
  manager_id?: string;
  employment_status?: "active" | "inactive" | "pending" | "leave" | "terminated";
  hired_stage_id?: string;
};

export const apideckOnboardEmployee: WorkflowTool = {
  name: "apideck-onboard-employee",
  description: [
    "Convert a hired ATS applicant into an HRIS employee in one shot.",
    "",
    "Looks up the applicant in the ATS, maps their name/contact fields onto an HRIS employee record, and creates the employee with caller-supplied employment data (start date, department, title). Optionally moves the ATS applicant to a \"hired\" stage to close the loop. Replaces the usual `ats-applicants-get` → manually-map-fields → `hris-employees-create` → `ats-applicants-update` chain.",
    "",
    "**Mutating, not idempotent.** Each call creates a new employee record. Calling twice with the same applicant produces two HRIS employees. Confirm the user intended to onboard before invoking.",
    "",
    "Use when the user has decided to hire a known applicant. For employee creation from scratch (no ATS lineage) call `hris-employees-create` directly.",
    "",
    "Crosses two unified APIs: requires active `ats` AND `hris` connections on the consumer. If either has multiple services connected, pass `x-apideck-ats-service-id` and/or `x-apideck-hris-service-id` to target one. Consumer auth is resolved server-side — don't pass API keys in arguments.",
  ].join("\n"),
  scopes: ["write"],
  annotations: {
    title: "Onboard employee from applicant",
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: false,
  },
  args,
  async tool(client, a, ctx) {
    const flat = a as OnboardArgs;
    const flatRecord = a as Record<string, unknown>;
    const atsServiceId = flatRecord["x-apideck-ats-service-id"] as string | undefined;
    const hrisServiceId = flatRecord["x-apideck-hris-service-id"] as string | undefined;
    // Standalone helper bypassed: this workflow needs two service IDs
    // (ATS + HRIS), one for each upstream call. extractServiceContext is
    // single-tenant by design.
    void extractServiceContext;
    const atsCommon: Record<string, unknown> = atsServiceId
      ? { "x-apideck-service-id": atsServiceId }
      : {};
    const hrisCommon: Record<string, unknown> = hrisServiceId
      ? { "x-apideck-service-id": hrisServiceId }
      : {};

    const applicantStep = await runStep<Record<string, unknown>>(
      client,
      "ats-applicants-get",
      { ...atsCommon, id: flat.applicant_id },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!applicantStep.ok) {
      return workflowJsonResult({
        applicant_id: flat.applicant_id,
        error: applicantStep.unsupported ? applicantStep.reason : applicantStep.error,
        failingStep: "ats-applicants-get",
        upstream: applicantStep.upstream,
      }, true);
    }

    const applicant = applicantStep.data;
    const firstName = String(applicant["first_name"] ?? "").trim();
    const lastName = String(applicant["last_name"] ?? "").trim();
    if (!firstName && !lastName) {
      return workflowJsonResult({
        applicant_id: flat.applicant_id,
        error: "Applicant has no first_name or last_name — connector returned an unusable record.",
        failingStep: "validate-applicant",
      }, true);
    }

    const title = flat.title
      ?? (applicant["headline"] as string | undefined)
      ?? (applicant["title"] as string | undefined);

    const employeeBody: Record<string, unknown> = {
      first_name: firstName,
      last_name: lastName,
      employment_start_date: flat.employment_start_date,
      employment_status: flat.employment_status ?? "active",
      ...(title ? { title, jobtitle: title } : {}),
      ...(applicant["middle_name"] ? { middle_name: applicant["middle_name"] } : {}),
      ...(applicant["emails"] ? { emails: applicant["emails"] } : {}),
      ...(applicant["phone_numbers"] ? { phone_numbers: applicant["phone_numbers"] } : {}),
      ...(applicant["addresses"] ? { addresses: applicant["addresses"] } : {}),
      ...(applicant["birthday"] ? { birthday: applicant["birthday"] } : {}),
      ...(applicant["gender"] ? { gender: applicant["gender"] } : {}),
      ...(applicant["social_security_number"]
        ? { social_security_number: applicant["social_security_number"] }
        : {}),
      ...(flat.department_id
        ? { department_id: flat.department_id, department: { id: flat.department_id } }
        : {}),
      ...(flat.manager_id ? { manager: { id: flat.manager_id } } : {}),
    };

    const employeeStep = await runStep<Record<string, unknown>>(
      client,
      "hris-employees-create",
      { ...hrisCommon, body: employeeBody },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!employeeStep.ok) {
      return workflowJsonResult({
        applicant_id: flat.applicant_id,
        error: employeeStep.unsupported ? employeeStep.reason : employeeStep.error,
        failingStep: "hris-employees-create",
        upstream: employeeStep.upstream,
      }, true);
    }
    const employee = employeeStep.data;
    const employeeId = (employee["id"] as string | undefined) ?? null;

    // Optional ATS stage move. We treat its failure as a soft warning —
    // the employee is already created, so refusing the whole result
    // would leave the workspace in a worse state than a stale ATS row.
    let stageWarning: string | undefined;
    if (flat.hired_stage_id) {
      const stageStep = await runStep<Record<string, unknown>>(
        client,
        "ats-applicants-update",
        {
          ...atsCommon,
          id: flat.applicant_id,
          body: { stage_id: flat.hired_stage_id },
        },
        ctx,
        (body) => pickData(body) as Record<string, unknown>,
      );
      if (!stageStep.ok) {
        stageWarning = `Employee created but ATS stage update failed: ${
          stageStep.unsupported ? stageStep.reason : stageStep.error
        }. Move the applicant to the Hired stage manually.`;
      }
    }

    return workflowJsonResult({
      applicant_id: flat.applicant_id,
      employee_id: employeeId,
      first_name: firstName,
      last_name: lastName,
      employment_start_date: flat.employment_start_date,
      title: title ?? null,
      department_id: flat.department_id ?? null,
      ats_service_id: atsServiceId ?? null,
      hris_service_id: hrisServiceId ?? null,
      ...(stageWarning ? { warnings: [stageWarning] } : {}),
    });
  },
};
