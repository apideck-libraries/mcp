import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Status of payment
 */
export declare const PaymentStatus: {
    readonly Draft: "draft";
    readonly Authorised: "authorised";
    readonly Rejected: "rejected";
    readonly Paid: "paid";
    readonly Voided: "voided";
    readonly Deleted: "deleted";
};
/**
 * Status of payment
 */
export type PaymentStatus = OpenEnum<typeof PaymentStatus>;
export declare const PaymentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    rejected: "rejected";
    draft: "draft";
    authorised: "authorised";
    paid: "paid";
    voided: "voided";
    deleted: "deleted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=paymentstatus.d.ts.map