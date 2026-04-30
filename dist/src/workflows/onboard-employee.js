// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { z } from 'zod';
import { pickData, runStep, workflowJsonResult } from './_helpers.js';
const inputSchema = z.object({
    applicant_id: z.string().min(1).describe('ID of the hired applicant in the ATS (returned by `ats-applicants-list`).'),
    employment_start_date: z.string().describe('First day of employment (YYYY-MM-DD). Required by most HRIS connectors.'),
    department_id: z.string().optional().describe('Department to assign the new employee to (returned by `hris-departments-list`). Some connectors require this; others derive it from the job.'),
    title: z.string().optional().describe("Job title. Defaults to the applicant's `headline` or `title` field if present."),
    manager_id: z.string().optional().describe("Reporting manager's HRIS employee id."),
    employment_status: z.enum(['active', 'inactive', 'pending', 'leave', 'terminated']).optional().describe('HRIS employment status. Defaults to `active` for fresh hires.'),
    hired_stage_id: z.string().optional().describe("If set, the workflow updates the ATS applicant's `stage_id` to this after the employee is created (closes the loop in the ATS)."),
    'x-apideck-ats-service-id': z.string().optional().describe('Target ATS service when the consumer has multiple ATS connections (e.g. "greenhouse", "lever").'),
    'x-apideck-hris-service-id': z.string().optional().describe('Target HRIS service when the consumer has multiple HRIS connections (e.g. "bamboohr", "workday").'),
});
export const createOnboardEmployee = (tools) => ({
    name: 'apideck-onboard-employee',
    title: 'Onboard employee from applicant',
    description: [
        'Convert a hired ATS applicant into an HRIS employee in one shot.',
        '',
        'Looks up the applicant in the ATS, maps their name/contact fields onto an HRIS employee record, and creates the employee with caller-supplied employment data (start date, department, title). Optionally moves the ATS applicant to a "hired" stage to close the loop.',
        '',
        '**Mutating, not idempotent.** Each call creates a new employee record. Calling twice with the same applicant produces two HRIS employees. Confirm the user intended to onboard before invoking.',
        '',
        'Use when the user has decided to hire a known applicant. For employee creation from scratch (no ATS lineage) call `hris-employees-create` directly.',
        '',
        "Crosses two unified APIs: requires active `ats` AND `hris` connections on the consumer. Pass `x-apideck-ats-service-id` and/or `x-apideck-hris-service-id` if multiple services are connected. Consumer auth is resolved server-side — don't pass API keys in arguments.",
    ].join('\n'),
    domain: 'workflows',
    scope: 'write',
    inputSchema,
    handler: async (args, extra) => {
        const applicantId = String(args.applicant_id);
        const startDate = String(args.employment_start_date);
        // Cross-API workflow: extractServiceContext is single-tenant by design,
        // so each unified API gets its own service-id key + common header object.
        const rawAts = args['x-apideck-ats-service-id'];
        const atsServiceId = typeof rawAts === 'string' ? rawAts : undefined;
        const rawHris = args['x-apideck-hris-service-id'];
        const hrisServiceId = typeof rawHris === 'string' ? rawHris : undefined;
        const atsCommon = atsServiceId
            ? { 'x-apideck-service-id': atsServiceId }
            : {};
        const hrisCommon = hrisServiceId
            ? { 'x-apideck-service-id': hrisServiceId }
            : {};
        const applicantStep = await runStep(tools, 'ats-applicants-get', { ...atsCommon, id: applicantId }, extra, (body) => pickData(body));
        if (!applicantStep.ok) {
            return workflowJsonResult({
                applicant_id: applicantId,
                error: applicantStep.unsupported ? applicantStep.reason : applicantStep.error,
                failingStep: 'ats-applicants-get',
                upstream: applicantStep.upstream,
            }, true);
        }
        const applicant = applicantStep.data;
        const firstName = String(applicant['first_name'] ?? '').trim();
        const lastName = String(applicant['last_name'] ?? '').trim();
        if (!firstName && !lastName) {
            return workflowJsonResult({
                applicant_id: applicantId,
                error: 'Applicant has no first_name or last_name — connector returned an unusable record.',
                failingStep: 'validate-applicant',
            }, true);
        }
        const titleArg = typeof args.title === 'string' ? args.title : undefined;
        const title = titleArg ??
            applicant['headline'] ??
            applicant['title'];
        const departmentId = typeof args.department_id === 'string' ? args.department_id : undefined;
        const managerId = typeof args.manager_id === 'string' ? args.manager_id : undefined;
        const employmentStatus = typeof args.employment_status === 'string' ? args.employment_status : 'active';
        const hiredStageId = typeof args.hired_stage_id === 'string' ? args.hired_stage_id : undefined;
        const employeeBody = {
            first_name: firstName,
            last_name: lastName,
            employment_start_date: startDate,
            employment_status: employmentStatus,
            ...(title ? { title, jobtitle: title } : {}),
            ...(applicant['middle_name'] ? { middle_name: applicant['middle_name'] } : {}),
            ...(applicant['emails'] ? { emails: applicant['emails'] } : {}),
            ...(applicant['phone_numbers'] ? { phone_numbers: applicant['phone_numbers'] } : {}),
            ...(applicant['addresses'] ? { addresses: applicant['addresses'] } : {}),
            ...(applicant['birthday'] ? { birthday: applicant['birthday'] } : {}),
            ...(applicant['gender'] ? { gender: applicant['gender'] } : {}),
            // PII: social_security_number is forwarded only when the ATS connector
            // already returned it. Apideck never persists this value — the workflow
            // is a transit relay between two consumer-authorised connectors. The
            // workflow's error envelope intentionally omits employeeBody so an HRIS
            // create failure cannot echo this field back to the agent.
            ...(applicant['social_security_number']
                ? { social_security_number: applicant['social_security_number'] }
                : {}),
            ...(departmentId
                ? { department_id: departmentId, department: { id: departmentId } }
                : {}),
            ...(managerId ? { manager: { id: managerId } } : {}),
        };
        const employeeStep = await runStep(tools, 'hris-employees-create', { ...hrisCommon, body: employeeBody }, extra, (body) => pickData(body));
        if (!employeeStep.ok) {
            return workflowJsonResult({
                applicant_id: applicantId,
                error: employeeStep.unsupported ? employeeStep.reason : employeeStep.error,
                failingStep: 'hris-employees-create',
                upstream: employeeStep.upstream,
            }, true);
        }
        const employee = employeeStep.data;
        const employeeId = employee['id'] ?? null;
        let stageWarning;
        if (hiredStageId) {
            const stageStep = await runStep(tools, 'ats-applicants-update', { ...atsCommon, id: applicantId, body: { stage_id: hiredStageId } }, extra, (body) => pickData(body));
            if (!stageStep.ok) {
                stageWarning = `Employee created but ATS stage update failed: ${stageStep.unsupported ? stageStep.reason : stageStep.error}. Move the applicant to the Hired stage manually.`;
            }
        }
        return workflowJsonResult({
            applicant_id: applicantId,
            employee_id: employeeId,
            first_name: firstName,
            last_name: lastName,
            employment_start_date: startDate,
            title: title ?? null,
            department_id: departmentId ?? null,
            ats_service_id: atsServiceId ?? null,
            hris_service_id: hrisServiceId ?? null,
            ...(stageWarning ? { warnings: [stageWarning] } : {}),
        });
    },
});
//# sourceMappingURL=onboard-employee.js.map