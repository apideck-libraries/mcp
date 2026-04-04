import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateWebhookRequest } from "./updatewebhookrequest.js";
import { UpdateWebhookResponse } from "./updatewebhookresponse.js";
export type WebhookWebhooksUpdateGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const WebhookWebhooksUpdateGlobals$zodSchema: z.ZodType<WebhookWebhooksUpdateGlobals>;
export type WebhookWebhooksUpdateRequest = {
    id: string;
    xApideckAppId?: string | undefined;
    body: UpdateWebhookRequest;
};
export declare const WebhookWebhooksUpdateRequest$zodSchema: z.ZodType<WebhookWebhooksUpdateRequest>;
export type WebhookWebhooksUpdateResponse = UpdateWebhookResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const WebhookWebhooksUpdateResponse$zodSchema: z.ZodType<WebhookWebhooksUpdateResponse>;
//# sourceMappingURL=webhookwebhooksupdateop.d.ts.map