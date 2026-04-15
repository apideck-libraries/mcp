import * as z from "zod";
import { Payroll } from "./payroll.js";
/**
 * Payrolls
 */
export type GetPayrollResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Payroll;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetPayrollResponse$zodSchema: z.ZodType<GetPayrollResponse>;
//# sourceMappingURL=getpayrollresponse.d.ts.map