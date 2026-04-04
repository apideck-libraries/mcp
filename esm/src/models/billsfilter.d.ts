import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Filter by bill status
 */
export declare const BillsFilterStatus: {
    readonly Paid: "paid";
    readonly Unpaid: "unpaid";
    readonly PartiallyPaid: "partially_paid";
};
/**
 * Filter by bill status
 */
export type BillsFilterStatus = OpenEnum<typeof BillsFilterStatus>;
export declare const BillsFilterStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    paid: "paid";
    partially_paid: "partially_paid";
    unpaid: "unpaid";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type BillsFilter = {
    updated_since?: string | undefined;
    status?: BillsFilterStatus | undefined;
};
export declare const BillsFilter$zodSchema: z.ZodType<BillsFilter>;
//# sourceMappingURL=billsfilter.d.ts.map