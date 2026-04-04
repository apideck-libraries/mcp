import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetExpenseCategoryResponse } from "./getexpensecategoryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingExpenseCategoriesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingExpenseCategoriesOneGlobals$zodSchema: z.ZodType<AccountingExpenseCategoriesOneGlobals>;
export type AccountingExpenseCategoriesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingExpenseCategoriesOneRequest$zodSchema: z.ZodType<AccountingExpenseCategoriesOneRequest>;
export type AccountingExpenseCategoriesOneResponse = GetExpenseCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingExpenseCategoriesOneResponse$zodSchema: z.ZodType<AccountingExpenseCategoriesOneResponse>;
//# sourceMappingURL=accountingexpensecategoriesoneop.d.ts.map