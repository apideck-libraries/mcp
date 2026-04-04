import * as z from "zod";
import { ApplicantsFilter } from "./applicantsfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetApplicantsResponse } from "./getapplicantsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicantsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicantsAllGlobals$zodSchema: z.ZodType<AtsApplicantsAllGlobals>;
export type AtsApplicantsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ApplicantsFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AtsApplicantsAllRequest$zodSchema: z.ZodType<AtsApplicantsAllRequest>;
export type AtsApplicantsAllResponseResult = GetApplicantsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicantsAllResponseResult$zodSchema: z.ZodType<AtsApplicantsAllResponseResult>;
export type AtsApplicantsAllResponse = {
    Result: GetApplicantsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const AtsApplicantsAllResponse$zodSchema: z.ZodType<AtsApplicantsAllResponse>;
//# sourceMappingURL=atsapplicantsallop.d.ts.map