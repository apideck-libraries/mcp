import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetOpportunitiesResponse } from "./getopportunitiesresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { OpportunitiesFilter } from "./opportunitiesfilter.js";
import { OpportunitiesSort } from "./opportunitiessort.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmOpportunitiesAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmOpportunitiesAllGlobals$zodSchema: z.ZodType<CrmOpportunitiesAllGlobals>;
export type CrmOpportunitiesAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: OpportunitiesFilter | undefined;
    sort?: OpportunitiesSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const CrmOpportunitiesAllRequest$zodSchema: z.ZodType<CrmOpportunitiesAllRequest>;
export type CrmOpportunitiesAllResponseResult = GetOpportunitiesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmOpportunitiesAllResponseResult$zodSchema: z.ZodType<CrmOpportunitiesAllResponseResult>;
export type CrmOpportunitiesAllResponse = {
    Result: GetOpportunitiesResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const CrmOpportunitiesAllResponse$zodSchema: z.ZodType<CrmOpportunitiesAllResponse>;
//# sourceMappingURL=crmopportunitiesallop.d.ts.map