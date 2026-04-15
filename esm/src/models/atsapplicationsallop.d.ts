import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetApplicationsResponse } from "./getapplicationsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicationsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicationsAllGlobals$zodSchema: z.ZodType<AtsApplicationsAllGlobals>;
export type AtsApplicationsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    limit?: number | undefined;
};
export declare const AtsApplicationsAllRequest$zodSchema: z.ZodType<AtsApplicationsAllRequest>;
export type AtsApplicationsAllResponseResult = GetApplicationsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicationsAllResponseResult$zodSchema: z.ZodType<AtsApplicationsAllResponseResult>;
export type AtsApplicationsAllResponse = {
    Result: GetApplicationsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AtsApplicationsAllResponse$zodSchema: z.ZodType<AtsApplicationsAllResponse>;
//# sourceMappingURL=atsapplicationsallop.d.ts.map