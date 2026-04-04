import * as z from "zod";
import { Webhook } from "./webhook.js";
/**
 * Webhooks
 */
export type UpdateWebhookResponse = {
    status_code: number;
    status: string;
    data: Webhook;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateWebhookResponse$zodSchema: z.ZodType<UpdateWebhookResponse>;
//# sourceMappingURL=updatewebhookresponse.d.ts.map