import * as z from "zod";
export type WebhookEventLogsFilterService = {
    id?: string | undefined;
};
export declare const WebhookEventLogsFilterService$zodSchema: z.ZodType<WebhookEventLogsFilterService>;
export type WebhookEventLogsFilter = {
    exclude_apis?: string | null | undefined;
    service?: WebhookEventLogsFilterService | null | undefined;
    consumer_id?: string | null | undefined;
    entity_type?: string | null | undefined;
    event_type?: string | null | undefined;
};
export declare const WebhookEventLogsFilter$zodSchema: z.ZodType<WebhookEventLogsFilter>;
//# sourceMappingURL=webhookeventlogsfilter.d.ts.map