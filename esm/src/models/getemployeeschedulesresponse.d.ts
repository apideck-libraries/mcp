import * as z from "zod";
import { EmployeeSchedules } from "./employeeschedules.js";
/**
 * EmployeeSchedules
 */
export type GetEmployeeSchedulesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: EmployeeSchedules;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetEmployeeSchedulesResponse$zodSchema: z.ZodType<GetEmployeeSchedulesResponse>;
//# sourceMappingURL=getemployeeschedulesresponse.d.ts.map