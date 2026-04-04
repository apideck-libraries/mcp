import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of account being referenced. Use `ledger_account` for GL accounts from the chart of accounts, or `bank_account` for bank account entities. When not specified, the connector will use its default behavior.
 */
export declare const LinkedFinancialAccountAccountType: {
    readonly LedgerAccount: "ledger_account";
    readonly BankAccount: "bank_account";
    readonly Employee: "employee";
};
/**
 * The type of account being referenced. Use `ledger_account` for GL accounts from the chart of accounts, or `bank_account` for bank account entities. When not specified, the connector will use its default behavior.
 */
export type LinkedFinancialAccountAccountType = OpenEnum<typeof LinkedFinancialAccountAccountType>;
export declare const LinkedFinancialAccountAccountType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ledger_account: "ledger_account";
    bank_account: "bank_account";
    employee: "employee";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * A flexible account reference that can represent a ledger account (GL account), a bank account, or an employee payable account, depending on the connector's requirements.
 */
export type LinkedFinancialAccount = {
    id?: string | undefined;
    type?: LinkedFinancialAccountAccountType | null | undefined;
    code?: string | undefined;
    display_id?: string | null | undefined;
    account_number?: string | null | undefined;
    name?: string | undefined;
    downstream_id?: string | null | undefined;
};
export declare const LinkedFinancialAccount$zodSchema: z.ZodType<LinkedFinancialAccount>;
/**
 * A flexible account reference that can represent a ledger account (GL account), a bank account, or an employee payable account, depending on the connector's requirements.
 */
export type LinkedFinancialAccountInput = {
    id?: string | undefined;
    type?: LinkedFinancialAccountAccountType | null | undefined;
    code?: string | undefined;
    display_id?: string | null | undefined;
    account_number?: string | null | undefined;
};
export declare const LinkedFinancialAccountInput$zodSchema: z.ZodType<LinkedFinancialAccountInput>;
//# sourceMappingURL=linkedfinancialaccount.d.ts.map