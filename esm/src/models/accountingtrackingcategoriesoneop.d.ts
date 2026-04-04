import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTrackingCategoryResponse } from "./gettrackingcategoryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTrackingCategoriesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTrackingCategoriesOneGlobals$zodSchema: z.ZodType<AccountingTrackingCategoriesOneGlobals>;
export type AccountingTrackingCategoriesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingTrackingCategoriesOneRequest$zodSchema: z.ZodType<AccountingTrackingCategoriesOneRequest>;
export type AccountingTrackingCategoriesOneResponse = GetTrackingCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTrackingCategoriesOneResponse$zodSchema: z.ZodType<AccountingTrackingCategoriesOneResponse>;
//# sourceMappingURL=accountingtrackingcategoriesoneop.d.ts.map