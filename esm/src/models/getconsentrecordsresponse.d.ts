import * as z from "zod";
import { ConsentRecord } from "./consentrecord.js";
/**
 * Consent records
 */
export type GetConsentRecordsResponse = {
    status_code: number;
    status: string;
    data: Array<ConsentRecord>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetConsentRecordsResponse$zodSchema: z.ZodType<GetConsentRecordsResponse>;
//# sourceMappingURL=getconsentrecordsresponse.d.ts.map