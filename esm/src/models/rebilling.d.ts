import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of the rebilling process for this line item.
 */
export declare const RebillStatus: {
    readonly Pending: "pending";
    readonly Billed: "billed";
    readonly Voided: "voided";
};
/**
 * Status of the rebilling process for this line item.
 */
export type RebillStatus = OpenEnum<typeof RebillStatus>;
export declare const RebillStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    pending: "pending";
    voided: "voided";
    billed: "billed";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Rebilling metadata for this line item.
 */
export type Rebilling = {
    rebillable?: boolean | undefined;
    rebill_status?: RebillStatus | null | undefined;
    linked_transaction_id?: string | null | undefined;
    linked_transaction_line_id?: string | null | undefined;
};
export declare const Rebilling$zodSchema: z.ZodType<Rebilling>;
//# sourceMappingURL=rebilling.d.ts.map