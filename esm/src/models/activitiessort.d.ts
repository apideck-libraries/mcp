import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Activities
 */
export declare const ActivitiesSortBy: {
    readonly CreatedAt: "created_at";
    readonly UpdatedAt: "updated_at";
};
/**
 * The field on which to sort the Activities
 */
export type ActivitiesSortBy = OpenEnum<typeof ActivitiesSortBy>;
export declare const ActivitiesSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ActivitiesSort = {
    by?: ActivitiesSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const ActivitiesSort$zodSchema: z.ZodType<ActivitiesSort>;
//# sourceMappingURL=activitiessort.d.ts.map