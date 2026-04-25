/**
 * Pay a bill — first mutating Phase 3 workflow.
 *
 * Two-step composite over the generated accounting tools:
 *   1. accounting-bills-get        → fetch supplier, currency, total
 *   2. accounting-payments-create  → write payment with allocation
 *      back to the bill so the connector marks it (partially) paid
 *
 * The model would otherwise have to (a) call `bills-get`, (b) parse a
 * deeply nested supplier/currency/total, (c) construct a payment body
 * with an `allocations[].type = "bill"` link, and (d) decide whether
 * this is a full or partial payment. Folding it into one tool removes
 * the four most failure-prone steps for any AP automation flow.
 */

import * as z from "zod";
import {
  pickData,
  runStep,
  workflowJsonResult,
  type WorkflowTool,
} from "./helpers.js";

const args = {
  bill_id: z
    .string()
    .min(1)
    .describe("ID of the bill to pay (returned by `accounting-bills-list`)."),
  account_id: z
    .string()
    .min(1)
    .describe(
      "ID of the account the payment is drawn from (typically a bank account from `accounting-accounts-list`).",
    ),
  amount: z
    .number()
    .positive()
    .optional()
    .describe(
      "Amount to pay in the bill's currency. Defaults to the bill's outstanding total. Pass a smaller value for a partial payment.",
    ),
  transaction_date: z
    .string()
    .optional()
    .describe(
      "Payment date (YYYY-MM-DD). Defaults to today. Connectors sometimes reject future dates.",
    ),
  payment_method: z
    .string()
    .optional()
    .describe(
      "Payment method label, e.g. \"wire\", \"ach\", \"credit_card\", \"check\". Free-form — the connector decides what it accepts.",
    ),
  reference: z
    .string()
    .optional()
    .describe("Memo / external reference shown on the payment record."),
  "x-apideck-service-id": z
    .string()
    .optional()
    .describe(
      "Target accounting service when the consumer has multiple connections (e.g. \"xero\", \"quickbooks\").",
    ),
};

export const apideckPayBill: WorkflowTool = {
  name: "apideck-pay-bill",
  description: [
    "Pay a vendor bill in one shot.",
    "",
    "Looks up the bill, then creates a payment allocated against it so the connected accounting service marks the bill (partially) paid. Replaces the usual `bills-get` → manually-construct-allocation → `payments-create` dance.",
    "",
    "**Mutating, not idempotent.** Each call creates a new payment record on the connector. Calling twice with the same arguments produces two payments. Confirm the user intended to pay before invoking.",
    "",
    "Use when the user wants to settle a known bill. For raw payment creation (e.g. customer payments, unallocated transfers) call `accounting-payments-create` directly.",
    "",
    "Requires an active `accounting` connection on the consumer. If the consumer has multiple accounting services connected, pass `x-apideck-service-id` (e.g. \"xero\", \"quickbooks\") to target one. Consumer auth is resolved server-side — don't pass API keys in arguments.",
  ].join("\n"),
  scopes: ["write"],
  annotations: {
    title: "Pay vendor bill",
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: false,
  },
  args,
  async tool(client, a, ctx) {
    const flat = a as Record<string, unknown>;
    const billId = String(flat["bill_id"] ?? "");
    const accountId = String(flat["account_id"] ?? "");
    const explicitAmount = flat["amount"] as number | undefined;
    const transactionDate = (flat["transaction_date"] as string | undefined)
      ?? new Date().toISOString().slice(0, 10);
    const paymentMethod = flat["payment_method"] as string | undefined;
    const reference = flat["reference"] as string | undefined;
    const serviceId = flat["x-apideck-service-id"] as string | undefined;

    const common: Record<string, unknown> = {};
    if (serviceId) common["x-apideck-service-id"] = serviceId;

    // 1. Fetch the bill so we can echo currency / supplier / total.
    const billStep = await runStep<Record<string, unknown>>(
      client,
      "accounting-bills-get",
      { ...common, id: billId },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!billStep.ok) {
      // Distinguish "bill doesn't exist" from "connector can't read bills"
      // so the LLM doesn't silently retry the workflow on every error.
      return workflowJsonResult({
        bill_id: billId,
        error: billStep.unsupported ? billStep.reason : billStep.error,
        failingStep: "accounting-bills-get",
        upstream: billStep.upstream,
      }, true);
    }

    const bill = billStep.data;
    const billTotal = Number(bill["total_amount"] ?? 0);
    const currency = (bill["currency"] as string | undefined) ?? "USD";
    const supplier = bill["supplier"] as { id?: string } | undefined;
    const amount = explicitAmount ?? billTotal;

    if (!Number.isFinite(amount) || amount <= 0) {
      return workflowJsonResult({
        bill_id: billId,
        error: `Bill has no positive total_amount (got ${bill["total_amount"]}). Pass an explicit \`amount\` to override.`,
        failingStep: "validate-amount",
      }, true);
    }

    // 2. Create the payment, allocated against the bill so the connector
    //    can match it. `allocations[].type = "bill"` is the magic field.
    const paymentBody: Record<string, unknown> = {
      total_amount: amount,
      currency,
      transaction_date: transactionDate,
      account: { id: accountId },
      allocations: [{ id: billId, type: "bill", amount }],
    };
    if (supplier?.id) paymentBody["supplier"] = { id: supplier.id };
    if (paymentMethod) paymentBody["payment_method"] = paymentMethod;
    if (reference) paymentBody["reference"] = reference;

    const paymentStep = await runStep<Record<string, unknown>>(
      client,
      "accounting-payments-create",
      { ...common, body: paymentBody },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!paymentStep.ok) {
      return workflowJsonResult({
        bill_id: billId,
        amount,
        currency,
        error: paymentStep.unsupported ? paymentStep.reason : paymentStep.error,
        failingStep: "accounting-payments-create",
        upstream: paymentStep.upstream,
      }, true);
    }

    const payment = paymentStep.data;
    const partial = amount + 0.001 < billTotal; // tiny epsilon for FP

    return workflowJsonResult({
      bill_id: billId,
      payment_id: payment["id"] ?? null,
      amount,
      currency,
      transaction_date: transactionDate,
      bill_total: billTotal,
      partial,
      service_id: serviceId ?? null,
      payment,
    });
  },
};
