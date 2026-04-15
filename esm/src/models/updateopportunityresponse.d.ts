import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Opportunity updated
 */
export type UpdateOpportunityResponse = {
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
export declare const UpdateOpportunityResponse$zodSchema: z.ZodType<UpdateOpportunityResponse>;
//# sourceMappingURL=updateopportunityresponse.d.ts.map