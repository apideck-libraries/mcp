import * as z from "zod";
import { Employee } from "./employee.js";
import { Schedule } from "./schedule.js";
export type EmployeeSchedules = {
    employee?: Employee | undefined;
    schedules?: Array<Schedule> | null | undefined;
};
export declare const EmployeeSchedules$zodSchema: z.ZodType<EmployeeSchedules>;
//# sourceMappingURL=employeeschedules.d.ts.map