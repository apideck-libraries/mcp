import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateExpenseResponse } from "./createexpenseresponse.js";
import { ExpenseInput } from "./expense.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpensesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpensesAddGlobals$zodSchema: z.ZodType<AccountingExpensesAddGlobals>;
export type AccountingExpensesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: ExpenseInput;
};
export declare const AccountingExpensesAddRequest$zodSchema: z.ZodType<AccountingExpensesAddRequest>;
export type AccountingExpensesAddResponse = CreateExpenseResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpensesAddResponse$zodSchema: z.ZodType<AccountingExpensesAddResponse>;
//# sourceMappingURL=accountingexpensesaddop.d.ts.map