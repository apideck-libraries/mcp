import * as z from "zod";
export type InvoicesFilter = {
    updated_since?: string | undefined;
    created_since?: string | undefined;
    number?: string | undefined;
    supplier_id?: string | undefined;
};
export declare const InvoicesFilter$zodSchema: z.ZodType<InvoicesFilter>;
//# sourceMappingURL=invoicesfilter.d.ts.map