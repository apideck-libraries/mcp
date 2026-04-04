import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { BankAccount } from "./bankaccount.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The classification of account.
 */
export declare const LedgerAccountClassification: {
    readonly Asset: "asset";
    readonly Equity: "equity";
    readonly Expense: "expense";
    readonly Liability: "liability";
    readonly Revenue: "revenue";
    readonly Income: "income";
    readonly OtherIncome: "other_income";
    readonly OtherExpense: "other_expense";
    readonly CostsOfSales: "costs_of_sales";
    readonly Other: "other";
};
/**
 * The classification of account.
 */
export type LedgerAccountClassification = OpenEnum<typeof LedgerAccountClassification>;
export declare const LedgerAccountClassification$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    expense: "expense";
    equity: "equity";
    other: "other";
    revenue: "revenue";
    asset: "asset";
    liability: "liability";
    income: "income";
    other_income: "other_income";
    other_expense: "other_expense";
    costs_of_sales: "costs_of_sales";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The type of account.
 */
export declare const LedgerAccountType: {
    readonly AccountsPayable: "accounts_payable";
    readonly AccountsReceivable: "accounts_receivable";
    readonly Balancesheet: "balancesheet";
    readonly Bank: "bank";
    readonly CostsOfSales: "costs_of_sales";
    readonly CreditCard: "credit_card";
    readonly CurrentAsset: "current_asset";
    readonly CurrentLiability: "current_liability";
    readonly Equity: "equity";
    readonly Expense: "expense";
    readonly FixedAsset: "fixed_asset";
    readonly NonCurrentAsset: "non_current_asset";
    readonly NonCurrentLiability: "non_current_liability";
    readonly OtherAsset: "other_asset";
    readonly OtherExpense: "other_expense";
    readonly OtherIncome: "other_income";
    readonly OtherLiability: "other_liability";
    readonly Revenue: "revenue";
    readonly Sales: "sales";
    readonly Other: "other";
};
/**
 * The type of account.
 */
export type LedgerAccountType = OpenEnum<typeof LedgerAccountType>;
export declare const LedgerAccountType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    expense: "expense";
    equity: "equity";
    credit_card: "credit_card";
    other: "other";
    bank: "bank";
    accounts_payable: "accounts_payable";
    accounts_receivable: "accounts_receivable";
    revenue: "revenue";
    sales: "sales";
    other_income: "other_income";
    other_expense: "other_expense";
    costs_of_sales: "costs_of_sales";
    balancesheet: "balancesheet";
    current_asset: "current_asset";
    current_liability: "current_liability";
    fixed_asset: "fixed_asset";
    non_current_asset: "non_current_asset";
    non_current_liability: "non_current_liability";
    other_asset: "other_asset";
    other_liability: "other_liability";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The status of the account.
 */
export declare const AccountStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
};
/**
 * The status of the account.
 */
export type AccountStatus = OpenEnum<typeof AccountStatus>;
export declare const AccountStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    archived: "archived";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type LedgerAccountCategory = {
    id?: string | undefined;
    name?: string | undefined;
};
export declare const LedgerAccountCategory$zodSchema: z.ZodType<LedgerAccountCategory>;
export type ParentAccount = {
    id?: string | undefined;
    name?: string | undefined;
    display_id?: string | undefined;
};
export declare const ParentAccount$zodSchema: z.ZodType<ParentAccount>;
export type SubAccount = {
    id?: string | undefined;
    account_sub_name?: string | undefined;
};
export declare const SubAccount$zodSchema: z.ZodType<SubAccount>;
export type LedgerAccountSubsidiary = {
    id?: string | undefined;
};
export declare const LedgerAccountSubsidiary$zodSchema: z.ZodType<LedgerAccountSubsidiary>;
export type LedgerAccount = {
    id?: string | undefined;
    display_id?: string | undefined;
    nominal_code?: string | null | undefined;
    code?: string | null | undefined;
    classification?: LedgerAccountClassification | null | undefined;
    type?: LedgerAccountType | undefined;
    sub_type?: string | null | undefined;
    name?: string | null | undefined;
    fully_qualified_name?: string | null | undefined;
    description?: string | null | undefined;
    opening_balance?: number | null | undefined;
    current_balance?: number | null | undefined;
    currency?: Currency | null | undefined;
    tax_type?: string | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
    level?: number | null | undefined;
    active?: boolean | null | undefined;
    status?: AccountStatus | null | undefined;
    header?: boolean | null | undefined;
    bank_account?: BankAccount | undefined;
    categories?: Array<LedgerAccountCategory> | undefined;
    parent_account?: ParentAccount | undefined;
    sub_account?: boolean | null | undefined;
    sub_accounts?: Array<SubAccount> | undefined;
    last_reconciliation_date?: string | null | undefined;
    subsidiaries?: Array<LedgerAccountSubsidiary> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const LedgerAccount$zodSchema: z.ZodType<LedgerAccount>;
export type LedgerAccountInput = {
    display_id?: string | undefined;
    nominal_code?: string | null | undefined;
    code?: string | null | undefined;
    classification?: LedgerAccountClassification | null | undefined;
    type?: LedgerAccountType | undefined;
    sub_type?: string | null | undefined;
    name?: string | null | undefined;
    fully_qualified_name?: string | null | undefined;
    description?: string | null | undefined;
    opening_balance?: number | null | undefined;
    current_balance?: number | null | undefined;
    currency?: Currency | null | undefined;
    tax_type?: string | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
    level?: number | null | undefined;
    active?: boolean | null | undefined;
    status?: AccountStatus | null | undefined;
    header?: boolean | null | undefined;
    bank_account?: BankAccount | undefined;
    parent_account?: ParentAccount | undefined;
    sub_account?: boolean | null | undefined;
    last_reconciliation_date?: string | null | undefined;
    subsidiaries?: Array<LedgerAccountSubsidiary> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const LedgerAccountInput$zodSchema: z.ZodType<LedgerAccountInput>;
//# sourceMappingURL=ledgeraccount.d.ts.map