import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetApplicantResponse } from "./getapplicantresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicantsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicantsOneGlobals$zodSchema: z.ZodType<AtsApplicantsOneGlobals>;
export type AtsApplicantsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AtsApplicantsOneRequest$zodSchema: z.ZodType<AtsApplicantsOneRequest>;
export type AtsApplicantsOneResponse = GetApplicantResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicantsOneResponse$zodSchema: z.ZodType<AtsApplicantsOneResponse>;
//# sourceMappingURL=atsapplicantsoneop.d.ts.map