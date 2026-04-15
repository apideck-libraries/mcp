import * as z from "zod";
import { Bill } from "./bill.js";
/**
 * Bill
 */
export type GetBillResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Bill;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBillResponse$zodSchema: z.ZodType<GetBillResponse>;
//# sourceMappingURL=getbillresponse.d.ts.map