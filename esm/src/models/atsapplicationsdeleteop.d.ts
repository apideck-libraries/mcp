import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteApplicationResponse } from "./deleteapplicationresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AtsApplicationsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicationsDeleteGlobals$zodSchema: z.ZodType<AtsApplicationsDeleteGlobals>;
export type AtsApplicationsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AtsApplicationsDeleteRequest$zodSchema: z.ZodType<AtsApplicationsDeleteRequest>;
export type AtsApplicationsDeleteResponse = DeleteApplicationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicationsDeleteResponse$zodSchema: z.ZodType<AtsApplicationsDeleteResponse>;
//# sourceMappingURL=atsapplicationsdeleteop.d.ts.map