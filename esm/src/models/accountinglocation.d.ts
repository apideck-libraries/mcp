import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { PassThroughBody } from "./passthroughbody.js";
import { SubsidiaryReference } from "./subsidiaryreference.js";
import { SubsidiaryReferenceInput } from "./subsidiaryreferenceinput.js";
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare const LocationStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type LocationStatus = OpenEnum<typeof LocationStatus>;
export declare const LocationStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type AccountingLocation = {
    id?: string | undefined;
    parent_id?: string | null | undefined;
    display_id?: string | null | undefined;
    downstream_id?: string | null | undefined;
    company_name?: string | null | undefined;
    display_name?: string | null | undefined;
    status?: LocationStatus | undefined;
    addresses?: Array<Address> | undefined;
    subsidiaries?: Array<SubsidiaryReference> | undefined;
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
export declare const AccountingLocation$zodSchema: z.ZodType<AccountingLocation>;
export type AccountingLocationInput = {
    parent_id?: string | null | undefined;
    display_id?: string | null | undefined;
    company_name?: string | null | undefined;
    display_name?: string | null | undefined;
    status?: LocationStatus | undefined;
    addresses?: Array<Address> | undefined;
    subsidiaries?: Array<SubsidiaryReferenceInput> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const AccountingLocationInput$zodSchema: z.ZodType<AccountingLocationInput>;
//# sourceMappingURL=accountinglocation.d.ts.map