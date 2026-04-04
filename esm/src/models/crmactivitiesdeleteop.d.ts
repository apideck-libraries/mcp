import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteActivityResponse } from "./deleteactivityresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmActivitiesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmActivitiesDeleteGlobals$zodSchema: z.ZodType<CrmActivitiesDeleteGlobals>;
export type CrmActivitiesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmActivitiesDeleteRequest$zodSchema: z.ZodType<CrmActivitiesDeleteRequest>;
export type CrmActivitiesDeleteResponse = DeleteActivityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmActivitiesDeleteResponse$zodSchema: z.ZodType<CrmActivitiesDeleteResponse>;
//# sourceMappingURL=crmactivitiesdeleteop.d.ts.map