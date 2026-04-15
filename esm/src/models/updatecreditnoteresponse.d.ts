import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Credit Note updated
 */
export type UpdateCreditNoteResponse = {
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
export declare const UpdateCreditNoteResponse$zodSchema: z.ZodType<UpdateCreditNoteResponse>;
//# sourceMappingURL=updatecreditnoteresponse.d.ts.map