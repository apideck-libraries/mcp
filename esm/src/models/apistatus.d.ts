import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of the API. APIs with status live or beta are callable.
 */
export declare const ApiStatus: {
    readonly Live: "live";
    readonly Beta: "beta";
    readonly Development: "development";
    readonly Considering: "considering";
};
/**
 * Status of the API. APIs with status live or beta are callable.
 */
export type ApiStatus = OpenEnum<typeof ApiStatus>;
export declare const ApiStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    live: "live";
    beta: "beta";
    development: "development";
    considering: "considering";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=apistatus.d.ts.map