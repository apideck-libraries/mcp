import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Employees
 */
export declare const EmployeesSortBy: {
    readonly FirstName: "first_name";
    readonly LastName: "last_name";
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Employees
 */
export type EmployeesSortBy = OpenEnum<typeof EmployeesSortBy>;
export declare const EmployeesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
    first_name: "first_name";
    last_name: "last_name";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EmployeesSort = {
    by?: EmployeesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const EmployeesSort$zodSchema: z.ZodType<EmployeesSort>;
//# sourceMappingURL=employeessort.d.ts.map