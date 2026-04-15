import * as z from "zod";
import { Opportunity } from "./opportunity.js";
/**
 * Opportunity
 */
export type GetOpportunityResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Opportunity;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetOpportunityResponse$zodSchema: z.ZodType<GetOpportunityResponse>;
//# sourceMappingURL=getopportunityresponse.d.ts.map