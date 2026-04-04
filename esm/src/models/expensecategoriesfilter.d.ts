import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const ExpenseCategoriesFilterStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
export type ExpenseCategoriesFilterStatus = OpenEnum<typeof ExpenseCategoriesFilterStatus>;
export declare const ExpenseCategoriesFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ExpenseCategoriesFilter = {
    updated_since?: string | undefined;
    status?: ExpenseCategoriesFilterStatus | undefined;
};
export declare const ExpenseCategoriesFilter$zodSchema: z.ZodType<ExpenseCategoriesFilter>;
//# sourceMappingURL=expensecategoriesfilter.d.ts.map