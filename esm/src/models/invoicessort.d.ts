import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Invoices
 */
export declare const InvoicesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Invoices
 */
export type InvoicesSortBy = OpenEnum<typeof InvoicesSortBy>;
export declare const InvoicesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type InvoicesSort = {
    by?: InvoicesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const InvoicesSort$zodSchema: z.ZodType<InvoicesSort>;
//# sourceMappingURL=invoicessort.d.ts.map