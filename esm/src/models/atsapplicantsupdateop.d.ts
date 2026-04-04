import * as z from "zod";
import { ApplicantInput } from "./applicant.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateApplicantResponse } from "./updateapplicantresponse.js";
export type AtsApplicantsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicantsUpdateGlobals$zodSchema: z.ZodType<AtsApplicantsUpdateGlobals>;
export type AtsApplicantsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ApplicantInput;
};
export declare const AtsApplicantsUpdateRequest$zodSchema: z.ZodType<AtsApplicantsUpdateRequest>;
export type AtsApplicantsUpdateResponse = UpdateApplicantResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicantsUpdateResponse$zodSchema: z.ZodType<AtsApplicantsUpdateResponse>;
//# sourceMappingURL=atsapplicantsupdateop.d.ts.map