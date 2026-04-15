import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateExpenseReportResponse } from "./createexpensereportresponse.js";
import { ExpenseReportInput } from "./expensereport.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseReportsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseReportsAddGlobals$zodSchema: z.ZodType<AccountingExpenseReportsAddGlobals>;
export type AccountingExpenseReportsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: ExpenseReportInput;
};
export declare const AccountingExpenseReportsAddRequest$zodSchema: z.ZodType<AccountingExpenseReportsAddRequest>;
export type AccountingExpenseReportsAddResponse = CreateExpenseReportResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseReportsAddResponse$zodSchema: z.ZodType<AccountingExpenseReportsAddResponse>;
//# sourceMappingURL=accountingexpensereportsaddop.d.ts.map