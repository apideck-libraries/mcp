import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Applications
 */
export type UpdateApplicationResponse = {
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
export declare const UpdateApplicationResponse$zodSchema: z.ZodType<UpdateApplicationResponse>;
//# sourceMappingURL=updateapplicationresponse.d.ts.map