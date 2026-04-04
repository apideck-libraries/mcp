import * as z from "zod";
export type WebhookSubscription = {
    downstream_id?: string | undefined;
    unify_event_types?: Array<string> | undefined;
    downstream_event_types?: Array<string> | undefined;
    execute_url?: string | undefined;
    created_at?: string | undefined;
};
export declare const WebhookSubscription$zodSchema: z.ZodType<WebhookSubscription>;
//# sourceMappingURL=webhooksubscription.d.ts.map