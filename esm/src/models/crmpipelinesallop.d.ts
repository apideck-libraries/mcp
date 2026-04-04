import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetPipelinesResponse } from "./getpipelinesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmPipelinesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmPipelinesAllGlobals$zodSchema: z.ZodType<CrmPipelinesAllGlobals>;
export type CrmPipelinesAllRequest = {
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
};
export declare const CrmPipelinesAllRequest$zodSchema: z.ZodType<CrmPipelinesAllRequest>;
export type CrmPipelinesAllResponseResult = GetPipelinesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmPipelinesAllResponseResult$zodSchema: z.ZodType<CrmPipelinesAllResponseResult>;
export type CrmPipelinesAllResponse = {
    Result: GetPipelinesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmPipelinesAllResponse$zodSchema: z.ZodType<CrmPipelinesAllResponse>;
//# sourceMappingURL=crmpipelinesallop.d.ts.map