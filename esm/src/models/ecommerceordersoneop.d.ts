import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetEcommerceOrderResponse } from "./getecommerceorderresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceOrdersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceOrdersOneGlobals$zodSchema: z.ZodType<EcommerceOrdersOneGlobals>;
export type EcommerceOrdersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const EcommerceOrdersOneRequest$zodSchema: z.ZodType<EcommerceOrdersOneRequest>;
export type EcommerceOrdersOneResponse = GetEcommerceOrderResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceOrdersOneResponse$zodSchema: z.ZodType<EcommerceOrdersOneResponse>;
//# sourceMappingURL=ecommerceordersoneop.d.ts.map