import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { EcommerceCustomersFilter } from "./ecommercecustomersfilter.js";
import { GetEcommerceCustomersResponse } from "./getecommercecustomersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceCustomersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceCustomersAllGlobals$zodSchema: z.ZodType<EcommerceCustomersAllGlobals>;
export type EcommerceCustomersAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: EcommerceCustomersFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const EcommerceCustomersAllRequest$zodSchema: z.ZodType<EcommerceCustomersAllRequest>;
export type EcommerceCustomersAllResponseResult = GetEcommerceCustomersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceCustomersAllResponseResult$zodSchema: z.ZodType<EcommerceCustomersAllResponseResult>;
export type EcommerceCustomersAllResponse = {
    Result: GetEcommerceCustomersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const EcommerceCustomersAllResponse$zodSchema: z.ZodType<EcommerceCustomersAllResponse>;
//# sourceMappingURL=ecommercecustomersallop.d.ts.map