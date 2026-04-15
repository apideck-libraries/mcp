import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Journal Entries.
 */
export declare const JournalEntriesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Journal Entries.
 */
export type JournalEntriesSortBy = OpenEnum<typeof JournalEntriesSortBy>;
export declare const JournalEntriesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type JournalEntriesSort = {
    by?: JournalEntriesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const JournalEntriesSort$zodSchema: z.ZodType<JournalEntriesSort>;
//# sourceMappingURL=journalentriessort.d.ts.map