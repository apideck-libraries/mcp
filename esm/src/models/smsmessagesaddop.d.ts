import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateMessageResponse } from "./createmessageresponse.js";
import { MessageInput } from "./message.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type SmsMessagesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const SmsMessagesAddGlobals$zodSchema: z.ZodType<SmsMessagesAddGlobals>;
export type SmsMessagesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: MessageInput;
};
export declare const SmsMessagesAddRequest$zodSchema: z.ZodType<SmsMessagesAddRequest>;
export type SmsMessagesAddResponse = CreateMessageResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const SmsMessagesAddResponse$zodSchema: z.ZodType<SmsMessagesAddResponse>;
//# sourceMappingURL=smsmessagesaddop.d.ts.map