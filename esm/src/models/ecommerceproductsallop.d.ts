import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { EcommerceProductsFilter } from "./ecommerceproductsfilter.js";
import { GetProductsResponse } from "./getproductsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceProductsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceProductsAllGlobals$zodSchema: z.ZodType<EcommerceProductsAllGlobals>;
export type EcommerceProductsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
    filter?: EcommerceProductsFilter | undefined;
};
export declare const EcommerceProductsAllRequest$zodSchema: z.ZodType<EcommerceProductsAllRequest>;
export type EcommerceProductsAllResponseResult = GetProductsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceProductsAllResponseResult$zodSchema: z.ZodType<EcommerceProductsAllResponseResult>;
export type EcommerceProductsAllResponse = {
    Result: GetProductsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const EcommerceProductsAllResponse$zodSchema: z.ZodType<EcommerceProductsAllResponse>;
//# sourceMappingURL=ecommerceproductsallop.d.ts.map