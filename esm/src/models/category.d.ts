import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * The type of the category.
 */
export declare const CategoryType: {
    readonly Supplier: "supplier";
    readonly Expense: "expense";
    readonly Revenue: "revenue";
    readonly Customer: "customer";
};
/**
 * The type of the category.
 */
export type CategoryType = OpenEnum<typeof CategoryType>;
export declare const CategoryType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    expense: "expense";
    supplier: "supplier";
    customer: "customer";
    revenue: "revenue";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare const CategoryStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type CategoryStatus = OpenEnum<typeof CategoryStatus>;
export declare const CategoryStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Category = {
    id?: string | undefined;
    name?: string | undefined;
    display_id?: string | null | undefined;
    type?: CategoryType | undefined;
    status?: CategoryStatus | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Category$zodSchema: z.ZodType<Category>;
//# sourceMappingURL=category.d.ts.map