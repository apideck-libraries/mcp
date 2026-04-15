import * as z from "zod";
import { Api } from "./api.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Apis
 */
export type GetApisResponse = {
    status_code: number;
    status: string;
    data: Array<Api>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetApisResponse$zodSchema: z.ZodType<GetApisResponse>;
//# sourceMappingURL=getapisresponse.d.ts.map