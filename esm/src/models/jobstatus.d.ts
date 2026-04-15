import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The status of the job.
 */
export declare const JobStatus: {
    readonly Draft: "draft";
    readonly Internal: "internal";
    readonly Published: "published";
    readonly Completed: "completed";
    readonly Placed: "placed";
    readonly OnHold: "on-hold";
    readonly Private: "private";
    readonly AcceptingCandidates: "accepting_candidates";
    readonly Open: "open";
    readonly Closed: "closed";
    readonly Archived: "archived";
};
/**
 * The status of the job.
 */
export type JobStatus = OpenEnum<typeof JobStatus>;
export declare const JobStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    completed: "completed";
    closed: "closed";
    draft: "draft";
    archived: "archived";
    open: "open";
    internal: "internal";
    published: "published";
    placed: "placed";
    "on-hold": "on-hold";
    private: "private";
    accepting_candidates: "accepting_candidates";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=jobstatus.d.ts.map