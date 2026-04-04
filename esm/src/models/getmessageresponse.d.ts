import * as z from "zod";
import { Message } from "./message.js";
/**
 * Messages
 */
export type GetMessageResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Message;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetMessageResponse$zodSchema: z.ZodType<GetMessageResponse>;
//# sourceMappingURL=getmessageresponse.d.ts.map