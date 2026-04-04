import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { ApiStatus } from "./apistatus.js";
import { ResourceStatus } from "./resourcestatus.js";
/**
 * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
 */
export declare const ApiType: {
    readonly Platform: "platform";
    readonly Unified: "unified";
};
/**
 * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
 */
export type ApiType = OpenEnum<typeof ApiType>;
export declare const ApiType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    platform: "platform";
    unified: "unified";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Resource = {
    id?: string | undefined;
    name?: string | undefined;
    status?: ResourceStatus | undefined;
    excluded_from_coverage?: boolean | undefined;
};
export declare const Resource$zodSchema: z.ZodType<Resource>;
export type Api = {
    id?: string | undefined;
    type?: ApiType | undefined;
    name?: string | undefined;
    description?: string | null | undefined;
    status?: ApiStatus | undefined;
    spec_url?: string | undefined;
    api_reference_url?: string | undefined;
    postman_collection_id?: string | null | undefined;
    categories?: Array<string> | undefined;
    resources?: Array<Resource> | undefined;
    events?: Array<string> | undefined;
};
export declare const Api$zodSchema: z.ZodType<Api>;
//# sourceMappingURL=api.d.ts.map