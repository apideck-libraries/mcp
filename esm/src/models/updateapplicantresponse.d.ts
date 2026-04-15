import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Applicants
 */
export type UpdateApplicantResponse = {
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
export declare const UpdateApplicantResponse$zodSchema: z.ZodType<UpdateApplicantResponse>;
//# sourceMappingURL=updateapplicantresponse.d.ts.map