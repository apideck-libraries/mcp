import * as z from "zod";
import { ApplicationInput } from "./application.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateApplicationResponse } from "./createapplicationresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicationsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicationsAddGlobals$zodSchema: z.ZodType<AtsApplicationsAddGlobals>;
export type AtsApplicationsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: ApplicationInput;
};
export declare const AtsApplicationsAddRequest$zodSchema: z.ZodType<AtsApplicationsAddRequest>;
export type AtsApplicationsAddResponse = CreateApplicationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicationsAddResponse$zodSchema: z.ZodType<AtsApplicationsAddResponse>;
//# sourceMappingURL=atsapplicationsaddop.d.ts.map