import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Credit Note created
 */
export type CreateCreditNoteResponse = {
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
export declare const CreateCreditNoteResponse$zodSchema: z.ZodType<CreateCreditNoteResponse>;
//# sourceMappingURL=createcreditnoteresponse.d.ts.map