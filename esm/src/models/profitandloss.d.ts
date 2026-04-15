import * as z from "zod";
import { Currency } from "./currency.js";
import { ProfitAndLossIndicator } from "./profitandlossindicator.js";
import { ProfitAndLossType } from "./profitandlosstype.js";
/**
 * The operating income accounts
 */
export type Income = {
    id?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    type?: ProfitAndLossType | null | undefined;
    total: number | null;
    records?: any | undefined;
};
export declare const Income$zodSchema: z.ZodType<Income>;
/**
 * The cost of goods sold accounts
 */
export type CostOfGoodsSold = {
    id?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    type?: ProfitAndLossType | null | undefined;
    total?: number | null | undefined;
    records?: any | undefined;
};
export declare const CostOfGoodsSold$zodSchema: z.ZodType<CostOfGoodsSold>;
/**
 * The operating expenses accounts
 */
export type Expenses = {
    id?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    type?: ProfitAndLossType | null | undefined;
    total: number | null;
    records?: any | undefined;
};
export declare const Expenses$zodSchema: z.ZodType<Expenses>;
/**
 * The other income accounts
 */
export type OtherIncome = {
    id?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    type?: ProfitAndLossType | null | undefined;
    total?: number | null | undefined;
    records?: any | undefined;
};
export declare const OtherIncome$zodSchema: z.ZodType<OtherIncome>;
/**
 * The other expenses accounts
 */
export type OtherExpenses = {
    id?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    type?: ProfitAndLossType | null | undefined;
    total?: number | null | undefined;
    records?: any | undefined;
};
export declare const OtherExpenses$zodSchema: z.ZodType<OtherExpenses>;
/**
 * The accounts not categorized in the other sections
 */
export type UncategorizedAccounts = {
    id?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    type?: ProfitAndLossType | null | undefined;
    total: number | null;
    records?: any | undefined;
};
export declare const UncategorizedAccounts$zodSchema: z.ZodType<UncategorizedAccounts>;
export type ProfitAndLoss = {
    id?: string | undefined;
    report_name: string;
    start_date?: string | undefined;
    end_date?: string | undefined;
    currency?: Currency | null | undefined;
    income: Income;
    cost_of_goods_sold?: CostOfGoodsSold | undefined;
    expenses: Expenses;
    other_income?: OtherIncome | undefined;
    other_expenses?: OtherExpenses | undefined;
    uncategorized_accounts?: UncategorizedAccounts | undefined;
    gross_profit?: ProfitAndLossIndicator | undefined;
    net_operating_income?: ProfitAndLossIndicator | undefined;
    net_income?: ProfitAndLossIndicator | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    customer?: string | undefined;
};
export declare const ProfitAndLoss$zodSchema: z.ZodType<ProfitAndLoss>;
//# sourceMappingURL=profitandloss.d.ts.map