import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of projects to filter by
 */
export declare const ProjectsFilterProjectStatus: {
    readonly Active: "active";
    readonly Completed: "completed";
    readonly OnHold: "on_hold";
    readonly Cancelled: "cancelled";
    readonly Draft: "draft";
    readonly InProgress: "in_progress";
    readonly Approved: "approved";
    readonly Other: "other";
};
/**
 * Status of projects to filter by
 */
export type ProjectsFilterProjectStatus = OpenEnum<typeof ProjectsFilterProjectStatus>;
export declare const ProjectsFilterProjectStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    completed: "completed";
    cancelled: "cancelled";
    other: "other";
    active: "active";
    draft: "draft";
    approved: "approved";
    on_hold: "on_hold";
    in_progress: "in_progress";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ProjectsFilter = {
    name?: string | undefined;
    status?: ProjectsFilterProjectStatus | undefined;
    customer_id?: string | undefined;
    updated_since?: string | undefined;
};
export declare const ProjectsFilter$zodSchema: z.ZodType<ProjectsFilter>;
//# sourceMappingURL=projectsfilter.d.ts.map