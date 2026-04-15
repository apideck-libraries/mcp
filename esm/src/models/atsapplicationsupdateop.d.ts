import * as z from "zod";
import { ApplicationInput } from "./application.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateApplicationResponse } from "./updateapplicationresponse.js";
export type AtsApplicationsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AtsApplicationsUpdateGlobals$zodSchema: z.ZodType<AtsApplicationsUpdateGlobals>;
export type AtsApplicationsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ApplicationInput;
};
export declare const AtsApplicationsUpdateRequest$zodSchema: z.ZodType<AtsApplicationsUpdateRequest>;
export type AtsApplicationsUpdateResponse = UpdateApplicationResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AtsApplicationsUpdateResponse$zodSchema: z.ZodType<AtsApplicationsUpdateResponse>;
//# sourceMappingURL=atsapplicationsupdateop.d.ts.map