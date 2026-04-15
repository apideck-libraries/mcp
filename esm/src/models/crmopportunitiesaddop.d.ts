import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateOpportunityResponse } from "./createopportunityresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { OpportunityInput } from "./opportunityinput.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmOpportunitiesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmOpportunitiesAddGlobals$zodSchema: z.ZodType<CrmOpportunitiesAddGlobals>;
export type CrmOpportunitiesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: OpportunityInput;
};
export declare const CrmOpportunitiesAddRequest$zodSchema: z.ZodType<CrmOpportunitiesAddRequest>;
export type CrmOpportunitiesAddResponse = CreateOpportunityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmOpportunitiesAddResponse$zodSchema: z.ZodType<CrmOpportunitiesAddResponse>;
//# sourceMappingURL=crmopportunitiesaddop.d.ts.map