import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const AccountingEmployeesFilterStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Terminated: "terminated";
};
export type AccountingEmployeesFilterStatus = OpenEnum<typeof AccountingEmployeesFilterStatus>;
export declare const AccountingEmployeesFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    terminated: "terminated";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type AccountingEmployeesFilter = {
    updated_since?: string | undefined;
    status?: AccountingEmployeesFilterStatus | undefined;
};
export declare const AccountingEmployeesFilter$zodSchema: z.ZodType<AccountingEmployeesFilter>;
//# sourceMappingURL=accountingemployeesfilter.d.ts.map