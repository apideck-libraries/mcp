import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetProductResponse } from "./getproductresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceProductsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceProductsOneGlobals$zodSchema: z.ZodType<EcommerceProductsOneGlobals>;
export type EcommerceProductsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const EcommerceProductsOneRequest$zodSchema: z.ZodType<EcommerceProductsOneRequest>;
export type EcommerceProductsOneResponse = GetProductResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceProductsOneResponse$zodSchema: z.ZodType<EcommerceProductsOneResponse>;
//# sourceMappingURL=ecommerceproductsoneop.d.ts.map