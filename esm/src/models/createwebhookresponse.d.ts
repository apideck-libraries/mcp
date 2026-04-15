import * as z from "zod";
import { Webhook } from "./webhook.js";
/**
 * Webhooks
 */
export type CreateWebhookResponse = {
    status_code: number;
    status: string;
    data: Webhook;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateWebhookResponse$zodSchema: z.ZodType<CreateWebhookResponse>;
//# sourceMappingURL=createwebhookresponse.d.ts.map