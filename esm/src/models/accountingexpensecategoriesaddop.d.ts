import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateExpenseCategoryResponse } from "./createexpensecategoryresponse.js";
import { ExpenseCategoryInput } from "./expensecategory.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseCategoriesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseCategoriesAddGlobals$zodSchema: z.ZodType<AccountingExpenseCategoriesAddGlobals>;
export type AccountingExpenseCategoriesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: ExpenseCategoryInput;
};
export declare const AccountingExpenseCategoriesAddRequest$zodSchema: z.ZodType<AccountingExpenseCategoriesAddRequest>;
export type AccountingExpenseCategoriesAddResponse = CreateExpenseCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseCategoriesAddResponse$zodSchema: z.ZodType<AccountingExpenseCategoriesAddResponse>;
//# sourceMappingURL=accountingexpensecategoriesaddop.d.ts.map