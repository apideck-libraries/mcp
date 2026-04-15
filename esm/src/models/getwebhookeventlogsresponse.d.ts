import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { WebhookEventLog } from "./webhookeventlog.js";
/**
 * EventLogs
 */
export type GetWebhookEventLogsResponse = {
    status_code: number;
    status: string;
    data: Array<WebhookEventLog>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetWebhookEventLogsResponse$zodSchema: z.ZodType<GetWebhookEventLogsResponse>;
//# sourceMappingURL=getwebhookeventlogsresponse.d.ts.map