// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
/**
 * Month-end-close composite workflow (`apideck-month-end-close-check`).
 *
 * Behavior parity with the old-repo `gen-workflows.test.mjs` contract:
 * fan out 4 accounting endpoints in parallel, aggregate `data` fields,
 * collect partial failures into a `warnings` array, and mark the response
 * `isError` only when all 4 steps fail.
 */
import { z } from 'zod';
import { extractServiceContext, runStep, workflowJsonResult, } from './_helpers.js';
const STEPS = [
    { toolName: 'accounting-aged-creditors-one', payloadKey: 'aged_creditors' },
    { toolName: 'accounting-aged-debtors-one', payloadKey: 'aged_debtors' },
    { toolName: 'accounting-balance-sheet-one', payloadKey: 'balance_sheet' },
    { toolName: 'accounting-profit-and-loss-one', payloadKey: 'profit_and_loss' },
];
const inputSchema = z.object({
    report_as_of_date: z.string().optional(),
    'x-apideck-service-id': z.string().optional(),
});
/**
 * Build the `apideck-month-end-close-check` tool definition. The factory
 * receives the full endpoint tool array (typically `tools` from `tools.ts`)
 * so tests can inject stubs without module-level mocking.
 */
export const createMonthEndCloseCheck = (tools) => ({
    name: 'apideck-month-end-close-check',
    title: 'Month-End Close Check',
    description: 'Run aged-creditors, aged-debtors, balance-sheet, and profit-and-loss in parallel and return an aggregated month-end snapshot.',
    domain: 'workflows',
    scope: 'read',
    inputSchema,
    handler: async (args, extra) => {
        const reportAsOfDate = typeof args.report_as_of_date === 'string'
            ? args.report_as_of_date
            : new Date().toISOString().slice(0, 10);
        const { serviceId } = extractServiceContext(args);
        const outcomes = await Promise.all(STEPS.map((step) => runStep(tools, step.toolName, args, extra)));
        const payload = {
            report_as_of_date: reportAsOfDate,
        };
        if (serviceId !== undefined)
            payload.service_id = serviceId;
        const warnings = [];
        let failures = 0;
        outcomes.forEach((outcome, idx) => {
            const step = STEPS[idx];
            if (outcome.ok) {
                payload[step.payloadKey] = outcome.data;
                return;
            }
            failures += 1;
            if (outcome.unsupported) {
                payload[step.payloadKey] = {
                    unsupported: true,
                    reason: outcome.reason,
                };
                warnings.push(`${step.payloadKey}: unsupported on ${serviceId ?? 'unknown'}`);
            }
            else {
                payload[step.payloadKey] = { error: outcome.error };
                warnings.push(`${step.payloadKey}: ${outcome.error}`);
            }
        });
        if (warnings.length > 0)
            payload.warnings = warnings;
        return failures === STEPS.length
            ? workflowJsonResult(payload, true)
            : workflowJsonResult(payload);
    },
});
//# sourceMappingURL=month-end-close.js.map