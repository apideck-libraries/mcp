import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { MessageInput } from "./message.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateMessageResponse } from "./updatemessageresponse.js";
export type SmsMessagesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const SmsMessagesUpdateGlobals$zodSchema: z.ZodType<SmsMessagesUpdateGlobals>;
export type SmsMessagesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: MessageInput;
};
export declare const SmsMessagesUpdateRequest$zodSchema: z.ZodType<SmsMessagesUpdateRequest>;
export type SmsMessagesUpdateResponse = UpdateMessageResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const SmsMessagesUpdateResponse$zodSchema: z.ZodType<SmsMessagesUpdateResponse>;
//# sourceMappingURL=smsmessagesupdateop.d.ts.map