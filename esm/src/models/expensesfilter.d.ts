import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const ExpensesFilterStatus: {
    readonly Draft: "draft";
    readonly Posted: "posted";
    readonly Voided: "voided";
};
export type ExpensesFilterStatus = OpenEnum<typeof ExpensesFilterStatus>;
export declare const ExpensesFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    draft: "draft";
    voided: "voided";
    posted: "posted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export declare const ExpensesFilterType: {
    readonly Expense: "expense";
    readonly Refund: "refund";
};
export type ExpensesFilterType = OpenEnum<typeof ExpensesFilterType>;
export declare const ExpensesFilterType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    expense: "expense";
    refund: "refund";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ExpensesFilter = {
    updated_since?: string | undefined;
    status?: ExpensesFilterStatus | undefined;
    type?: ExpensesFilterType | undefined;
};
export declare const ExpensesFilter$zodSchema: z.ZodType<ExpensesFilter>;
//# sourceMappingURL=expensesfilter.d.ts.map