import * as z from "zod";
import { ApiResource } from "./apiresource.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * ApiResources
 */
export type GetApiResourceResponse = {
    status_code: number;
    status: string;
    data: ApiResource;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetApiResourceResponse$zodSchema: z.ZodType<GetApiResourceResponse>;
//# sourceMappingURL=getapiresourceresponse.d.ts.map