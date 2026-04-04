import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteJobResponse } from "./deletejobresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsJobsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsJobsDeleteGlobals$zodSchema: z.ZodType<AtsJobsDeleteGlobals>;
export type AtsJobsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AtsJobsDeleteRequest$zodSchema: z.ZodType<AtsJobsDeleteRequest>;
export type AtsJobsDeleteResponse = DeleteJobResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsJobsDeleteResponse$zodSchema: z.ZodType<AtsJobsDeleteResponse>;
//# sourceMappingURL=atsjobsdeleteop.d.ts.map