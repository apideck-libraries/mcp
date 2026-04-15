import * as z from "zod";
import { EcommerceDiscount } from "./ecommercediscount.js";
export type EcommerceOrderLineItemOption = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    value?: string | null | undefined;
};
export declare const EcommerceOrderLineItemOption$zodSchema: z.ZodType<EcommerceOrderLineItemOption>;
/**
 * A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.
 */
export type EcommerceOrderLineItem = {
    id?: string | null | undefined;
    product_id?: string | null | undefined;
    variant_id?: string | null | undefined;
    sku?: string | null | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    options?: Array<EcommerceOrderLineItemOption> | undefined;
    quantity: string | null;
    unit_price?: string | null | undefined;
    tax_rate?: string | null | undefined;
    tax_amount?: string | null | undefined;
    is_refunded?: boolean | null | undefined;
    refunded_amount?: string | null | undefined;
    refunded_quantity?: string | null | undefined;
    sub_total?: string | null | undefined;
    total_amount?: string | null | undefined;
    discounts?: Array<EcommerceDiscount> | undefined;
};
export declare const EcommerceOrderLineItem$zodSchema: z.ZodType<EcommerceOrderLineItem>;
//# sourceMappingURL=ecommerceorderlineitem.d.ts.map