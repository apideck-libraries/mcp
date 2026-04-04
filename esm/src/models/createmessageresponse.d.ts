import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Messages
 */
export type CreateMessageResponse = {
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
export declare const CreateMessageResponse$zodSchema: z.ZodType<CreateMessageResponse>;
//# sourceMappingURL=createmessageresponse.d.ts.map