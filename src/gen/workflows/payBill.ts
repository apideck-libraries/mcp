/**
 * `apideck-pay-bill` — fetches a bill, then writes a payment that
 * allocates back to it so the connector marks the bill (partially)
 * paid in one MCP call.
 */

import * as z from "zod";
import {
  extractServiceContext,
  pickData,
  runStep,
  workflowJsonResult,
  type WorkflowTool,
} from "./helpers.js";

// `allocations[].type = "bill"` is the load-bearing field that tells
// the connector which bill this payment settles. Named so callers
// don't grep for stringly magic.
const ALLOCATION_TYPE_BILL = "bill";

const args = {
  bill_id: z
    .string()
    .min(1)
    .describe("ID of the bill to pay (returned by `accounting-bills-list`)."),
  account_id: z
    .string()
    .min(1)
    .describe(
      "ID of the account the payment is drawn from (typically a bank account from `accounting-ledger-accounts-list` filtered to `type=bank`).",
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
      "Payment method label. QuickBooks requires capitalized values: \"Check\", \"CreditCard\", \"Cash\". Other connectors accept lower-case \"check\" / \"credit_card\" / \"ach\" / \"wire\". When omitted, QuickBooks rejects the payment with a parse error — pass an explicit value for QB.",
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

type PayBillArgs = {
  bill_id: string;
  account_id: string;
  amount?: number;
  transaction_date?: string;
  payment_method?: string;
  reference?: string;
};

export const apideckPayBill: WorkflowTool = {
  name: "apideck-pay-bill",
  description: [
    "Pay a vendor bill in one shot.",
    "",
    "Looks up the bill, then creates a bill-payment allocated against it so the connected accounting service marks the bill (partially) paid. Replaces the usual `bills-get` → manually-construct-allocation → `bill-payments-create` dance, and saves the agent from confusing AP bill-payments with AR customer payments (different endpoints, different connector semantics).",
    "",
    "**Mutating, not idempotent.** Each call creates a new payment record on the connector. Calling twice with the same arguments produces two payments. Confirm the user intended to pay before invoking.",
    "",
    "Use when the user wants to settle a known vendor bill. For customer payments against invoices use `accounting-payments-create` instead (different unified endpoint).",
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
    const flat = a as PayBillArgs;
    const { serviceId, common } = extractServiceContext(a);
    const transactionDate = flat.transaction_date
      ?? new Date().toISOString().slice(0, 10);

    const billStep = await runStep<Record<string, unknown>>(
      client,
      "accounting-bills-get",
      { ...common, id: flat.bill_id },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!billStep.ok) {
      // Distinguish "bill doesn't exist / connector down" from a generic
      // upstream error so the LLM doesn't blindly retry the workflow.
      return workflowJsonResult({
        bill_id: flat.bill_id,
        error: billStep.unsupported ? billStep.reason : billStep.error,
        failingStep: "accounting-bills-get",
        upstream: billStep.upstream,
      }, true);
    }

    const bill = billStep.data;
    // Connectors disagree on the total field name. QuickBooks returns
    // `total`; Apideck's unified spec prefers `total_amount`. Read both,
    // and prefer `balance` (outstanding) over `total` (gross) so partial
    // pays don't accidentally double-pay.
    const billTotal = Number(
      bill["balance"] ?? bill["total_amount"] ?? bill["total"] ?? 0,
    );
    const currency = (bill["currency"] as string | undefined) ?? "USD";
    const supplier = bill["supplier"] as { id?: string } | undefined;
    const amount = flat.amount ?? billTotal;

    if (!Number.isFinite(amount) || amount <= 0) {
      return workflowJsonResult({
        bill_id: flat.bill_id,
        error: `Bill has no positive total_amount (got ${bill["total_amount"]}). Pass an explicit \`amount\` to override.`,
        failingStep: "validate-amount",
      }, true);
    }

    const paymentBody: Record<string, unknown> = {
      total_amount: amount,
      currency,
      transaction_date: transactionDate,
      account: { id: flat.account_id },
      allocations: [{ id: flat.bill_id, type: ALLOCATION_TYPE_BILL, amount }],
      ...(supplier?.id ? { supplier: { id: supplier.id } } : {}),
      ...(flat.payment_method ? { payment_method: flat.payment_method } : {}),
      ...(flat.reference ? { reference: flat.reference } : {}),
    };

    // Apideck's unified API splits AR payments (`accounting-payments-*`)
    // from AP bill payments (`accounting-bill-payments-*`). Calling the
    // wrong one routes through the wrong connector endpoint — QuickBooks
    // rejects an AR Payment with `CustomerRef missing` when there's
    // really a vendor bill on the other end.
    const paymentStep = await runStep<Record<string, unknown>>(
      client,
      "accounting-bill-payments-create",
      { ...common, body: paymentBody },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!paymentStep.ok) {
      return workflowJsonResult({
        bill_id: flat.bill_id,
        amount,
        currency,
        error: paymentStep.unsupported ? paymentStep.reason : paymentStep.error,
        failingStep: "accounting-bill-payments-create",
        upstream: paymentStep.upstream,
      }, true);
    }

    const payment = paymentStep.data;
    return workflowJsonResult({
      bill_id: flat.bill_id,
      payment_id: payment["id"] ?? null,
      amount,
      currency,
      transaction_date: transactionDate,
      bill_total: billTotal,
      // Compare in cents to avoid float drift on decimal currencies.
      partial: Math.round(amount * 100) < Math.round(billTotal * 100),
      service_id: serviceId ?? null,
    });
  },
};
