import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Pipeline deleted
 */
export type DeletePipelineResponse = {
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
export declare const DeletePipelineResponse$zodSchema: z.ZodType<DeletePipelineResponse>;
//# sourceMappingURL=deletepipelineresponse.d.ts.map