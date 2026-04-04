import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Note deleted
 */
export type DeleteNoteResponse = {
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
export declare const DeleteNoteResponse$zodSchema: z.ZodType<DeleteNoteResponse>;
//# sourceMappingURL=deletenoteresponse.d.ts.map