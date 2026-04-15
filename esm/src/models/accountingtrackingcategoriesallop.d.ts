import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTrackingCategoriesResponse } from "./gettrackingcategoriesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTrackingCategoriesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTrackingCategoriesAllGlobals$zodSchema: z.ZodType<AccountingTrackingCategoriesAllGlobals>;
export type AccountingTrackingCategoriesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingTrackingCategoriesAllRequest$zodSchema: z.ZodType<AccountingTrackingCategoriesAllRequest>;
export type AccountingTrackingCategoriesAllResponseResult = GetTrackingCategoriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTrackingCategoriesAllResponseResult$zodSchema: z.ZodType<AccountingTrackingCategoriesAllResponseResult>;
export type AccountingTrackingCategoriesAllResponse = {
    Result: GetTrackingCategoriesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingTrackingCategoriesAllResponse$zodSchema: z.ZodType<AccountingTrackingCategoriesAllResponse>;
//# sourceMappingURL=accountingtrackingcategoriesallop.d.ts.map