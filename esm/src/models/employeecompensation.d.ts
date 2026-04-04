import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { PaymentFrequency } from "./paymentfrequency.js";
import { PaymentUnit } from "./paymentunit.js";
/**
 * The FLSA status for this compensation.
 */
export declare const FlsaStatus: {
    readonly Exempt: "exempt";
    readonly SalariedNonexempt: "salaried-nonexempt";
    readonly Nonexempt: "nonexempt";
    readonly Owner: "owner";
    readonly Other: "other";
};
/**
 * The FLSA status for this compensation.
 */
export type FlsaStatus = OpenEnum<typeof FlsaStatus>;
export declare const FlsaStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    owner: "owner";
    exempt: "exempt";
    "salaried-nonexempt": "salaried-nonexempt";
    nonexempt: "nonexempt";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EmployeeCompensation = {
    id?: string | null | undefined;
    job_id?: string | null | undefined;
    rate?: number | null | undefined;
    payment_unit?: PaymentUnit | null | undefined;
    currency?: Currency | null | undefined;
    flsa_status?: FlsaStatus | null | undefined;
    effective_date?: string | null | undefined;
    payment_frequency?: PaymentFrequency | null | undefined;
};
export declare const EmployeeCompensation$zodSchema: z.ZodType<EmployeeCompensation>;
export type EmployeeCompensationInput = {
    rate?: number | null | undefined;
    payment_unit?: PaymentUnit | null | undefined;
    currency?: Currency | null | undefined;
    flsa_status?: FlsaStatus | null | undefined;
    effective_date?: string | null | undefined;
    payment_frequency?: PaymentFrequency | null | undefined;
};
export declare const EmployeeCompensationInput$zodSchema: z.ZodType<EmployeeCompensationInput>;
//# sourceMappingURL=employeecompensation.d.ts.map