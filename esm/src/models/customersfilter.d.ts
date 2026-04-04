import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of customer to filter on
 */
export declare const CustomersFilterStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
    readonly All: "all";
};
/**
 * Status of customer to filter on
 */
export type CustomersFilterStatus = OpenEnum<typeof CustomersFilterStatus>;
export declare const CustomersFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
    archived: "archived";
    all: "all";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CustomersFilter = {
    company_name?: string | undefined;
    display_name?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    status?: CustomersFilterStatus | null | undefined;
    updated_since?: string | undefined;
    supplier_id?: string | undefined;
};
export declare const CustomersFilter$zodSchema: z.ZodType<CustomersFilter>;
//# sourceMappingURL=customersfilter.d.ts.map