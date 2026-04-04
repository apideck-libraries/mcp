import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetActivityResponse } from "./getactivityresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmActivitiesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmActivitiesOneGlobals$zodSchema: z.ZodType<CrmActivitiesOneGlobals>;
export type CrmActivitiesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const CrmActivitiesOneRequest$zodSchema: z.ZodType<CrmActivitiesOneRequest>;
export type CrmActivitiesOneResponse = GetActivityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmActivitiesOneResponse$zodSchema: z.ZodType<CrmActivitiesOneResponse>;
//# sourceMappingURL=crmactivitiesoneop.d.ts.map