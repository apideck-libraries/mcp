import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateJobResponse } from "./createjobresponse.js";
import { JobInput } from "./job.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsJobsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsJobsAddGlobals$zodSchema: z.ZodType<AtsJobsAddGlobals>;
export type AtsJobsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: JobInput;
};
export declare const AtsJobsAddRequest$zodSchema: z.ZodType<AtsJobsAddRequest>;
export type AtsJobsAddResponse = CreateJobResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsJobsAddResponse$zodSchema: z.ZodType<AtsJobsAddResponse>;
//# sourceMappingURL=atsjobsaddop.d.ts.map