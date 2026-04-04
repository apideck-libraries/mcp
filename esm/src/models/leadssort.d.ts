import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Leads
 */
export declare const LeadsSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
    readonly Name: "name";
    readonly FirstName: "first_name";
    readonly LastName: "last_name";
    readonly Email: "email";
};
/**
 * The field on which to sort the Leads
 */
export type LeadsSortBy = OpenEnum<typeof LeadsSortBy>;
export declare const LeadsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    email: "email";
    name: "name";
    updated_at: "updated_at";
    created_at: "created_at";
    first_name: "first_name";
    last_name: "last_name";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type LeadsSort = {
    by?: LeadsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const LeadsSort$zodSchema: z.ZodType<LeadsSort>;
//# sourceMappingURL=leadssort.d.ts.map