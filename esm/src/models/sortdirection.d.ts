import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The direction in which to sort the results
 */
export declare const SortDirection: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
/**
 * The direction in which to sort the results
 */
export type SortDirection = OpenEnum<typeof SortDirection>;
export declare const SortDirection$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=sortdirection.d.ts.map