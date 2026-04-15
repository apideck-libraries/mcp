import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Bills
 */
export declare const BillsSortBy: {
    readonly UpdatedAt: "updated_at";
    readonly CreatedAt: "created_at";
};
/**
 * The field on which to sort the Bills
 */
export type BillsSortBy = OpenEnum<typeof BillsSortBy>;
export declare const BillsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BillsSort = {
    by?: BillsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const BillsSort$zodSchema: z.ZodType<BillsSort>;
//# sourceMappingURL=billssort.d.ts.map