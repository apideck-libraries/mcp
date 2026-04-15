import * as z from "zod";
import { ApiResourceCoverage } from "./apiresourcecoverage.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * ApiResources
 */
export type GetApiResourceCoverageResponse = {
    status_code: number;
    status: string;
    data: ApiResourceCoverage;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetApiResourceCoverageResponse$zodSchema: z.ZodType<GetApiResourceCoverageResponse>;
//# sourceMappingURL=getapiresourcecoverageresponse.d.ts.map