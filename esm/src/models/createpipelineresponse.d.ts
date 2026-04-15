import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Pipeline created
 */
export type CreatePipelineResponse = {
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
export declare const CreatePipelineResponse$zodSchema: z.ZodType<CreatePipelineResponse>;
//# sourceMappingURL=createpipelineresponse.d.ts.map