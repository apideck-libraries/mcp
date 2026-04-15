import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPurchaseOrdersResponse } from "./getpurchaseordersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { PurchaseOrdersFilter } from "./purchaseordersfilter.js";
import { PurchaseOrdersSort } from "./purchaseorderssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingPurchaseOrdersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingPurchaseOrdersAllGlobals$zodSchema: z.ZodType<AccountingPurchaseOrdersAllGlobals>;
export type AccountingPurchaseOrdersAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    cursor?: string | null | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    limit?: number | undefined;
    filter?: PurchaseOrdersFilter | undefined;
    sort?: PurchaseOrdersSort | undefined;
};
export declare const AccountingPurchaseOrdersAllRequest$zodSchema: z.ZodType<AccountingPurchaseOrdersAllRequest>;
export type AccountingPurchaseOrdersAllResponseResult = GetPurchaseOrdersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingPurchaseOrdersAllResponseResult$zodSchema: z.ZodType<AccountingPurchaseOrdersAllResponseResult>;
export type AccountingPurchaseOrdersAllResponse = {
    Result: GetPurchaseOrdersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AccountingPurchaseOrdersAllResponse$zodSchema: z.ZodType<AccountingPurchaseOrdersAllResponse>;
//# sourceMappingURL=accountingpurchaseordersallop.d.ts.map