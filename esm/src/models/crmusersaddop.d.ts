import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateUserResponse } from "./createuserresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UserInput } from "./userinput.js";
export type CrmUsersAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmUsersAddGlobals$zodSchema: z.ZodType<CrmUsersAddGlobals>;
export type CrmUsersAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: UserInput;
};
export declare const CrmUsersAddRequest$zodSchema: z.ZodType<CrmUsersAddRequest>;
export type CrmUsersAddResponse = CreateUserResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmUsersAddResponse$zodSchema: z.ZodType<CrmUsersAddResponse>;
//# sourceMappingURL=crmusersaddop.d.ts.map