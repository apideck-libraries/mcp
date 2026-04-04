import * as z from "zod";
import { Employee } from "./employee.js";
/**
 * Employees
 */
export type GetEmployeeResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Employee;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetEmployeeResponse$zodSchema: z.ZodType<GetEmployeeResponse>;
//# sourceMappingURL=getemployeeresponse.d.ts.map