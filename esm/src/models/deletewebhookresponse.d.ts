import * as z from "zod";
import { Webhook } from "./webhook.js";
/**
 * Webhooks
 */
export type DeleteWebhookResponse = {
    status_code: number;
    status: string;
    data: Webhook;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const DeleteWebhookResponse$zodSchema: z.ZodType<DeleteWebhookResponse>;
//# sourceMappingURL=deletewebhookresponse.d.ts.map