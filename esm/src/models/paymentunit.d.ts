import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Unit of measurement for employee compensation.
 */
export declare const PaymentUnit: {
    readonly Hour: "hour";
    readonly Week: "week";
    readonly Month: "month";
    readonly Year: "year";
    readonly Paycheck: "paycheck";
    readonly Other: "other";
};
/**
 * Unit of measurement for employee compensation.
 */
export type PaymentUnit = OpenEnum<typeof PaymentUnit>;
export declare const PaymentUnit$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    month: "month";
    year: "year";
    other: "other";
    hour: "hour";
    week: "week";
    paycheck: "paycheck";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=paymentunit.d.ts.map