import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Messages
 */
export type DeleteMessageResponse = {
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
export declare const DeleteMessageResponse$zodSchema: z.ZodType<DeleteMessageResponse>;
//# sourceMappingURL=deletemessageresponse.d.ts.map