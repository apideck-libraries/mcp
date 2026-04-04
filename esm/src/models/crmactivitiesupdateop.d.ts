import * as z from "zod";
import { ActivityInput } from "./activity.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateActivityResponse } from "./updateactivityresponse.js";
export type CrmActivitiesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmActivitiesUpdateGlobals$zodSchema: z.ZodType<CrmActivitiesUpdateGlobals>;
export type CrmActivitiesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: ActivityInput;
};
export declare const CrmActivitiesUpdateRequest$zodSchema: z.ZodType<CrmActivitiesUpdateRequest>;
export type CrmActivitiesUpdateResponse = UpdateActivityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmActivitiesUpdateResponse$zodSchema: z.ZodType<CrmActivitiesUpdateResponse>;
//# sourceMappingURL=crmactivitiesupdateop.d.ts.map