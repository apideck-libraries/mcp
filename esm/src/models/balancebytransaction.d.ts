import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Type of the transaction.
 */
export declare const BalanceByTransactionTransactionType: {
    readonly Invoice: "invoice";
    readonly CreditNote: "credit_note";
    readonly Bill: "bill";
    readonly Payment: "payment";
    readonly BillPayment: "bill_payment";
};
/**
 * Type of the transaction.
 */
export type BalanceByTransactionTransactionType = OpenEnum<typeof BalanceByTransactionTransactionType>;
export declare const BalanceByTransactionTransactionType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    invoice: "invoice";
    credit_note: "credit_note";
    bill: "bill";
    payment: "payment";
    bill_payment: "bill_payment";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BalanceByTransaction = {
    transaction_id?: string | undefined;
    transaction_date?: string | undefined;
    transaction_type?: BalanceByTransactionTransactionType | undefined;
    due_date?: string | undefined;
    original_amount?: number | undefined;
    outstanding_balance?: number | undefined;
    transaction_number?: string | undefined;
};
export declare const BalanceByTransaction$zodSchema: z.ZodType<BalanceByTransaction>;
//# sourceMappingURL=balancebytransaction.d.ts.map