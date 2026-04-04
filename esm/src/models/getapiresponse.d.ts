import * as z from "zod";
import { Api } from "./api.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Apis
 */
export type GetApiResponse = {
    status_code: number;
    status: string;
    data: Api;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetApiResponse$zodSchema: z.ZodType<GetApiResponse>;
//# sourceMappingURL=getapiresponse.d.ts.map