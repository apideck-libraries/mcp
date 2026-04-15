import * as z from "zod";
import { EmployeePayroll } from "./employeepayroll.js";
/**
 * Payrolls
 */
export type GetEmployeePayrollResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: EmployeePayroll;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetEmployeePayrollResponse$zodSchema: z.ZodType<GetEmployeePayrollResponse>;
//# sourceMappingURL=getemployeepayrollresponse.d.ts.map