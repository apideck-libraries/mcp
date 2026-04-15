import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Applicants
 */
export type CreateApplicantResponse = {
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
export declare const CreateApplicantResponse$zodSchema: z.ZodType<CreateApplicantResponse>;
//# sourceMappingURL=createapplicantresponse.d.ts.map