import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetWebhookEventLogsResponse } from "./getwebhookeventlogsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { WebhookEventLogsFilter } from "./webhookeventlogsfilter.js";
export type WebhookEventLogsAllGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const WebhookEventLogsAllGlobals$zodSchema: z.ZodType<WebhookEventLogsAllGlobals>;
export type WebhookEventLogsAllRequest = {
    xApideckAppId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: WebhookEventLogsFilter | undefined;
};
export declare const WebhookEventLogsAllRequest$zodSchema: z.ZodType<WebhookEventLogsAllRequest>;
export type WebhookEventLogsAllResponseResult = GetWebhookEventLogsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const WebhookEventLogsAllResponseResult$zodSchema: z.ZodType<WebhookEventLogsAllResponseResult>;
export type WebhookEventLogsAllResponse = {
    Result: GetWebhookEventLogsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const WebhookEventLogsAllResponse$zodSchema: z.ZodType<WebhookEventLogsAllResponse>;
//# sourceMappingURL=webhookeventlogsallop.d.ts.map