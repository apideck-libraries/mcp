import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field to sort by
 */
export declare const BankAccountsSortSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field to sort by
 */
export type BankAccountsSortSortBy = OpenEnum<typeof BankAccountsSortSortBy>;
export declare const BankAccountsSortSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BankAccountsSort = {
    by?: BankAccountsSortSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const BankAccountsSort$zodSchema: z.ZodType<BankAccountsSort>;
//# sourceMappingURL=bankaccountssort.d.ts.map