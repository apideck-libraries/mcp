import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetJobsResponse } from "./getjobsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsJobsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsJobsAllGlobals$zodSchema: z.ZodType<AtsJobsAllGlobals>;
export type AtsJobsAllRequest = {
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
export declare const AtsJobsAllRequest$zodSchema: z.ZodType<AtsJobsAllRequest>;
export type AtsJobsAllResponseResult = GetJobsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsJobsAllResponseResult$zodSchema: z.ZodType<AtsJobsAllResponseResult>;
export type AtsJobsAllResponse = {
    Result: GetJobsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AtsJobsAllResponse$zodSchema: z.ZodType<AtsJobsAllResponse>;
//# sourceMappingURL=atsjobsallop.d.ts.map