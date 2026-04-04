import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { CreditOrDebit } from "./creditordebit.js";
/**
 * The current status of the bank feed statement.
 */
export declare const StatementStatus: {
    readonly Pending: "pending";
    readonly Rejected: "rejected";
    readonly Success: "success";
};
/**
 * The current status of the bank feed statement.
 */
export type StatementStatus = OpenEnum<typeof StatementStatus>;
export declare const StatementStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    success: "success";
    pending: "pending";
    rejected: "rejected";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Type of transaction.
 */
export declare const BankFeedStatementTransactionType: {
    readonly Credit: "credit";
    readonly Debit: "debit";
    readonly Deposit: "deposit";
    readonly Transfer: "transfer";
    readonly Payment: "payment";
    readonly Other: "other";
};
/**
 * Type of transaction.
 */
export type BankFeedStatementTransactionType = OpenEnum<typeof BankFeedStatementTransactionType>;
export declare const BankFeedStatementTransactionType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    payment: "payment";
    other: "other";
    credit: "credit";
    debit: "debit";
    deposit: "deposit";
    transfer: "transfer";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Transaction = {
    posted_date: string;
    description?: string | undefined;
    amount: number;
    credit_or_debit: CreditOrDebit;
    source_transaction_id: string;
    counterparty?: string | undefined;
    reference?: string | undefined;
    transaction_type?: BankFeedStatementTransactionType | undefined;
};
export declare const Transaction$zodSchema: z.ZodType<Transaction>;
export type BankFeedStatement = {
    id: string;
    bank_feed_account_id?: string | undefined;
    status?: StatementStatus | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    start_balance?: number | undefined;
    start_balance_credit_or_debit?: CreditOrDebit | undefined;
    end_balance?: number | undefined;
    end_balance_credit_or_debit?: CreditOrDebit | undefined;
    transactions?: Array<Transaction> | undefined;
    created_at?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    updated_by?: string | null | undefined;
};
export declare const BankFeedStatement$zodSchema: z.ZodType<BankFeedStatement>;
export type BankFeedStatementInput = {
    bank_feed_account_id?: string | undefined;
    status?: StatementStatus | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    start_balance?: number | undefined;
    start_balance_credit_or_debit?: CreditOrDebit | undefined;
    end_balance?: number | undefined;
    end_balance_credit_or_debit?: CreditOrDebit | undefined;
    transactions?: Array<Transaction> | undefined;
};
export declare const BankFeedStatementInput$zodSchema: z.ZodType<BankFeedStatementInput>;
//# sourceMappingURL=bankfeedstatement.d.ts.map