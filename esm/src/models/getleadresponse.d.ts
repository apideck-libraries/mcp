import * as z from "zod";
import { Lead } from "./lead.js";
/**
 * Lead
 */
export type GetLeadResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Lead;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetLeadResponse$zodSchema: z.ZodType<GetLeadResponse>;
//# sourceMappingURL=getleadresponse.d.ts.map