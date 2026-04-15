import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateWebhookRequest } from "./createwebhookrequest.js";
import { CreateWebhookResponse } from "./createwebhookresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type WebhookWebhooksAddGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksAddGlobals$zodSchema: z.ZodType<WebhookWebhooksAddGlobals>;
export type WebhookWebhooksAddRequest = {
    xApideckAppId?: string | undefined;
    body: CreateWebhookRequest;
};
export declare const WebhookWebhooksAddRequest$zodSchema: z.ZodType<WebhookWebhooksAddRequest>;
export type WebhookWebhooksAddResponse = CreateWebhookResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const WebhookWebhooksAddResponse$zodSchema: z.ZodType<WebhookWebhooksAddResponse>;
//# sourceMappingURL=webhookwebhooksaddop.d.ts.map