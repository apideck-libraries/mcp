import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of the category.
 */
export declare const CategoriesFilterType: {
    readonly Supplier: "supplier";
    readonly Expense: "expense";
    readonly Revenue: "revenue";
    readonly Customer: "customer";
};
/**
 * The type of the category.
 */
export type CategoriesFilterType = OpenEnum<typeof CategoriesFilterType>;
export declare const CategoriesFilterType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    expense: "expense";
    supplier: "supplier";
    customer: "customer";
    revenue: "revenue";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CategoriesFilter = {
    type?: CategoriesFilterType | undefined;
};
export declare const CategoriesFilter$zodSchema: z.ZodType<CategoriesFilter>;
//# sourceMappingURL=categoriesfilter.d.ts.map