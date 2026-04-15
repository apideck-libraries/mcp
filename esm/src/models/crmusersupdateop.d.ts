import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateUserResponse } from "./updateuserresponse.js";
import { UserInput } from "./userinput.js";
export type CrmUsersUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmUsersUpdateGlobals$zodSchema: z.ZodType<CrmUsersUpdateGlobals>;
export type CrmUsersUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: UserInput;
};
export declare const CrmUsersUpdateRequest$zodSchema: z.ZodType<CrmUsersUpdateRequest>;
export type CrmUsersUpdateResponse = UpdateUserResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmUsersUpdateResponse$zodSchema: z.ZodType<CrmUsersUpdateResponse>;
//# sourceMappingURL=crmusersupdateop.d.ts.map