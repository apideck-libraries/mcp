import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Line Item type
 */
export declare const LineItemType: {
    readonly ExpenseItem: "expense_item";
    readonly ExpenseAccount: "expense_account";
    readonly Other: "other";
};
/**
 * Line Item type
 */
export type LineItemType = OpenEnum<typeof LineItemType>;
export declare const LineItemType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    expense_item: "expense_item";
    expense_account: "expense_account";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=lineitemtype.d.ts.map