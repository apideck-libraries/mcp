import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetEcommerceCustomerResponse } from "./getecommercecustomerresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceCustomersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceCustomersOneGlobals$zodSchema: z.ZodType<EcommerceCustomersOneGlobals>;
export type EcommerceCustomersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const EcommerceCustomersOneRequest$zodSchema: z.ZodType<EcommerceCustomersOneRequest>;
export type EcommerceCustomersOneResponse = GetEcommerceCustomerResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceCustomersOneResponse$zodSchema: z.ZodType<EcommerceCustomersOneResponse>;
//# sourceMappingURL=ecommercecustomersoneop.d.ts.map