import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Pipeline } from "./pipeline.js";
/**
 * Pipelines
 */
export type GetPipelinesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Pipeline>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetPipelinesResponse$zodSchema: z.ZodType<GetPipelinesResponse>;
//# sourceMappingURL=getpipelinesresponse.d.ts.map