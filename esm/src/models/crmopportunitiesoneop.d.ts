import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetOpportunityResponse } from "./getopportunityresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmOpportunitiesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmOpportunitiesOneGlobals$zodSchema: z.ZodType<CrmOpportunitiesOneGlobals>;
export type CrmOpportunitiesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const CrmOpportunitiesOneRequest$zodSchema: z.ZodType<CrmOpportunitiesOneRequest>;
export type CrmOpportunitiesOneResponse = GetOpportunityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmOpportunitiesOneResponse$zodSchema: z.ZodType<CrmOpportunitiesOneResponse>;
//# sourceMappingURL=crmopportunitiesoneop.d.ts.map