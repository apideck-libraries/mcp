import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Type of payment
 */
export declare const PaymentType: {
    readonly AccountsReceivable: "accounts_receivable";
    readonly AccountsPayable: "accounts_payable";
    readonly AccountsReceivableCredit: "accounts_receivable_credit";
    readonly AccountsPayableCredit: "accounts_payable_credit";
    readonly AccountsReceivableOverpayment: "accounts_receivable_overpayment";
    readonly AccountsPayableOverpayment: "accounts_payable_overpayment";
    readonly AccountsReceivablePrepayment: "accounts_receivable_prepayment";
    readonly AccountsPayablePrepayment: "accounts_payable_prepayment";
};
/**
 * Type of payment
 */
export type PaymentType = OpenEnum<typeof PaymentType>;
export declare const PaymentType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    accounts_payable_credit: "accounts_payable_credit";
    accounts_payable_overpayment: "accounts_payable_overpayment";
    accounts_payable_prepayment: "accounts_payable_prepayment";
    accounts_payable: "accounts_payable";
    accounts_receivable: "accounts_receivable";
    accounts_receivable_credit: "accounts_receivable_credit";
    accounts_receivable_overpayment: "accounts_receivable_overpayment";
    accounts_receivable_prepayment: "accounts_receivable_prepayment";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=paymenttype.d.ts.map