import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ExpenseCategoryInput } from "./expensecategory.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateExpenseCategoryResponse } from "./updateexpensecategoryresponse.js";
export type AccountingExpenseCategoriesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseCategoriesUpdateGlobals$zodSchema: z.ZodType<AccountingExpenseCategoriesUpdateGlobals>;
export type AccountingExpenseCategoriesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ExpenseCategoryInput;
};
export declare const AccountingExpenseCategoriesUpdateRequest$zodSchema: z.ZodType<AccountingExpenseCategoriesUpdateRequest>;
export type AccountingExpenseCategoriesUpdateResponse = UpdateExpenseCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseCategoriesUpdateResponse$zodSchema: z.ZodType<AccountingExpenseCategoriesUpdateResponse>;
//# sourceMappingURL=accountingexpensecategoriesupdateop.d.ts.map