import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Pipeline updated
 */
export type UpdatePipelineResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdatePipelineResponse$zodSchema: z.ZodType<UpdatePipelineResponse>;
//# sourceMappingURL=updatepipelineresponse.d.ts.map