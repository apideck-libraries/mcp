import * as z from "zod";
import { Benefit } from "./benefit.js";
import { Deduction } from "./deduction.js";
import { Tax } from "./tax.js";
export type Compensation = {
    employee_id: string | null;
    net_pay?: number | null | undefined;
    gross_pay?: number | null | undefined;
    taxes?: Array<Tax> | null | undefined;
    deductions?: Array<Deduction> | null | undefined;
    benefits?: Array<Benefit> | null | undefined;
};
export declare const Compensation$zodSchema: z.ZodType<Compensation>;
//# sourceMappingURL=compensation.d.ts.map