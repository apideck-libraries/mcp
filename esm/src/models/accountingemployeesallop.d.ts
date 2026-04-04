import * as z from "zod";
import { AccountingEmployeesFilter } from "./accountingemployeesfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAccountingEmployeesResponse } from "./getaccountingemployeesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingEmployeesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingEmployeesAllGlobals$zodSchema: z.ZodType<AccountingEmployeesAllGlobals>;
export type AccountingEmployeesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
    filter?: AccountingEmployeesFilter | undefined;
};
export declare const AccountingEmployeesAllRequest$zodSchema: z.ZodType<AccountingEmployeesAllRequest>;
export type AccountingEmployeesAllResponseResult = GetAccountingEmployeesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingEmployeesAllResponseResult$zodSchema: z.ZodType<AccountingEmployeesAllResponseResult>;
export type AccountingEmployeesAllResponse = {
    Result: GetAccountingEmployeesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingEmployeesAllResponse$zodSchema: z.ZodType<AccountingEmployeesAllResponse>;
//# sourceMappingURL=accountingemployeesallop.d.ts.map