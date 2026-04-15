import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetStoreResponse } from "./getstoreresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type EcommerceStoresOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const EcommerceStoresOneGlobals$zodSchema: z.ZodType<EcommerceStoresOneGlobals>;
export type EcommerceStoresOneRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const EcommerceStoresOneRequest$zodSchema: z.ZodType<EcommerceStoresOneRequest>;
export type EcommerceStoresOneResponse = GetStoreResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const EcommerceStoresOneResponse$zodSchema: z.ZodType<EcommerceStoresOneResponse>;
//# sourceMappingURL=ecommercestoresoneop.d.ts.map