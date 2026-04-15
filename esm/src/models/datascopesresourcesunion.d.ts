import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Wildcard indicating all resources and fields when Data Scopes is selected
 */
export declare const DataScopesResourcesEnum: {
    readonly Wildcard: "*";
};
/**
 * Wildcard indicating all resources and fields when Data Scopes is selected
 */
export type DataScopesResourcesEnum = OpenEnum<typeof DataScopesResourcesEnum>;
export declare const DataScopesResourcesEnum$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    "*": "*";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type DataScopesResources = {
    read?: boolean | undefined;
    write?: boolean | undefined;
};
export declare const DataScopesResources$zodSchema: z.ZodType<DataScopesResources>;
/**
 * Data scopes resource configuration that can be either detailed field permissions or a wildcard
 */
export type DataScopesResourcesUnion = {
    [k: string]: {
        [k: string]: DataScopesResources;
    };
} | DataScopesResourcesEnum;
export declare const DataScopesResourcesUnion$zodSchema: z.ZodType<DataScopesResourcesUnion>;
//# sourceMappingURL=datascopesresourcesunion.d.ts.map