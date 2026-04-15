import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Opportunity } from "./opportunity.js";
/**
 * Opportunities
 */
export type GetOpportunitiesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Opportunity>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetOpportunitiesResponse$zodSchema: z.ZodType<GetOpportunitiesResponse>;
//# sourceMappingURL=getopportunitiesresponse.d.ts.map