import * as z from "zod";
/**
 * An object representing a discount applied to an ecommerce order or product.
 */
export type EcommerceDiscount = {
    code?: string | null | undefined;
    amount?: string | null | undefined;
    percentage?: string | null | undefined;
};
export declare const EcommerceDiscount$zodSchema: z.ZodType<EcommerceDiscount>;
//# sourceMappingURL=ecommercediscount.d.ts.map