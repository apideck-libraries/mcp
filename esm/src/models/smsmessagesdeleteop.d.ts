import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteMessageResponse } from "./deletemessageresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type SmsMessagesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const SmsMessagesDeleteGlobals$zodSchema: z.ZodType<SmsMessagesDeleteGlobals>;
export type SmsMessagesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const SmsMessagesDeleteRequest$zodSchema: z.ZodType<SmsMessagesDeleteRequest>;
export type SmsMessagesDeleteResponse = DeleteMessageResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const SmsMessagesDeleteResponse$zodSchema: z.ZodType<SmsMessagesDeleteResponse>;
//# sourceMappingURL=smsmessagesdeleteop.d.ts.map