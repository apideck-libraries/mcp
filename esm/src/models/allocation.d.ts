import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Type of entity this payment should be attributed to.
 */
export declare const AllocationAllocationType: {
    readonly Invoice: "invoice";
    readonly Order: "order";
    readonly Expense: "expense";
    readonly CreditMemo: "credit_memo";
    readonly OverPayment: "over_payment";
    readonly PrePayment: "pre_payment";
    readonly JournalEntry: "journal_entry";
    readonly Other: "other";
    readonly Bill: "bill";
};
/**
 * Type of entity this payment should be attributed to.
 */
export type AllocationAllocationType = OpenEnum<typeof AllocationAllocationType>;
export declare const AllocationAllocationType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    invoice: "invoice";
    bill: "bill";
    expense: "expense";
    other: "other";
    credit_memo: "credit_memo";
    over_payment: "over_payment";
    pre_payment: "pre_payment";
    journal_entry: "journal_entry";
    order: "order";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Allocation = {
    id?: string | undefined;
    type?: AllocationAllocationType | undefined;
    code?: string | undefined;
    amount?: number | null | undefined;
    allocation_id?: string | undefined;
};
export declare const Allocation$zodSchema: z.ZodType<Allocation>;
export type AllocationInput = {
    id?: string | undefined;
    type?: AllocationAllocationType | undefined;
    amount?: number | null | undefined;
    allocation_id?: string | undefined;
};
export declare const AllocationInput$zodSchema: z.ZodType<AllocationInput>;
//# sourceMappingURL=allocation.d.ts.map