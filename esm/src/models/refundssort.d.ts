import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Refunds
 */
export declare const RefundsSortBy: {
    readonly UpdatedAt: "updated_at";
    readonly CreatedAt: "created_at";
};
/**
 * The field on which to sort the Refunds
 */
export type RefundsSortBy = OpenEnum<typeof RefundsSortBy>;
export declare const RefundsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type RefundsSort = {
    by?: RefundsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const RefundsSort$zodSchema: z.ZodType<RefundsSort>;
//# sourceMappingURL=refundssort.d.ts.map