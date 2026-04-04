import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Opportunity created
 */
export type CreateOpportunityResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateOpportunityResponse$zodSchema: z.ZodType<CreateOpportunityResponse>;
//# sourceMappingURL=createopportunityresponse.d.ts.map