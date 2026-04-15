import * as z from "zod";
import { EmployeePayroll } from "./employeepayroll.js";
/**
 * EmployeePayrolls
 */
export type GetEmployeePayrollsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<EmployeePayroll>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetEmployeePayrollsResponse$zodSchema: z.ZodType<GetEmployeePayrollsResponse>;
//# sourceMappingURL=getemployeepayrollsresponse.d.ts.map