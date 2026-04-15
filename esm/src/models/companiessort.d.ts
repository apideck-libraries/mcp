import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Companies
 */
export declare const CompaniesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
    readonly Name: "name";
};
/**
 * The field on which to sort the Companies
 */
export type CompaniesSortBy = OpenEnum<typeof CompaniesSortBy>;
export declare const CompaniesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    name: "name";
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CompaniesSort = {
    by?: CompaniesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const CompaniesSort$zodSchema: z.ZodType<CompaniesSort>;
//# sourceMappingURL=companiessort.d.ts.map