import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { OpportunityInput } from "./opportunityinput.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateOpportunityResponse } from "./updateopportunityresponse.js";
export type CrmOpportunitiesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmOpportunitiesUpdateGlobals$zodSchema: z.ZodType<CrmOpportunitiesUpdateGlobals>;
export type CrmOpportunitiesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: OpportunityInput;
};
export declare const CrmOpportunitiesUpdateRequest$zodSchema: z.ZodType<CrmOpportunitiesUpdateRequest>;
export type CrmOpportunitiesUpdateResponse = UpdateOpportunityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmOpportunitiesUpdateResponse$zodSchema: z.ZodType<CrmOpportunitiesUpdateResponse>;
//# sourceMappingURL=crmopportunitiesupdateop.d.ts.map