import * as z from "zod";
import { Links } from "./links.js";
import { Message } from "./message.js";
import { Meta } from "./meta.js";
/**
 * Messages
 */
export type GetMessagesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Message>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetMessagesResponse$zodSchema: z.ZodType<GetMessagesResponse>;
//# sourceMappingURL=getmessagesresponse.d.ts.map