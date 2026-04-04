import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Refund } from "./refund.js";
/**
 * Refunds
 */
export type GetRefundsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Refund>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetRefundsResponse$zodSchema: z.ZodType<GetRefundsResponse>;
//# sourceMappingURL=getrefundsresponse.d.ts.map