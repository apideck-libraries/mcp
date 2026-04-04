import * as z from "zod";
import { ActivityInput } from "./activity.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateActivityResponse } from "./createactivityresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmActivitiesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmActivitiesAddGlobals$zodSchema: z.ZodType<CrmActivitiesAddGlobals>;
export type CrmActivitiesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: ActivityInput;
};
export declare const CrmActivitiesAddRequest$zodSchema: z.ZodType<CrmActivitiesAddRequest>;
export type CrmActivitiesAddResponse = CreateActivityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmActivitiesAddResponse$zodSchema: z.ZodType<CrmActivitiesAddResponse>;
//# sourceMappingURL=crmactivitiesaddop.d.ts.map