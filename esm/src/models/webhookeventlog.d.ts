import * as z from "zod";
import { UnifiedApiId } from "./unifiedapiid.js";
/**
 * Apideck service provider associated with event.
 */
export type WebhookEventLogService = {
    id: string;
    name: string;
};
export declare const WebhookEventLogService$zodSchema: z.ZodType<WebhookEventLogService>;
export type Attempt = {
    timestamp?: string | undefined;
    execution_attempt?: number | undefined;
    status_code?: number | undefined;
    success?: boolean | undefined;
};
export declare const Attempt$zodSchema: z.ZodType<Attempt>;
export type WebhookEventLog = {
    id?: string | undefined;
    status_code?: number | undefined;
    success?: boolean | undefined;
    application_id?: string | undefined;
    consumer_id?: string | undefined;
    unified_api?: UnifiedApiId | undefined;
    service?: WebhookEventLogService | undefined;
    endpoint?: string | undefined;
    event_type?: string | undefined;
    execution_attempt?: number | undefined;
    http_method?: string | undefined;
    timestamp?: string | undefined;
    entity_type?: string | undefined;
    request_body?: string | undefined;
    response_body?: string | undefined;
    retry_scheduled?: boolean | undefined;
    attempts?: Array<Attempt> | undefined;
};
export declare const WebhookEventLog$zodSchema: z.ZodType<WebhookEventLog>;
//# sourceMappingURL=webhookeventlog.d.ts.map