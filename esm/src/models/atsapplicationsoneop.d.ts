import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetApplicationResponse } from "./getapplicationresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicationsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicationsOneGlobals$zodSchema: z.ZodType<AtsApplicationsOneGlobals>;
export type AtsApplicationsOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AtsApplicationsOneRequest$zodSchema: z.ZodType<AtsApplicationsOneRequest>;
export type AtsApplicationsOneResponse = GetApplicationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicationsOneResponse$zodSchema: z.ZodType<AtsApplicationsOneResponse>;
//# sourceMappingURL=atsapplicationsoneop.d.ts.map