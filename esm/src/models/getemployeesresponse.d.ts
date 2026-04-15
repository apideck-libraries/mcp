import * as z from "zod";
import { Employee } from "./employee.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Employees
 */
export type GetEmployeesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Employee>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetEmployeesResponse$zodSchema: z.ZodType<GetEmployeesResponse>;
//# sourceMappingURL=getemployeesresponse.d.ts.map