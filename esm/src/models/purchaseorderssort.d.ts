import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Purchase Orders
 */
export declare const PurchaseOrdersSortBy: {
    readonly UpdatedAt: "updated_at";
    readonly CreatedAt: "created_at";
};
/**
 * The field on which to sort the Purchase Orders
 */
export type PurchaseOrdersSortBy = OpenEnum<typeof PurchaseOrdersSortBy>;
export declare const PurchaseOrdersSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PurchaseOrdersSort = {
    by?: PurchaseOrdersSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const PurchaseOrdersSort$zodSchema: z.ZodType<PurchaseOrdersSort>;
//# sourceMappingURL=purchaseorderssort.d.ts.map