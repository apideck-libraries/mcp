import * as z from "zod";
import { Status } from "./status.js";
import { WebhookEventType } from "./webhookeventtype.js";
export type UpdateWebhookRequest = {
    description?: string | null | undefined;
    status?: Status | undefined;
    delivery_url?: string | undefined;
    events?: Array<WebhookEventType> | undefined;
};
export declare const UpdateWebhookRequest$zodSchema: z.ZodType<UpdateWebhookRequest>;
//# sourceMappingURL=updatewebhookrequest.d.ts.map