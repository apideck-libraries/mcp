import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { JobInput } from "./job.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateJobResponse } from "./updatejobresponse.js";
export type AtsJobsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsJobsUpdateGlobals$zodSchema: z.ZodType<AtsJobsUpdateGlobals>;
export type AtsJobsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: JobInput;
};
export declare const AtsJobsUpdateRequest$zodSchema: z.ZodType<AtsJobsUpdateRequest>;
export type AtsJobsUpdateResponse = UpdateJobResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsJobsUpdateResponse$zodSchema: z.ZodType<AtsJobsUpdateResponse>;
//# sourceMappingURL=atsjobsupdateop.d.ts.map