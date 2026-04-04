import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteWebhookResponse } from "./deletewebhookresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type WebhookWebhooksDeleteGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksDeleteGlobals$zodSchema: z.ZodType<WebhookWebhooksDeleteGlobals>;
export type WebhookWebhooksDeleteRequest = {
    id: string;
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksDeleteRequest$zodSchema: z.ZodType<WebhookWebhooksDeleteRequest>;
export type WebhookWebhooksDeleteResponse = DeleteWebhookResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const WebhookWebhooksDeleteResponse$zodSchema: z.ZodType<WebhookWebhooksDeleteResponse>;
//# sourceMappingURL=webhookwebhooksdeleteop.d.ts.map