import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetWebhookResponse } from "./getwebhookresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type WebhookWebhooksOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksOneGlobals$zodSchema: z.ZodType<WebhookWebhooksOneGlobals>;
export type WebhookWebhooksOneRequest = {
    id: string;
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksOneRequest$zodSchema: z.ZodType<WebhookWebhooksOneRequest>;
export type WebhookWebhooksOneResponse = GetWebhookResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const WebhookWebhooksOneResponse$zodSchema: z.ZodType<WebhookWebhooksOneResponse>;
//# sourceMappingURL=webhookwebhooksoneop.d.ts.map