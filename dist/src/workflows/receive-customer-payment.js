// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { z } from 'zod';
import { extractServiceContext, pickData, runStep, workflowJsonResult, } from './_helpers.js';
const ALLOCATION_TYPE_INVOICE = 'invoice';
const inputSchema = z.object({
    invoice_id: z.string().min(1).describe('ID of the invoice to receive payment for (returned by `accounting-invoices-list`).'),
    account_id: z.string().min(1).describe('ID of the account the payment is deposited into (typically a bank account from `accounting-ledger-accounts-list`).'),
    amount: z.number().positive().optional().describe("Amount received in the invoice's currency. Defaults to the invoice's outstanding total."),
    transaction_date: z.string().optional().describe('Payment date (YYYY-MM-DD). Defaults to today.'),
    payment_method: z.string().optional().describe('Payment method label. QuickBooks requires capitalized values: "Check", "CreditCard", "Cash". Other connectors accept lower-case "check" / "credit_card" / "ach" / "wire". When omitted, QuickBooks rejects the payment with a parse error — pass an explicit value for QB.'),
    reference: z.string().optional().describe('Memo / external reference shown on the payment record.'),
    'x-apideck-service-id': z.string().optional().describe('Target accounting service when the consumer has multiple connections (e.g. "xero", "quickbooks").'),
});
export const createReceiveCustomerPayment = (tools) => ({
    name: 'apideck-receive-customer-payment',
    title: 'Receive customer payment',
    description: [
        'Receive a customer payment against an invoice in one shot.',
        '',
        'Looks up the invoice, then creates a payment allocated against it so the connected accounting service marks the invoice (partially) paid. Replaces the usual `invoices-get` → manually-construct-allocation → `payments-create` dance.',
        '',
        '**Mutating, not idempotent.** Each call creates a new payment record on the connector. Calling twice with the same arguments produces two payments. Confirm the user intended to receive the payment before invoking.',
        '',
        'Use when the user wants to record a customer payment against a known invoice. For vendor bill payments use `apideck-pay-bill` instead.',
        '',
        "Requires an active `accounting` connection on the consumer. If the consumer has multiple accounting services, pass `x-apideck-service-id` (e.g. \"xero\", \"quickbooks\") to target one. Consumer auth is resolved server-side — don't pass API keys in arguments.",
    ].join('\n'),
    domain: 'workflows',
    scope: 'write',
    inputSchema,
    handler: async (args, extra) => {
        const invoiceId = String(args.invoice_id);
        const accountId = String(args.account_id);
        const explicitAmount = typeof args.amount === 'number' ? args.amount : undefined;
        const paymentMethod = typeof args.payment_method === 'string' ? args.payment_method : undefined;
        const reference = typeof args.reference === 'string' ? args.reference : undefined;
        const transactionDate = typeof args.transaction_date === 'string'
            ? args.transaction_date
            : new Date().toISOString().slice(0, 10);
        const { serviceId, common } = extractServiceContext(args);
        const invoiceStep = await runStep(tools, 'accounting-invoices-get', { ...common, id: invoiceId }, extra, (body) => pickData(body));
        if (!invoiceStep.ok) {
            return workflowJsonResult({
                invoice_id: invoiceId,
                error: invoiceStep.unsupported ? invoiceStep.reason : invoiceStep.error,
                failingStep: 'accounting-invoices-get',
                upstream: invoiceStep.upstream,
            }, true);
        }
        const invoice = invoiceStep.data;
        const invoiceTotal = Number(invoice['balance'] ?? invoice['total_amount'] ?? invoice['total'] ?? 0);
        const currency = invoice['currency'] ?? 'USD';
        const customer = invoice['customer'];
        const amount = explicitAmount ?? invoiceTotal;
        if (!Number.isFinite(amount) || amount <= 0) {
            return workflowJsonResult({
                invoice_id: invoiceId,
                error: `Invoice has no positive total_amount (got ${invoice['total_amount']}). Pass an explicit \`amount\` to override.`,
                failingStep: 'validate-amount',
            }, true);
        }
        const paymentBody = {
            total_amount: amount,
            currency,
            transaction_date: transactionDate,
            account: { id: accountId },
            allocations: [{ id: invoiceId, type: ALLOCATION_TYPE_INVOICE, amount }],
            ...(customer?.id ? { customer: { id: customer.id } } : {}),
            ...(paymentMethod ? { payment_method: paymentMethod } : {}),
            ...(reference ? { reference } : {}),
        };
        const paymentStep = await runStep(tools, 'accounting-payments-create', { ...common, body: paymentBody }, extra, (body) => pickData(body));
        if (!paymentStep.ok) {
            return workflowJsonResult({
                invoice_id: invoiceId,
                amount,
                currency,
                error: paymentStep.unsupported ? paymentStep.reason : paymentStep.error,
                failingStep: 'accounting-payments-create',
                upstream: paymentStep.upstream,
            }, true);
        }
        const payment = paymentStep.data;
        return workflowJsonResult({
            invoice_id: invoiceId,
            payment_id: payment['id'] ?? null,
            amount,
            currency,
            transaction_date: transactionDate,
            invoice_total: invoiceTotal,
            partial: Math.round(amount * 100) < Math.round(invoiceTotal * 100),
            service_id: serviceId ?? null,
        });
    },
});
//# sourceMappingURL=receive-customer-payment.js.map