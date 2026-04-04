import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomObjectSchemasResponse } from "./getcustomobjectschemasresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectSchemasAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectSchemasAllGlobals$zodSchema: z.ZodType<CrmCustomObjectSchemasAllGlobals>;
export type CrmCustomObjectSchemasAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
};
export declare const CrmCustomObjectSchemasAllRequest$zodSchema: z.ZodType<CrmCustomObjectSchemasAllRequest>;
export type CrmCustomObjectSchemasAllResponseResult = GetCustomObjectSchemasResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectSchemasAllResponseResult$zodSchema: z.ZodType<CrmCustomObjectSchemasAllResponseResult>;
export type CrmCustomObjectSchemasAllResponse = {
    Result: GetCustomObjectSchemasResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmCustomObjectSchemasAllResponse$zodSchema: z.ZodType<CrmCustomObjectSchemasAllResponse>;
//# sourceMappingURL=crmcustomobjectschemasallop.d.ts.map