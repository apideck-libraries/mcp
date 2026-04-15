import * as z from "zod";
import { Refund } from "./refund.js";
/**
 * Refund
 */
export type GetRefundResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Refund;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetRefundResponse$zodSchema: z.ZodType<GetRefundResponse>;
//# sourceMappingURL=getrefundresponse.d.ts.map