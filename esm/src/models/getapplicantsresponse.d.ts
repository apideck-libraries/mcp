import * as z from "zod";
import { Applicant } from "./applicant.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Applicants
 */
export type GetApplicantsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Applicant>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetApplicantsResponse$zodSchema: z.ZodType<GetApplicantsResponse>;
//# sourceMappingURL=getapplicantsresponse.d.ts.map