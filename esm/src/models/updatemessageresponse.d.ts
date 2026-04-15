import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Messages
 */
export type UpdateMessageResponse = {
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
export declare const UpdateMessageResponse$zodSchema: z.ZodType<UpdateMessageResponse>;
//# sourceMappingURL=updatemessageresponse.d.ts.map