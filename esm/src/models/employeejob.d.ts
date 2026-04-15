import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { PaymentUnit } from "./paymentunit.js";
/**
 * Indicates the status of the job.
 */
export declare const EmployeeJobStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Other: "other";
};
/**
 * Indicates the status of the job.
 */
export type EmployeeJobStatus = OpenEnum<typeof EmployeeJobStatus>;
export declare const EmployeeJobStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EmployeeJob = {
    id?: string | null | undefined;
    employee_id?: string | null | undefined;
    title?: string | null | undefined;
    role?: string | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    compensation_rate?: number | null | undefined;
    currency?: Currency | null | undefined;
    payment_unit?: PaymentUnit | null | undefined;
    hired_at?: string | null | undefined;
    is_primary?: boolean | null | undefined;
    is_manager?: boolean | null | undefined;
    status?: EmployeeJobStatus | null | undefined;
    location?: Address | undefined;
};
export declare const EmployeeJob$zodSchema: z.ZodType<EmployeeJob>;
export type EmployeeJobInput = {
    title?: string | null | undefined;
    role?: string | null | undefined;
    start_date?: string | null | undefined;
    end_date?: string | null | undefined;
    compensation_rate?: number | null | undefined;
    currency?: Currency | null | undefined;
    payment_unit?: PaymentUnit | null | undefined;
    hired_at?: string | null | undefined;
    is_primary?: boolean | null | undefined;
    is_manager?: boolean | null | undefined;
    status?: EmployeeJobStatus | null | undefined;
    location?: Address | undefined;
};
export declare const EmployeeJobInput$zodSchema: z.ZodType<EmployeeJobInput>;
//# sourceMappingURL=employeejob.d.ts.map