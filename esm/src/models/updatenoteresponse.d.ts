import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Note updated
 */
export type UpdateNoteResponse = {
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
export declare const UpdateNoteResponse$zodSchema: z.ZodType<UpdateNoteResponse>;
//# sourceMappingURL=updatenoteresponse.d.ts.map