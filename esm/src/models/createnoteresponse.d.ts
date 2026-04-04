import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Note created
 */
export type CreateNoteResponse = {
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
export declare const CreateNoteResponse$zodSchema: z.ZodType<CreateNoteResponse>;
//# sourceMappingURL=createnoteresponse.d.ts.map