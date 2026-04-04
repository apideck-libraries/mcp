import * as z from "zod";
import { Payroll } from "./payroll.js";
/**
 * Payrolls
 */
export type GetPayrollsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Payroll>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPayrollsResponse$zodSchema: z.ZodType<GetPayrollsResponse>;
//# sourceMappingURL=getpayrollsresponse.d.ts.map