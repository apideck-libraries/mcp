import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Applicants
 */
export type DeleteApplicantResponse = {
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
export declare const DeleteApplicantResponse$zodSchema: z.ZodType<DeleteApplicantResponse>;
//# sourceMappingURL=deleteapplicantresponse.d.ts.map