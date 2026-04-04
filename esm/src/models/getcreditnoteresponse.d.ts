import * as z from "zod";
import { CreditNote } from "./creditnote.js";
/**
 * Credit Note
 */
export type GetCreditNoteResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: CreditNote;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCreditNoteResponse$zodSchema: z.ZodType<GetCreditNoteResponse>;
//# sourceMappingURL=getcreditnoteresponse.d.ts.map