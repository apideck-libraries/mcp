import * as z from "zod";
export type EcommerceCustomersFilter = {
    email?: string | undefined;
    phone_number?: string | undefined;
    customer_ids?: string | undefined;
    updated_since?: string | undefined;
    created_since?: string | undefined;
};
export declare const EcommerceCustomersFilter$zodSchema: z.ZodType<EcommerceCustomersFilter>;
//# sourceMappingURL=ecommercecustomersfilter.d.ts.map