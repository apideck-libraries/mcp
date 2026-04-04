import * as z from "zod";
import { AccountingDepartmentsFilter } from "./accountingdepartmentsfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAccountingDepartmentsResponse } from "./getaccountingdepartmentsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingDepartmentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingDepartmentsAllGlobals$zodSchema: z.ZodType<AccountingDepartmentsAllGlobals>;
export type AccountingDepartmentsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
    filter?: AccountingDepartmentsFilter | undefined;
};
export declare const AccountingDepartmentsAllRequest$zodSchema: z.ZodType<AccountingDepartmentsAllRequest>;
export type AccountingDepartmentsAllResponseResult = GetAccountingDepartmentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingDepartmentsAllResponseResult$zodSchema: z.ZodType<AccountingDepartmentsAllResponseResult>;
export type AccountingDepartmentsAllResponse = {
    Result: GetAccountingDepartmentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingDepartmentsAllResponse$zodSchema: z.ZodType<AccountingDepartmentsAllResponse>;
//# sourceMappingURL=accountingdepartmentsallop.d.ts.map