import * as z from "zod";
import { Department } from "./department.js";
/**
 * Departments
 */
export type GetDepartmentResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Department;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetDepartmentResponse$zodSchema: z.ZodType<GetDepartmentResponse>;
//# sourceMappingURL=getdepartmentresponse.d.ts.map