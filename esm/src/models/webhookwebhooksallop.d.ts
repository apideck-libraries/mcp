import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetWebhooksResponse } from "./getwebhooksresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type WebhookWebhooksAllGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksAllGlobals$zodSchema: z.ZodType<WebhookWebhooksAllGlobals>;
export type WebhookWebhooksAllRequest = {
    xApideckAppId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
};
export declare const WebhookWebhooksAllRequest$zodSchema: z.ZodType<WebhookWebhooksAllRequest>;
export type WebhookWebhooksAllResponseResult = GetWebhooksResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const WebhookWebhooksAllResponseResult$zodSchema: z.ZodType<WebhookWebhooksAllResponseResult>;
export type WebhookWebhooksAllResponse = {
    Result: GetWebhooksResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const WebhookWebhooksAllResponse$zodSchema: z.ZodType<WebhookWebhooksAllResponse>;
//# sourceMappingURL=webhookwebhooksallop.d.ts.map