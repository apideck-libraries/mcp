import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { EcommerceOrdersFilter } from "./ecommerceordersfilter.js";
import { GetEcommerceOrdersResponse } from "./getecommerceordersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { OrdersSort } from "./orderssort.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceOrdersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceOrdersAllGlobals$zodSchema: z.ZodType<EcommerceOrdersAllGlobals>;
export type EcommerceOrdersAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: EcommerceOrdersFilter | undefined;
    sort?: OrdersSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const EcommerceOrdersAllRequest$zodSchema: z.ZodType<EcommerceOrdersAllRequest>;
export type EcommerceOrdersAllResponseResult = GetEcommerceOrdersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceOrdersAllResponseResult$zodSchema: z.ZodType<EcommerceOrdersAllResponseResult>;
export type EcommerceOrdersAllResponse = {
    Result: GetEcommerceOrdersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const EcommerceOrdersAllResponse$zodSchema: z.ZodType<EcommerceOrdersAllResponse>;
//# sourceMappingURL=ecommerceordersallop.d.ts.map