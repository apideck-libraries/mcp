import * as z from "zod";
import { Pipeline } from "./pipeline.js";
/**
 * Pipeline
 */
export type GetPipelineResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Pipeline;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPipelineResponse$zodSchema: z.ZodType<GetPipelineResponse>;
//# sourceMappingURL=getpipelineresponse.d.ts.map