import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Suppliers
 */
export declare const SuppliersSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Suppliers
 */
export type SuppliersSortBy = OpenEnum<typeof SuppliersSortBy>;
export declare const SuppliersSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type SuppliersSort = {
    by?: SuppliersSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const SuppliersSort$zodSchema: z.ZodType<SuppliersSort>;
//# sourceMappingURL=supplierssort.d.ts.map