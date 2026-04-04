import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The gender represents the gender identity of a person.
 */
export declare const Gender: {
    readonly Male: "male";
    readonly Female: "female";
    readonly Unisex: "unisex";
    readonly Other: "other";
    readonly NotSpecified: "not_specified";
};
/**
 * The gender represents the gender identity of a person.
 */
export type Gender = OpenEnum<typeof Gender>;
export declare const Gender$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    male: "male";
    female: "female";
    unisex: "unisex";
    not_specified: "not_specified";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=gender.d.ts.map