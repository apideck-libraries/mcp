import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetJobResponse } from "./getjobresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsJobsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsJobsOneGlobals$zodSchema: z.ZodType<AtsJobsOneGlobals>;
export type AtsJobsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AtsJobsOneRequest$zodSchema: z.ZodType<AtsJobsOneRequest>;
export type AtsJobsOneResponse = GetJobResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsJobsOneResponse$zodSchema: z.ZodType<AtsJobsOneResponse>;
//# sourceMappingURL=atsjobsoneop.d.ts.map