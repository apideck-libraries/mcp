import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteExpenseCategoryResponse } from "./deleteexpensecategoryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseCategoriesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseCategoriesDeleteGlobals$zodSchema: z.ZodType<AccountingExpenseCategoriesDeleteGlobals>;
export type AccountingExpenseCategoriesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingExpenseCategoriesDeleteRequest$zodSchema: z.ZodType<AccountingExpenseCategoriesDeleteRequest>;
export type AccountingExpenseCategoriesDeleteResponse = DeleteExpenseCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseCategoriesDeleteResponse$zodSchema: z.ZodType<AccountingExpenseCategoriesDeleteResponse>;
//# sourceMappingURL=accountingexpensecategoriesdeleteop.d.ts.map