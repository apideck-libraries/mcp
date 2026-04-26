/**
 * Month-end close snapshot.
 *
 * Fans out four read-only endpoints in parallel and returns a single,
 * aggregated view the LLM can reason over without having to orchestrate
 * four separate execute_tool calls:
 *
 *   accounting-aged-creditors-get
 *   accounting-aged-debtors-get
 *   accounting-balance-sheet-get
 *   accounting-profit-and-loss-get
 *
 * Fully read-only. Safe to call repeatedly. Used as the pattern
 * template for the rest of the Phase 3 workflow tools.
 */

import * as z from "zod";
import {
  extractServiceContext,
  pickData,
  runStep,
  type StepOutcome,
  workflowJsonResult,
  type WorkflowTool,
} from "./helpers.js";

const args = {
  report_as_of_date: z
    .string()
    .describe(
      "Cutoff date for aged reports + balance sheet (YYYY-MM-DD). Defaults to today.",
    )
    .optional(),
  "x-apideck-service-id": z
    .string()
    .describe(
      "Target accounting service when multiple are connected (e.g. \"xero\", \"quickbooks\").",
    )
    .optional(),
};

export const apideckMonthEndCloseCheck: WorkflowTool = {
  name: "apideck-month-end-close-check",
  description: [
    "One-shot month-end close snapshot.",
    "",
    "Fetches aged creditors, aged debtors, balance sheet, and profit-and-loss in parallel from the connected accounting service and returns them as a single object — saves 4 round-trips.",
    "",
    "Read-only; safe to call repeatedly.",
    "",
    "Use when you need a combined financial snapshot at a point in time. For individual reports, call `accounting-aged-creditors-get`, `accounting-aged-debtors-get`, `accounting-balance-sheet-get`, or `accounting-profit-and-loss-get` directly.",
    "",
    'Requires an active `accounting` connection on the consumer. If the consumer has multiple accounting services connected, pass `x-apideck-service-id` (e.g. "xero", "quickbooks") to target one. Consumer auth is resolved server-side — don\'t pass API keys in arguments.',
  ].join("\n"),
  scopes: ["read"],
  annotations: {
    title: "Month-end close snapshot",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  },
  args,
  async tool(client, a, ctx) {
    const reportAsOfDate = (a as Record<string, string | undefined>)["report_as_of_date"]
      ?? new Date().toISOString().slice(0, 10);
    const { serviceId, common } = extractServiceContext(a);

    const filterWithDate = {
      ...common,
      filter: { report_as_of_date: reportAsOfDate },
    };

    const balanceFilter = { ...common, filter: { end_date: reportAsOfDate } };
    const [agedCreditors, agedDebtors, balanceSheet, profitAndLoss] = await Promise.all([
      runStep(client, "accounting-aged-creditors-get", filterWithDate, ctx, pickData),
      runStep(client, "accounting-aged-debtors-get", filterWithDate, ctx, pickData),
      runStep(client, "accounting-balance-sheet-get", balanceFilter, ctx, pickData),
      runStep(client, "accounting-profit-and-loss-get", balanceFilter, ctx, pickData),
    ]);

    const named: Record<string, StepOutcome> = {
      aged_creditors: agedCreditors,
      aged_debtors: agedDebtors,
      balance_sheet: balanceSheet,
      profit_and_loss: profitAndLoss,
    };

    const warnings: string[] = [];
    const out: Record<string, unknown> = {
      report_as_of_date: reportAsOfDate,
      service_id: serviceId ?? null,
    };
    let okCount = 0;
    for (const [key, step] of Object.entries(named)) {
      if (step.ok) {
        out[key] = step.data;
        okCount++;
      } else if (step.unsupported) {
        out[key] = { unsupported: true, reason: step.reason };
        warnings.push(`${key}: unsupported${serviceId ? ` on ${serviceId}` : ""} (${step.reason})`);
      } else {
        out[key] = { error: step.error };
        warnings.push(`${key}: ${step.error}`);
      }
    }
    if (warnings.length) out["warnings"] = warnings;

    // Only flag the whole workflow as an error when nothing came back.
    return workflowJsonResult(out, okCount === 0);
  },
};
