import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetQuotesResponse } from "./getquotesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingQuotesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingQuotesAllGlobals$zodSchema: z.ZodType<AccountingQuotesAllGlobals>;
export type AccountingQuotesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
};
export declare const AccountingQuotesAllRequest$zodSchema: z.ZodType<AccountingQuotesAllRequest>;
export type AccountingQuotesAllResponseResult = GetQuotesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingQuotesAllResponseResult$zodSchema: z.ZodType<AccountingQuotesAllResponseResult>;
export type AccountingQuotesAllResponse = {
    Result: GetQuotesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingQuotesAllResponse$zodSchema: z.ZodType<AccountingQuotesAllResponse>;
//# sourceMappingURL=accountingquotesallop.d.ts.map