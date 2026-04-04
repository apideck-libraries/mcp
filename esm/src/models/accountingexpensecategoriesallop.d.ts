import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ExpenseCategoriesFilter } from "./expensecategoriesfilter.js";
import { GetExpenseCategoriesResponse } from "./getexpensecategoriesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseCategoriesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseCategoriesAllGlobals$zodSchema: z.ZodType<AccountingExpenseCategoriesAllGlobals>;
export type AccountingExpenseCategoriesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
    filter?: ExpenseCategoriesFilter | undefined;
};
export declare const AccountingExpenseCategoriesAllRequest$zodSchema: z.ZodType<AccountingExpenseCategoriesAllRequest>;
export type AccountingExpenseCategoriesAllResponseResult = GetExpenseCategoriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseCategoriesAllResponseResult$zodSchema: z.ZodType<AccountingExpenseCategoriesAllResponseResult>;
export type AccountingExpenseCategoriesAllResponse = {
    Result: GetExpenseCategoriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingExpenseCategoriesAllResponse$zodSchema: z.ZodType<AccountingExpenseCategoriesAllResponse>;
//# sourceMappingURL=accountingexpensecategoriesallop.d.ts.map