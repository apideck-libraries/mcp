import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Files
 */
export type UpdateFileResponse = {
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
export declare const UpdateFileResponse$zodSchema: z.ZodType<UpdateFileResponse>;
//# sourceMappingURL=updatefileresponse.d.ts.map