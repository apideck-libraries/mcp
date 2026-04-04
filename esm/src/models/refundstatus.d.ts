import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of refund. Maps to: QBO (limited status), NetSuite CashRefund status, Sage Intacct state (draft/posted/voided), Zoho Books vis_state.
 */
export declare const RefundStatus: {
    readonly Draft: "draft";
    readonly Authorised: "authorised";
    readonly Posted: "posted";
    readonly Paid: "paid";
    readonly Voided: "voided";
    readonly Deleted: "deleted";
};
/**
 * Status of refund. Maps to: QBO (limited status), NetSuite CashRefund status, Sage Intacct state (draft/posted/voided), Zoho Books vis_state.
 */
export type RefundStatus = OpenEnum<typeof RefundStatus>;
export declare const RefundStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    draft: "draft";
    authorised: "authorised";
    paid: "paid";
    voided: "voided";
    deleted: "deleted";
    posted: "posted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=refundstatus.d.ts.map