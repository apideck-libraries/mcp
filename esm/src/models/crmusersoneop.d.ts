import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetUserResponse } from "./getuserresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmUsersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmUsersOneGlobals$zodSchema: z.ZodType<CrmUsersOneGlobals>;
export type CrmUsersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const CrmUsersOneRequest$zodSchema: z.ZodType<CrmUsersOneRequest>;
export type CrmUsersOneResponse = GetUserResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmUsersOneResponse$zodSchema: z.ZodType<CrmUsersOneResponse>;
//# sourceMappingURL=crmusersoneop.d.ts.map