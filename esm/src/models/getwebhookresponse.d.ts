import * as z from "zod";
import { Webhook } from "./webhook.js";
/**
 * Webhooks
 */
export type GetWebhookResponse = {
    status_code: number;
    status: string;
    data: Webhook;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetWebhookResponse$zodSchema: z.ZodType<GetWebhookResponse>;
//# sourceMappingURL=getwebhookresponse.d.ts.map