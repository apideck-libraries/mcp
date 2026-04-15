import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Webhook } from "./webhook.js";
/**
 * Webhooks
 */
export type GetWebhooksResponse = {
    status_code: number;
    status: string;
    data: Array<Webhook>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetWebhooksResponse$zodSchema: z.ZodType<GetWebhooksResponse>;
//# sourceMappingURL=getwebhooksresponse.d.ts.map