import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
/**
 * The type of bank account
 */
export declare const AccountingBankAccountAccountType: {
    readonly Checking: "checking";
    readonly Savings: "savings";
    readonly CreditCard: "credit_card";
    readonly MoneyMarket: "money_market";
    readonly LineOfCredit: "line_of_credit";
    readonly Other: "other";
    readonly Cash: "cash";
};
/**
 * The type of bank account
 */
export type AccountingBankAccountAccountType = OpenEnum<typeof AccountingBankAccountAccountType>;
export declare const AccountingBankAccountAccountType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    cash: "cash";
    checking: "checking";
    savings: "savings";
    credit_card: "credit_card";
    money_market: "money_market";
    line_of_credit: "line_of_credit";
    other: "other";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The status of the bank account
 */
export declare const AccountingBankAccountStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Closed: "closed";
};
/**
 * The status of the bank account
 */
export type AccountingBankAccountStatus = OpenEnum<typeof AccountingBankAccountStatus>;
export declare const AccountingBankAccountStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    closed: "closed";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type AccountingBankAccount = {
    id: string;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    account_number?: string | null | undefined;
    account_type?: AccountingBankAccountAccountType | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    bank_name?: string | null | undefined;
    currency?: Currency | null | undefined;
    balance?: number | null | undefined;
    available_balance?: number | null | undefined;
    overdraft_limit?: number | null | undefined;
    routing_number?: string | null | undefined;
    iban?: string | null | undefined;
    bic?: string | null | undefined;
    bsb_number?: string | null | undefined;
    branch_identifier?: string | null | undefined;
    bank_code?: string | null | undefined;
    country?: string | null | undefined;
    status?: AccountingBankAccountStatus | null | undefined;
    description?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_by?: string | null | undefined;
};
export declare const AccountingBankAccount$zodSchema: z.ZodType<AccountingBankAccount>;
export type AccountingBankAccountInput = {
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    account_number?: string | null | undefined;
    account_type?: AccountingBankAccountAccountType | undefined;
    ledger_account?: LinkedLedgerAccount | null | undefined;
    bank_name?: string | null | undefined;
    currency?: Currency | null | undefined;
    balance?: number | null | undefined;
    available_balance?: number | null | undefined;
    overdraft_limit?: number | null | undefined;
    routing_number?: string | null | undefined;
    iban?: string | null | undefined;
    bic?: string | null | undefined;
    bsb_number?: string | null | undefined;
    branch_identifier?: string | null | undefined;
    bank_code?: string | null | undefined;
    country?: string | null | undefined;
    status?: AccountingBankAccountStatus | null | undefined;
    description?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
};
export declare const AccountingBankAccountInput$zodSchema: z.ZodType<AccountingBankAccountInput>;
//# sourceMappingURL=accountingbankaccount.d.ts.map