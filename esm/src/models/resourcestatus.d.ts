import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of the resource. Resources with status live or beta are callable.
 */
export declare const ResourceStatus: {
    readonly Live: "live";
    readonly Beta: "beta";
    readonly Development: "development";
    readonly Upcoming: "upcoming";
    readonly Considering: "considering";
};
/**
 * Status of the resource. Resources with status live or beta are callable.
 */
export type ResourceStatus = OpenEnum<typeof ResourceStatus>;
export declare const ResourceStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    live: "live";
    beta: "beta";
    development: "development";
    upcoming: "upcoming";
    considering: "considering";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=resourcestatus.d.ts.map