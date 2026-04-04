import * as z from "zod";
import { Lead } from "./lead.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Leads
 */
export type GetLeadsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Lead>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetLeadsResponse$zodSchema: z.ZodType<GetLeadsResponse>;
//# sourceMappingURL=getleadsresponse.d.ts.map