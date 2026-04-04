import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Customers
 */
export declare const CustomersSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Customers
 */
export type CustomersSortBy = OpenEnum<typeof CustomersSortBy>;
export declare const CustomersSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CustomersSort = {
    by?: CustomersSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const CustomersSort$zodSchema: z.ZodType<CustomersSort>;
//# sourceMappingURL=customerssort.d.ts.map