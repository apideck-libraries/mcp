import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
 */
export declare const EmploymentStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Terminated: "terminated";
    readonly Other: "other";
};
/**
 * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
 */
export type EmploymentStatus = OpenEnum<typeof EmploymentStatus>;
export declare const EmploymentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    active: "active";
    inactive: "inactive";
    terminated: "terminated";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=employmentstatus.d.ts.map