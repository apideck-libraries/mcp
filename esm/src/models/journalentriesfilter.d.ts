import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const JournalEntriesFilterStatus: {
    readonly Draft: "draft";
    readonly PendingApproval: "pending_approval";
    readonly Approved: "approved";
    readonly Posted: "posted";
    readonly Voided: "voided";
    readonly Rejected: "rejected";
    readonly Deleted: "deleted";
    readonly Other: "other";
};
export type JournalEntriesFilterStatus = OpenEnum<typeof JournalEntriesFilterStatus>;
export declare const JournalEntriesFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    rejected: "rejected";
    draft: "draft";
    voided: "voided";
    deleted: "deleted";
    posted: "posted";
    approved: "approved";
    pending_approval: "pending_approval";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type JournalEntriesFilter = {
    updated_since?: string | undefined;
    status?: JournalEntriesFilterStatus | undefined;
};
export declare const JournalEntriesFilter$zodSchema: z.ZodType<JournalEntriesFilter>;
//# sourceMappingURL=journalentriesfilter.d.ts.map