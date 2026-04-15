import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { SortDirection } from "./sortdirection.js";
/**
 * The field on which to sort the Payments
 */
export declare const PaymentsSortBy: {
    readonly UpdatedAt: "updated_at";
    readonly CreatedAt: "created_at";
};
/**
 * The field on which to sort the Payments
 */
export type PaymentsSortBy = OpenEnum<typeof PaymentsSortBy>;
export declare const PaymentsSortBy$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    updated_at: "updated_at";
    created_at: "created_at";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PaymentsSort = {
    by?: PaymentsSortBy | undefined;
    direction?: SortDirection | undefined;
};
export declare const PaymentsSort$zodSchema: z.ZodType<PaymentsSort>;
//# sourceMappingURL=paymentssort.d.ts.map