import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ExpenseReportInput } from "./expensereport.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateExpenseReportResponse } from "./updateexpensereportresponse.js";
export type AccountingExpenseReportsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseReportsUpdateGlobals$zodSchema: z.ZodType<AccountingExpenseReportsUpdateGlobals>;
export type AccountingExpenseReportsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ExpenseReportInput;
};
export declare const AccountingExpenseReportsUpdateRequest$zodSchema: z.ZodType<AccountingExpenseReportsUpdateRequest>;
export type AccountingExpenseReportsUpdateResponse = UpdateExpenseReportResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseReportsUpdateResponse$zodSchema: z.ZodType<AccountingExpenseReportsUpdateResponse>;
//# sourceMappingURL=accountingexpensereportsupdateop.d.ts.map