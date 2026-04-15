import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Wildcard indicating all resources and fields when Data Scopes is disabled
 */
export declare const ResourcesEnum: {
    readonly Wildcard: "*";
};
/**
 * Wildcard indicating all resources and fields when Data Scopes is disabled
 */
export type ResourcesEnum = OpenEnum<typeof ResourcesEnum>;
export declare const ResourcesEnum$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    "*": "*";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type UpdateConsentRequestResources = {
    read?: boolean | undefined;
    write?: boolean | undefined;
};
export declare const UpdateConsentRequestResources$zodSchema: z.ZodType<UpdateConsentRequestResources>;
export type Resources = {
    [k: string]: {
        [k: string]: UpdateConsentRequestResources;
    };
} | ResourcesEnum;
export declare const Resources$zodSchema: z.ZodType<Resources>;
export type UpdateConsentRequest = {
    resources: {
        [k: string]: {
            [k: string]: UpdateConsentRequestResources;
        };
    } | ResourcesEnum;
    granted: boolean;
};
export declare const UpdateConsentRequest$zodSchema: z.ZodType<UpdateConsentRequest>;
//# sourceMappingURL=updateconsentrequest.d.ts.map