import * as z from "zod";
import { Status } from "./status.js";
import { UnifiedApiId } from "./unifiedapiid.js";
import { WebhookEventType } from "./webhookeventtype.js";
export type CreateWebhookRequest = {
    description?: string | null | undefined;
    unified_api: UnifiedApiId;
    status: Status;
    delivery_url: string;
    events: Array<WebhookEventType>;
};
export declare const CreateWebhookRequest$zodSchema: z.ZodType<CreateWebhookRequest>;
//# sourceMappingURL=createwebhookrequest.d.ts.map