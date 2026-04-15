import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Employment status to filter on
 */
export declare const EmployeesFilterEmploymentStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Terminated: "terminated";
    readonly Other: "other";
};
/**
 * Employment status to filter on
 */
export type EmployeesFilterEmploymentStatus = OpenEnum<typeof EmployeesFilterEmploymentStatus>;
export declare const EmployeesFilterEmploymentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    active: "active";
    inactive: "inactive";
    terminated: "terminated";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EmployeesFilter = {
    company_id?: string | undefined;
    email?: string | undefined;
    first_name?: string | undefined;
    title?: string | undefined;
    last_name?: string | undefined;
    manager_id?: string | undefined;
    employment_status?: EmployeesFilterEmploymentStatus | undefined;
    employee_number?: string | undefined;
    department_id?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
};
export declare const EmployeesFilter$zodSchema: z.ZodType<EmployeesFilter>;
//# sourceMappingURL=employeesfilter.d.ts.map