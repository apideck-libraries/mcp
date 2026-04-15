import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Credit Note deleted
 */
export type DeleteCreditNoteResponse = {
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
export declare const DeleteCreditNoteResponse$zodSchema: z.ZodType<DeleteCreditNoteResponse>;
//# sourceMappingURL=deletecreditnoteresponse.d.ts.map