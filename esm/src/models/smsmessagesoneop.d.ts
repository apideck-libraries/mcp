import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetMessageResponse } from "./getmessageresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type SmsMessagesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const SmsMessagesOneGlobals$zodSchema: z.ZodType<SmsMessagesOneGlobals>;
export type SmsMessagesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const SmsMessagesOneRequest$zodSchema: z.ZodType<SmsMessagesOneRequest>;
export type SmsMessagesOneResponse = GetMessageResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const SmsMessagesOneResponse$zodSchema: z.ZodType<SmsMessagesOneResponse>;
//# sourceMappingURL=smsmessagesoneop.d.ts.map