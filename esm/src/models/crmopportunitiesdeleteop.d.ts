import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteOpportunityResponse } from "./deleteopportunityresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type CrmOpportunitiesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const CrmOpportunitiesDeleteGlobals$zodSchema: z.ZodType<CrmOpportunitiesDeleteGlobals>;
export type CrmOpportunitiesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const CrmOpportunitiesDeleteRequest$zodSchema: z.ZodType<CrmOpportunitiesDeleteRequest>;
export type CrmOpportunitiesDeleteResponse = DeleteOpportunityResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const CrmOpportunitiesDeleteResponse$zodSchema: z.ZodType<CrmOpportunitiesDeleteResponse>;
//# sourceMappingURL=crmopportunitiesdeleteop.d.ts.map