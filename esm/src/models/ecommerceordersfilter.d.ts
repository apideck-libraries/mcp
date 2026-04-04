import * as z from "zod";
export type EcommerceOrdersFilter = {
    email?: string | undefined;
    customer_id?: string | undefined;
    updated_since?: string | undefined;
    created_since?: string | undefined;
};
export declare const EcommerceOrdersFilter$zodSchema: z.ZodType<EcommerceOrdersFilter>;
//# sourceMappingURL=ecommerceordersfilter.d.ts.map