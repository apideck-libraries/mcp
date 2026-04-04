import * as z from "zod";
import { ActivitiesFilter } from "./activitiesfilter.js";
import { ActivitiesSort } from "./activitiessort.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetActivitiesResponse } from "./getactivitiesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmActivitiesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmActivitiesAllGlobals$zodSchema: z.ZodType<CrmActivitiesAllGlobals>;
export type CrmActivitiesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ActivitiesFilter | undefined;
    sort?: ActivitiesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmActivitiesAllRequest$zodSchema: z.ZodType<CrmActivitiesAllRequest>;
export type CrmActivitiesAllResponseResult = GetActivitiesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmActivitiesAllResponseResult$zodSchema: z.ZodType<CrmActivitiesAllResponseResult>;
export type CrmActivitiesAllResponse = {
    Result: GetActivitiesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmActivitiesAllResponse$zodSchema: z.ZodType<CrmActivitiesAllResponse>;
//# sourceMappingURL=crmactivitiesallop.d.ts.map