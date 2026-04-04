import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Invoice Items
 */
export declare const InvoiceItemsSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Invoice Items
 */
export type InvoiceItemsSortBy = OpenEnum<typeof InvoiceItemsSortBy>;
export declare const InvoiceItemsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type InvoiceItemsSort = {
    by?: InvoiceItemsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const InvoiceItemsSort$zodSchema: z.ZodType<InvoiceItemsSort>;
//# sourceMappingURL=invoiceitemssort.d.ts.map