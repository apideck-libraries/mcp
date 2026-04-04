import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteApplicantResponse } from "./deleteapplicantresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicantsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicantsDeleteGlobals$zodSchema: z.ZodType<AtsApplicantsDeleteGlobals>;
export type AtsApplicantsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AtsApplicantsDeleteRequest$zodSchema: z.ZodType<AtsApplicantsDeleteRequest>;
export type AtsApplicantsDeleteResponse = DeleteApplicantResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicantsDeleteResponse$zodSchema: z.ZodType<AtsApplicantsDeleteResponse>;
//# sourceMappingURL=atsapplicantsdeleteop.d.ts.map