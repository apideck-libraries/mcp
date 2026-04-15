import * as z from "zod";
import { ApplicantInput } from "./applicant.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateApplicantResponse } from "./createapplicantresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicantsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicantsAddGlobals$zodSchema: z.ZodType<AtsApplicantsAddGlobals>;
export type AtsApplicantsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: ApplicantInput;
};
export declare const AtsApplicantsAddRequest$zodSchema: z.ZodType<AtsApplicantsAddRequest>;
export type AtsApplicantsAddResponse = CreateApplicantResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicantsAddResponse$zodSchema: z.ZodType<AtsApplicantsAddResponse>;
//# sourceMappingURL=atsapplicantsaddop.d.ts.map