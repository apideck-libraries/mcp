import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CategoriesFilter } from "./categoriesfilter.js";
import { GetCategoriesResponse } from "./getcategoriesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCategoriesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCategoriesAllGlobals$zodSchema: z.ZodType<AccountingCategoriesAllGlobals>;
export type AccountingCategoriesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    fields?: string | null | undefined;
    filter?: CategoriesFilter | undefined;
};
export declare const AccountingCategoriesAllRequest$zodSchema: z.ZodType<AccountingCategoriesAllRequest>;
export type AccountingCategoriesAllResponseResult = GetCategoriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCategoriesAllResponseResult$zodSchema: z.ZodType<AccountingCategoriesAllResponseResult>;
export type AccountingCategoriesAllResponse = {
    Result: GetCategoriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingCategoriesAllResponse$zodSchema: z.ZodType<AccountingCategoriesAllResponse>;
//# sourceMappingURL=accountingcategoriesallop.d.ts.map