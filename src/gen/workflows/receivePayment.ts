/**
 * `apideck-receive-customer-payment` — fetches an invoice, then writes
 * an AR payment that allocates back to it so the connector marks the
 * invoice (partially) settled in one MCP call. AR mirror of
 * `apideck-pay-bill`.
 */

import * as z from "zod";
import {
  extractServiceContext,
  pickData,
  runStep,
  workflowJsonResult,
  type WorkflowTool,
} from "./helpers.js";

// `allocations[].type = "invoice"` is the load-bearing field that tells
// the connector which invoice this payment settles.
const ALLOCATION_TYPE_INVOICE = "invoice";

const args = {
  invoice_id: z
    .string()
    .min(1)
    .describe("ID of the invoice being paid (returned by `accounting-invoices-list`)."),
  account_id: z
    .string()
    .min(1)
    .describe(
      "ID of the deposit account that received the payment (typically a bank or undeposited-funds account from `accounting-ledger-accounts-list`).",
    ),
  amount: z
    .number()
    .positive()
    .optional()
    .describe(
      "Amount received in the invoice's currency. Defaults to the invoice's outstanding balance. Pass a smaller value for a partial payment.",
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

type ReceivePaymentArgs = {
  invoice_id: string;
  account_id: string;
  amount?: number;
  transaction_date?: string;
  payment_method?: string;
  reference?: string;
};

export const apideckReceiveCustomerPayment: WorkflowTool = {
  name: "apideck-receive-customer-payment",
  description: [
    "Record a customer payment against an invoice in one shot.",
    "",
    "Looks up the invoice, then creates an AR payment allocated against it so the connected accounting service marks the invoice (partially) paid. AR mirror of `apideck-pay-bill` (which is for vendor bills / AP). Saves the agent from confusing AR customer-payments with AP bill-payments — different unified endpoints, different connector semantics.",
    "",
    "**Mutating, not idempotent.** Each call creates a new payment record on the connector. Calling twice with the same arguments produces two payments. Confirm the user intended to record the payment before invoking.",
    "",
    "Use when the user wants to record a customer payment against a known invoice. For paying a vendor bill use `apideck-pay-bill` instead. For raw payment creation (unallocated transfers, prepayments) call `accounting-payments-create` directly.",
    "",
    "Requires an active `accounting` connection on the consumer. If the consumer has multiple accounting services connected, pass `x-apideck-service-id` (e.g. \"xero\", \"quickbooks\") to target one. Consumer auth is resolved server-side — don't pass API keys in arguments.",
  ].join("\n"),
  scopes: ["write"],
  annotations: {
    title: "Receive customer payment",
    readOnlyHint: false,
    destructiveHint: false,
    idempotentHint: false,
    openWorldHint: false,
  },
  args,
  async tool(client, a, ctx) {
    const flat = a as ReceivePaymentArgs;
    const { serviceId, common } = extractServiceContext(a);
    const transactionDate = flat.transaction_date
      ?? new Date().toISOString().slice(0, 10);

    const invoiceStep = await runStep<Record<string, unknown>>(
      client,
      "accounting-invoices-get",
      { ...common, id: flat.invoice_id },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!invoiceStep.ok) {
      // Distinguish "invoice doesn't exist / connector down" from a generic
      // upstream error so the LLM doesn't blindly retry the workflow.
      return workflowJsonResult({
        invoice_id: flat.invoice_id,
        error: invoiceStep.unsupported ? invoiceStep.reason : invoiceStep.error,
        failingStep: "accounting-invoices-get",
        upstream: invoiceStep.upstream,
      }, true);
    }

    const invoice = invoiceStep.data;
    // Connectors disagree on the total/balance field name. QuickBooks
    // returns `total`; Apideck's unified spec prefers `total_amount`.
    // Prefer `balance` (outstanding) over the gross total so a partial
    // payment doesn't accidentally over-pay an already-partial invoice.
    const invoiceTotal = Number(
      invoice["balance"] ?? invoice["total_amount"] ?? invoice["total"] ?? 0,
    );
    const currency = (invoice["currency"] as string | undefined) ?? "USD";
    const customer = invoice["customer"] as { id?: string } | undefined;
    const amount = flat.amount ?? invoiceTotal;

    if (!Number.isFinite(amount) || amount <= 0) {
      return workflowJsonResult({
        invoice_id: flat.invoice_id,
        error: `Invoice has no positive outstanding balance (got ${invoice["balance"] ?? invoice["total_amount"] ?? invoice["total"]}). Pass an explicit \`amount\` to override.`,
        failingStep: "validate-amount",
      }, true);
    }

    const paymentBody: Record<string, unknown> = {
      total_amount: amount,
      currency,
      transaction_date: transactionDate,
      account: { id: flat.account_id },
      allocations: [{ id: flat.invoice_id, type: ALLOCATION_TYPE_INVOICE, amount }],
      ...(customer?.id ? { customer: { id: customer.id } } : {}),
      ...(flat.payment_method ? { payment_method: flat.payment_method } : {}),
      ...(flat.reference ? { reference: flat.reference } : {}),
    };

    // AR endpoint: customer payments. For vendor bills use
    // accounting-bill-payments-create (apideck-pay-bill).
    const paymentStep = await runStep<Record<string, unknown>>(
      client,
      "accounting-payments-create",
      { ...common, body: paymentBody },
      ctx,
      (body) => pickData(body) as Record<string, unknown>,
    );
    if (!paymentStep.ok) {
      return workflowJsonResult({
        invoice_id: flat.invoice_id,
        amount,
        currency,
        error: paymentStep.unsupported ? paymentStep.reason : paymentStep.error,
        failingStep: "accounting-payments-create",
        upstream: paymentStep.upstream,
      }, true);
    }

    const payment = paymentStep.data;
    return workflowJsonResult({
      invoice_id: flat.invoice_id,
      payment_id: payment["id"] ?? null,
      amount,
      currency,
      transaction_date: transactionDate,
      invoice_total: invoiceTotal,
      // Compare in cents to avoid float drift on decimal currencies.
      partial: Math.round(amount * 100) < Math.round(invoiceTotal * 100),
      service_id: serviceId ?? null,
    });
  },
};
