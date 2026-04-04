import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Opportunities
 */
export declare const OpportunitiesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
    readonly Title: "title";
    readonly WinProbability: "win_probability";
    readonly MonetaryAmount: "monetary_amount";
    readonly Status: "status";
};
/**
 * The field on which to sort the Opportunities
 */
export type OpportunitiesSortBy = OpenEnum<typeof OpportunitiesSortBy>;
export declare const OpportunitiesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    title: "title";
    status: "status";
    updated_at: "updated_at";
    created_at: "created_at";
    monetary_amount: "monetary_amount";
    win_probability: "win_probability";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type OpportunitiesSort = {
    by?: OpportunitiesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const OpportunitiesSort$zodSchema: z.ZodType<OpportunitiesSort>;
//# sourceMappingURL=opportunitiessort.d.ts.map