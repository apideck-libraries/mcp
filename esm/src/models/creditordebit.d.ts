import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Whether the amount is a credit or debit.
 */
export declare const CreditOrDebit: {
    readonly Credit: "credit";
    readonly Debit: "debit";
};
/**
 * Whether the amount is a credit or debit.
 */
export type CreditOrDebit = OpenEnum<typeof CreditOrDebit>;
export declare const CreditOrDebit$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    credit: "credit";
    debit: "debit";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=creditordebit.d.ts.map