import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ExpenseInput } from "./expense.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateExpenseResponse } from "./updateexpenseresponse.js";
export type AccountingExpensesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpensesUpdateGlobals$zodSchema: z.ZodType<AccountingExpensesUpdateGlobals>;
export type AccountingExpensesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ExpenseInput;
};
export declare const AccountingExpensesUpdateRequest$zodSchema: z.ZodType<AccountingExpensesUpdateRequest>;
export type AccountingExpensesUpdateResponse = UpdateExpenseResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpensesUpdateResponse$zodSchema: z.ZodType<AccountingExpensesUpdateResponse>;
//# sourceMappingURL=accountingexpensesupdateop.d.ts.map