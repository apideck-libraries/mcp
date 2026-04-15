import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetUsersResponse } from "./getusersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmUsersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmUsersAllGlobals$zodSchema: z.ZodType<CrmUsersAllGlobals>;
export type CrmUsersAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmUsersAllRequest$zodSchema: z.ZodType<CrmUsersAllRequest>;
export type CrmUsersAllResponseResult = GetUsersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmUsersAllResponseResult$zodSchema: z.ZodType<CrmUsersAllResponseResult>;
export type CrmUsersAllResponse = {
    Result: GetUsersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmUsersAllResponse$zodSchema: z.ZodType<CrmUsersAllResponse>;
//# sourceMappingURL=crmusersallop.d.ts.map