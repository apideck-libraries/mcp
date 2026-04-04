import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Type of refund. `refund_receipt` for itemized refunds with product/service lines and payment (QBO RefundReceipt, NetSuite CashRefund). `cash_refund` for cash-out refunds with GL distribution or allocations (Sage Intacct). `credit_note_refund` for refunds applied against a credit note (Zoho Books).
 */
export declare const RefundType: {
    readonly RefundReceipt: "refund_receipt";
    readonly CashRefund: "cash_refund";
    readonly CreditNoteRefund: "credit_note_refund";
};
/**
 * Type of refund. `refund_receipt` for itemized refunds with product/service lines and payment (QBO RefundReceipt, NetSuite CashRefund). `cash_refund` for cash-out refunds with GL distribution or allocations (Sage Intacct). `credit_note_refund` for refunds applied against a credit note (Zoho Books).
 */
export type RefundType = OpenEnum<typeof RefundType>;
export declare const RefundType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    refund_receipt: "refund_receipt";
    cash_refund: "cash_refund";
    credit_note_refund: "credit_note_refund";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=refundtype.d.ts.map