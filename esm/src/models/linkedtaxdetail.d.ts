import * as z from "zod";
export type LinkedTaxDetail = {
    type?: string | undefined;
    number?: string | null | undefined;
    is_transaction_tax?: boolean | undefined;
    is_primary_tax?: boolean | undefined;
};
export declare const LinkedTaxDetail$zodSchema: z.ZodType<LinkedTaxDetail>;
//# sourceMappingURL=linkedtaxdetail.d.ts.map