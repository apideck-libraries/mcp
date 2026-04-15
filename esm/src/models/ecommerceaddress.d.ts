import * as z from "zod";
/**
 * An object representing a shipping or billing address.
 */
export type EcommerceAddress = {
    line1?: string | null | undefined;
    line2?: string | null | undefined;
    company_name?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    postal_code?: string | null | undefined;
    country?: string | null | undefined;
};
export declare const EcommerceAddress$zodSchema: z.ZodType<EcommerceAddress>;
//# sourceMappingURL=ecommerceaddress.d.ts.map