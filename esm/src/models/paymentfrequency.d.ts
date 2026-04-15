import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Frequency of employee compensation.
 */
export declare const PaymentFrequency: {
    readonly Weekly: "weekly";
    readonly Biweekly: "biweekly";
    readonly Monthly: "monthly";
    readonly ProRata: "pro-rata";
    readonly Other: "other";
};
/**
 * Frequency of employee compensation.
 */
export type PaymentFrequency = OpenEnum<typeof PaymentFrequency>;
export declare const PaymentFrequency$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    weekly: "weekly";
    biweekly: "biweekly";
    monthly: "monthly";
    "pro-rata": "pro-rata";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=paymentfrequency.d.ts.map