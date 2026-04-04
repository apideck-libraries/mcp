import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCompaniesResponse } from "./getcompaniesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCompaniesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCompaniesAllGlobals$zodSchema: z.ZodType<AccountingCompaniesAllGlobals>;
export type AccountingCompaniesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingCompaniesAllRequest$zodSchema: z.ZodType<AccountingCompaniesAllRequest>;
export type AccountingCompaniesAllResponseResult = GetCompaniesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCompaniesAllResponseResult$zodSchema: z.ZodType<AccountingCompaniesAllResponseResult>;
export type AccountingCompaniesAllResponse = {
    Result: GetCompaniesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingCompaniesAllResponse$zodSchema: z.ZodType<AccountingCompaniesAllResponse>;
//# sourceMappingURL=accountingcompaniesallop.d.ts.map