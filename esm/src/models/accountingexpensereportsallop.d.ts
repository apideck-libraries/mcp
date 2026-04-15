import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ExpenseReportsFilter } from "./expensereportsfilter.js";
import { GetExpenseReportsResponse } from "./getexpensereportsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseReportsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseReportsAllGlobals$zodSchema: z.ZodType<AccountingExpenseReportsAllGlobals>;
export type AccountingExpenseReportsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
    filter?: ExpenseReportsFilter | undefined;
};
export declare const AccountingExpenseReportsAllRequest$zodSchema: z.ZodType<AccountingExpenseReportsAllRequest>;
export type AccountingExpenseReportsAllResponseResult = GetExpenseReportsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseReportsAllResponseResult$zodSchema: z.ZodType<AccountingExpenseReportsAllResponseResult>;
export type AccountingExpenseReportsAllResponse = {
    Result: GetExpenseReportsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingExpenseReportsAllResponse$zodSchema: z.ZodType<AccountingExpenseReportsAllResponse>;
//# sourceMappingURL=accountingexpensereportsallop.d.ts.map