import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCustomObjectsResponse } from "./getcustomobjectsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmCustomObjectsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmCustomObjectsAllGlobals$zodSchema: z.ZodType<CrmCustomObjectsAllGlobals>;
export type CrmCustomObjectsAllRequest = {
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
    object_id: string;
};
export declare const CrmCustomObjectsAllRequest$zodSchema: z.ZodType<CrmCustomObjectsAllRequest>;
export type CrmCustomObjectsAllResponseResult = GetCustomObjectsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmCustomObjectsAllResponseResult$zodSchema: z.ZodType<CrmCustomObjectsAllResponseResult>;
export type CrmCustomObjectsAllResponse = {
    Result: GetCustomObjectsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmCustomObjectsAllResponse$zodSchema: z.ZodType<CrmCustomObjectsAllResponse>;
//# sourceMappingURL=crmcustomobjectsallop.d.ts.map