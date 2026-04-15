import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { PassThroughBody } from "./passthroughbody.js";
export type Component = {
    id?: string | null | undefined;
    name?: string | undefined;
    rate?: number | null | undefined;
    compound?: boolean | null | undefined;
};
export declare const Component$zodSchema: z.ZodType<Component>;
/**
 * Tax rate status
 */
export declare const TaxRateStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
};
/**
 * Tax rate status
 */
export type TaxRateStatus = OpenEnum<typeof TaxRateStatus>;
export declare const TaxRateStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    archived: "archived";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type TaxRateSubsidiary = {
    id?: string | undefined;
};
export declare const TaxRateSubsidiary$zodSchema: z.ZodType<TaxRateSubsidiary>;
export type TaxRate = {
    id?: string | null | undefined;
    display_id?: string | null | undefined;
    name?: string | undefined;
    code?: string | null | undefined;
    description?: string | null | undefined;
    effective_tax_rate?: number | null | undefined;
    country?: string | null | undefined;
    total_tax_rate?: number | null | undefined;
    tax_payable_account_id?: string | null | undefined;
    tax_remitted_account_id?: string | null | undefined;
    components?: Array<Component> | null | undefined;
    type?: string | null | undefined;
    report_tax_type?: string | null | undefined;
    original_tax_rate_id?: string | null | undefined;
    status?: TaxRateStatus | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    subsidiaries?: Array<TaxRateSubsidiary> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
};
export declare const TaxRate$zodSchema: z.ZodType<TaxRate>;
export type TaxRateInput = {
    id?: string | null | undefined;
    display_id?: string | null | undefined;
    name?: string | undefined;
    code?: string | null | undefined;
    description?: string | null | undefined;
    effective_tax_rate?: number | null | undefined;
    country?: string | null | undefined;
    total_tax_rate?: number | null | undefined;
    tax_payable_account_id?: string | null | undefined;
    tax_remitted_account_id?: string | null | undefined;
    components?: Array<Component> | null | undefined;
    type?: string | null | undefined;
    report_tax_type?: string | null | undefined;
    original_tax_rate_id?: string | null | undefined;
    status?: TaxRateStatus | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    subsidiaries?: Array<TaxRateSubsidiary> | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
};
export declare const TaxRateInput$zodSchema: z.ZodType<TaxRateInput>;
//# sourceMappingURL=taxrate.d.ts.map