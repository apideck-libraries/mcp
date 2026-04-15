import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Jobs
 */
export type DeleteJobResponse = {
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
export declare const DeleteJobResponse$zodSchema: z.ZodType<DeleteJobResponse>;
//# sourceMappingURL=deletejobresponse.d.ts.map