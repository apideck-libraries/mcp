import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
export declare const AttachmentReferenceType: {
    readonly Invoice: "invoice";
    readonly Bill: "bill";
    readonly Expense: "expense";
    readonly Quote: "quote";
};
export type AttachmentReferenceType = OpenEnum<typeof AttachmentReferenceType>;
export declare const AttachmentReferenceType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    invoice: "invoice";
    bill: "bill";
    expense: "expense";
    quote: "quote";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=attachmentreferencetype.d.ts.map