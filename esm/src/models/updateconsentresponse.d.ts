import * as z from "zod";
import { ConsentRecord } from "./consentrecord.js";
/**
 * Consent updated
 */
export type UpdateConsentResponse = {
    status_code: number;
    status: string;
    data: ConsentRecord;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateConsentResponse$zodSchema: z.ZodType<UpdateConsentResponse>;
//# sourceMappingURL=updateconsentresponse.d.ts.map