import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const PaymentsFilterType: {
    readonly AccountsReceivable: "accounts_receivable";
    readonly AccountsPayable: "accounts_payable";
    readonly AccountsReceivableCredit: "accounts_receivable_credit";
    readonly AccountsPayableCredit: "accounts_payable_credit";
    readonly AccountsReceivableOverpayment: "accounts_receivable_overpayment";
    readonly AccountsPayableOverpayment: "accounts_payable_overpayment";
    readonly AccountsReceivablePrepayment: "accounts_receivable_prepayment";
    readonly AccountsPayablePrepayment: "accounts_payable_prepayment";
};
export type PaymentsFilterType = OpenEnum<typeof PaymentsFilterType>;
export declare const PaymentsFilterType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    accounts_payable_credit: "accounts_payable_credit";
    accounts_payable_overpayment: "accounts_payable_overpayment";
    accounts_payable_prepayment: "accounts_payable_prepayment";
    accounts_payable: "accounts_payable";
    accounts_receivable: "accounts_receivable";
    accounts_receivable_credit: "accounts_receivable_credit";
    accounts_receivable_overpayment: "accounts_receivable_overpayment";
    accounts_receivable_prepayment: "accounts_receivable_prepayment";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Filter by payment status
 */
export declare const PaymentsFilterPaymentStatus: {
    readonly Draft: "draft";
    readonly Authorised: "authorised";
    readonly Rejected: "rejected";
    readonly Paid: "paid";
    readonly Voided: "voided";
    readonly Deleted: "deleted";
};
/**
 * Filter by payment status
 */
export type PaymentsFilterPaymentStatus = OpenEnum<typeof PaymentsFilterPaymentStatus>;
export declare const PaymentsFilterPaymentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    rejected: "rejected";
    draft: "draft";
    authorised: "authorised";
    paid: "paid";
    voided: "voided";
    deleted: "deleted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PaymentsFilter = {
    updated_since?: string | undefined;
    invoice_id?: string | undefined;
    bill_id?: string | undefined;
    supplier_id?: string | undefined;
    customer_id?: string | undefined;
    type?: PaymentsFilterType | undefined;
    status?: PaymentsFilterPaymentStatus | undefined;
};
export declare const PaymentsFilter$zodSchema: z.ZodType<PaymentsFilter>;
//# sourceMappingURL=paymentsfilter.d.ts.map