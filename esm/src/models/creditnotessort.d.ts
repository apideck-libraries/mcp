import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Customers
 */
export declare const CreditNotesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Customers
 */
export type CreditNotesSortBy = OpenEnum<typeof CreditNotesSortBy>;
export declare const CreditNotesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CreditNotesSort = {
    by?: CreditNotesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const CreditNotesSort$zodSchema: z.ZodType<CreditNotesSort>;
//# sourceMappingURL=creditnotessort.d.ts.map