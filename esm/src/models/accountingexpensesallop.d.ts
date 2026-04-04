import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ExpensesFilter } from "./expensesfilter.js";
import { GetExpensesResponse } from "./getexpensesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpensesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpensesAllGlobals$zodSchema: z.ZodType<AccountingExpensesAllGlobals>;
export type AccountingExpensesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ExpensesFilter | undefined;
};
export declare const AccountingExpensesAllRequest$zodSchema: z.ZodType<AccountingExpensesAllRequest>;
export type AccountingExpensesAllResponseResult = GetExpensesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpensesAllResponseResult$zodSchema: z.ZodType<AccountingExpensesAllResponseResult>;
export type AccountingExpensesAllResponse = {
    Result: GetExpensesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingExpensesAllResponse$zodSchema: z.ZodType<AccountingExpensesAllResponse>;
//# sourceMappingURL=accountingexpensesallop.d.ts.map