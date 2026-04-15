import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare const TrackingCategoryStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type TrackingCategoryStatus = OpenEnum<typeof TrackingCategoryStatus>;
export declare const TrackingCategoryStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type TrackingCategorySubsidiary = {
    id?: string | undefined;
};
export declare const TrackingCategorySubsidiary$zodSchema: z.ZodType<TrackingCategorySubsidiary>;
export type TrackingCategory = {
    id?: string | undefined;
    parent_id?: string | null | undefined;
    parent_name?: string | null | undefined;
    name?: string | undefined;
    code?: string | null | undefined;
    status?: TrackingCategoryStatus | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    subsidiaries?: Array<TrackingCategorySubsidiary> | undefined;
};
export declare const TrackingCategory$zodSchema: z.ZodType<TrackingCategory>;
export type TrackingCategoryInput = {
    parent_id?: string | null | undefined;
    parent_name?: string | null | undefined;
    name?: string | undefined;
    code?: string | null | undefined;
    status?: TrackingCategoryStatus | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    subsidiaries?: Array<TrackingCategorySubsidiary> | undefined;
};
export declare const TrackingCategoryInput$zodSchema: z.ZodType<TrackingCategoryInput>;
//# sourceMappingURL=trackingcategory.d.ts.map