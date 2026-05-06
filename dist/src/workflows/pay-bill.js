// SPDX-License-Identifier: MIT
// Copyright (c) 2026 Apideck
import { z } from 'zod';
import { extractServiceContext, pickData, runStep, workflowJsonResult, } from './_helpers.js';
const ALLOCATION_TYPE_BILL = 'bill';
const inputSchema = z.object({
    bill_id: z.string().min(1).describe('ID of the bill to pay (returned by `accounting-bills-list`).'),
    account_id: z.string().min(1).describe('ID of the account the payment is drawn from (typically a bank account from `accounting-ledger-accounts-list`).'),
    amount: z.number().positive().optional().describe("Amount to pay in the bill's currency. Defaults to the bill's outstanding total."),
    transaction_date: z.string().optional().describe('Payment date (YYYY-MM-DD). Defaults to today.'),
    payment_method: z.string().optional().describe('Payment method label. QuickBooks requires capitalized values: "Check", "CreditCard", "Cash". Other connectors accept lower-case "check" / "credit_card" / "ach" / "wire". When omitted, QuickBooks rejects the payment with a parse error — pass an explicit value for QB.'),
    reference: z.string().optional().describe('Memo / external reference shown on the payment record.'),
    'x-apideck-service-id': z.string().optional().describe('Target accounting service when the consumer has multiple connections (e.g. "xero", "quickbooks").'),
});
export const createPayBill = (tools) => ({
    name: 'apideck-pay-bill',
    title: 'Pay vendor bill',
    description: [
        'Pay a vendor bill in one shot.',
        '',
        'Looks up the bill, then creates a bill-payment allocated against it so the connected accounting service marks the bill (partially) paid. Replaces the usual `bills-get` → manually-construct-allocation → `bill-payments-create` dance.',
        '',
        '**Mutating, not idempotent.** Each call creates a new payment record on the connector. Calling twice with the same arguments produces two payments. Confirm the user intended to pay before invoking.',
        '',
        'Use when the user wants to settle a known vendor bill. For customer payments against invoices use `apideck-receive-customer-payment` instead.',
        '',
        "Requires an active `accounting` connection on the consumer. If the consumer has multiple accounting services, pass `x-apideck-service-id` (e.g. \"xero\", \"quickbooks\") to target one. Consumer auth is resolved server-side — don't pass API keys in arguments.",
    ].join('\n'),
    domain: 'workflows',
    scope: 'write',
    inputSchema,
    handler: async (args, extra) => {
        const billId = String(args.bill_id);
        const accountId = String(args.account_id);
        const explicitAmount = typeof args.amount === 'number' ? args.amount : undefined;
        const paymentMethod = typeof args.payment_method === 'string' ? args.payment_method : undefined;
        const reference = typeof args.reference === 'string' ? args.reference : undefined;
        const transactionDate = typeof args.transaction_date === 'string'
            ? args.transaction_date
            : new Date().toISOString().slice(0, 10);
        const { serviceId, common } = extractServiceContext(args);
        const billStep = await runStep(tools, 'accounting-bills-get', { ...common, id: billId }, extra, (body) => pickData(body));
        if (!billStep.ok) {
            return workflowJsonResult({
                bill_id: billId,
                error: billStep.unsupported ? billStep.reason : billStep.error,
                failingStep: 'accounting-bills-get',
                upstream: billStep.upstream,
            }, true);
        }
        const bill = billStep.data;
        const billTotal = Number(bill['balance'] ?? bill['total_amount'] ?? bill['total'] ?? 0);
        const currency = bill['currency'] ?? 'USD';
        const supplier = bill['supplier'];
        const amount = explicitAmount ?? billTotal;
        if (!Number.isFinite(amount) || amount <= 0) {
            return workflowJsonResult({
                bill_id: billId,
                error: `Bill has no positive total_amount (got ${bill['total_amount']}). Pass an explicit \`amount\` to override.`,
                failingStep: 'validate-amount',
            }, true);
        }
        const paymentBody = {
            total_amount: amount,
            currency,
            transaction_date: transactionDate,
            account: { id: accountId },
            allocations: [{ id: billId, type: ALLOCATION_TYPE_BILL, amount }],
            ...(supplier?.id ? { supplier: { id: supplier.id } } : {}),
            ...(paymentMethod ? { payment_method: paymentMethod } : {}),
            ...(reference ? { reference } : {}),
        };
        const paymentStep = await runStep(tools, 'accounting-bill-payments-create', { ...common, body: paymentBody }, extra, (body) => pickData(body));
        if (!paymentStep.ok) {
            return workflowJsonResult({
                bill_id: billId,
                amount,
                currency,
                error: paymentStep.unsupported ? paymentStep.reason : paymentStep.error,
                failingStep: 'accounting-bill-payments-create',
                upstream: paymentStep.upstream,
            }, true);
        }
        const payment = paymentStep.data;
        return workflowJsonResult({
            bill_id: billId,
            payment_id: payment['id'] ?? null,
            amount,
            currency,
            transaction_date: transactionDate,
            bill_total: billTotal,
            partial: Math.round(amount * 100) < Math.round(billTotal * 100),
            service_id: serviceId ?? null,
        });
    },
});
//# sourceMappingURL=pay-bill.js.map