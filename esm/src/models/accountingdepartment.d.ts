import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
import { SubsidiaryReference } from "./subsidiaryreference.js";
import { SubsidiaryReferenceInput } from "./subsidiaryreferenceinput.js";
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare const DepartmentStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type DepartmentStatus = OpenEnum<typeof DepartmentStatus>;
export declare const DepartmentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type AccountingDepartment = {
    id?: string | undefined;
    parent_id?: string | null | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    status?: DepartmentStatus | undefined;
    subsidiaries?: Array<SubsidiaryReference> | undefined;
    code?: string | undefined;
    downstream_id?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const AccountingDepartment$zodSchema: z.ZodType<AccountingDepartment>;
export type AccountingDepartmentInput = {
    parent_id?: string | null | undefined;
    display_id?: string | null | undefined;
    name?: string | null | undefined;
    status?: DepartmentStatus | undefined;
    subsidiaries?: Array<SubsidiaryReferenceInput> | undefined;
    code?: string | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const AccountingDepartmentInput$zodSchema: z.ZodType<AccountingDepartmentInput>;
//# sourceMappingURL=accountingdepartment.d.ts.map