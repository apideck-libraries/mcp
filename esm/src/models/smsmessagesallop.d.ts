import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetMessagesResponse } from "./getmessagesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type SmsMessagesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const SmsMessagesAllGlobals$zodSchema: z.ZodType<SmsMessagesAllGlobals>;
export type SmsMessagesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
};
export declare const SmsMessagesAllRequest$zodSchema: z.ZodType<SmsMessagesAllRequest>;
export type SmsMessagesAllResponseResult = GetMessagesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const SmsMessagesAllResponseResult$zodSchema: z.ZodType<SmsMessagesAllResponseResult>;
export type SmsMessagesAllResponse = {
    Result: GetMessagesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const SmsMessagesAllResponse$zodSchema: z.ZodType<SmsMessagesAllResponse>;
//# sourceMappingURL=smsmessagesallop.d.ts.map