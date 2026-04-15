import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Filter by account classification.
 */
export declare const LedgerAccountsFilterClassification: {
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
 * Filter by account classification.
 */
export type LedgerAccountsFilterClassification = OpenEnum<typeof LedgerAccountsFilterClassification>;
export declare const LedgerAccountsFilterClassification$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
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
export type LedgerAccountsFilter = {
    name?: string | undefined;
    updated_since?: string | undefined;
    classification?: LedgerAccountsFilterClassification | undefined;
};
export declare const LedgerAccountsFilter$zodSchema: z.ZodType<LedgerAccountsFilter>;
//# sourceMappingURL=ledgeraccountsfilter.d.ts.map