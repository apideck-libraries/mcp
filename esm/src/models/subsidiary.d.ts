import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare const SubsidiaryStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type SubsidiaryStatus = OpenEnum<typeof SubsidiaryStatus>;
export declare const SubsidiaryStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Subsidiary = {
    id?: string | undefined;
    parent_id?: string | null | undefined;
    name?: string | null | undefined;
    display_id?: string | null | undefined;
    downstream_id?: string | null | undefined;
    status?: SubsidiaryStatus | undefined;
    address?: Address | undefined;
    currencies?: Array<Currency | null> | null | undefined;
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
export declare const Subsidiary$zodSchema: z.ZodType<Subsidiary>;
export type SubsidiaryInput = {
    parent_id?: string | null | undefined;
    name?: string | null | undefined;
    display_id?: string | null | undefined;
    status?: SubsidiaryStatus | undefined;
    address?: Address | undefined;
    currencies?: Array<Currency | null> | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const SubsidiaryInput$zodSchema: z.ZodType<SubsidiaryInput>;
//# sourceMappingURL=subsidiary.d.ts.map