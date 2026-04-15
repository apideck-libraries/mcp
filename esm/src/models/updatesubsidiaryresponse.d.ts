import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Subsidiaries
 */
export type UpdateSubsidiaryResponse = {
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
export declare const UpdateSubsidiaryResponse$zodSchema: z.ZodType<UpdateSubsidiaryResponse>;
//# sourceMappingURL=updatesubsidiaryresponse.d.ts.map