import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CategoriesFilter } from "./categoriesfilter.js";
import { GetCategoryResponse } from "./getcategoryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCategoriesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCategoriesOneGlobals$zodSchema: z.ZodType<AccountingCategoriesOneGlobals>;
export type AccountingCategoriesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
    filter?: CategoriesFilter | undefined;
};
export declare const AccountingCategoriesOneRequest$zodSchema: z.ZodType<AccountingCategoriesOneRequest>;
export type AccountingCategoriesOneResponse = GetCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCategoriesOneResponse$zodSchema: z.ZodType<AccountingCategoriesOneResponse>;
//# sourceMappingURL=accountingcategoriesoneop.d.ts.map