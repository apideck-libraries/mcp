import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Ledger Accounts
 */
export declare const LedgerAccountsSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Ledger Accounts
 */
export type LedgerAccountsSortBy = OpenEnum<typeof LedgerAccountsSortBy>;
export declare const LedgerAccountsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type LedgerAccountsSort = {
    by?: LedgerAccountsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const LedgerAccountsSort$zodSchema: z.ZodType<LedgerAccountsSort>;
//# sourceMappingURL=ledgeraccountssort.d.ts.map