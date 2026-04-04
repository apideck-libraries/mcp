import * as z from "zod";
import { Applicant } from "./applicant.js";
/**
 * Applicants
 */
export type GetApplicantResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Applicant;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetApplicantResponse$zodSchema: z.ZodType<GetApplicantResponse>;
//# sourceMappingURL=getapplicantresponse.d.ts.map