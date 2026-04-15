import * as z from "zod";
import { Currency } from "./currency.js";
/**
 * A balance sheet assets account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetAssetsAccount = {
    account_id?: string | undefined;
    code?: string | undefined;
    name?: string | undefined;
    value?: number | undefined;
    items?: any | undefined;
};
export declare const BalanceSheetAssetsAccount$zodSchema: z.ZodType<BalanceSheetAssetsAccount>;
/**
 * A balance sheet liabilities account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetLiabilitiesAccount = {
    account_id?: string | undefined;
    code?: string | undefined;
    name?: string | undefined;
    value?: number | undefined;
    items?: any | undefined;
};
export declare const BalanceSheetLiabilitiesAccount$zodSchema: z.ZodType<BalanceSheetLiabilitiesAccount>;
/**
 * A balance sheet equity account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetEquityAccount = {
    account_id?: string | undefined;
    code?: string | undefined;
    name?: string | undefined;
    value?: number | undefined;
    items?: any | undefined;
};
export declare const BalanceSheetEquityAccount$zodSchema: z.ZodType<BalanceSheetEquityAccount>;
/**
 * A balance sheet uncategorized items account represents the financial position of a company at a specific point in time.
 */
export type BalanceSheetUncategorizedItemsAccount = {
    account_id?: string | undefined;
    code?: string | undefined;
    name?: string | undefined;
    value?: number | undefined;
    items?: any | undefined;
};
export declare const BalanceSheetUncategorizedItemsAccount$zodSchema: z.ZodType<BalanceSheetUncategorizedItemsAccount>;
export type Report = {
    id?: string | undefined;
    report_name?: string | undefined;
    start_date?: string | undefined;
    end_date: string;
    currency?: Currency | null | undefined;
    assets: BalanceSheetAssetsAccount;
    liabilities: BalanceSheetLiabilitiesAccount;
    equity: BalanceSheetEquityAccount;
    net_assets?: number | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    uncategorized_items?: BalanceSheetUncategorizedItemsAccount | undefined;
};
export declare const Report$zodSchema: z.ZodType<Report>;
export type BalanceSheet = {
    reports: Array<Report>;
};
export declare const BalanceSheet$zodSchema: z.ZodType<BalanceSheet>;
//# sourceMappingURL=balancesheet.d.ts.map