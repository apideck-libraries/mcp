import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { EcommerceAddress } from "./ecommerceaddress.js";
import { EcommerceDiscount } from "./ecommercediscount.js";
import { EcommerceOrderLineItem } from "./ecommerceorderlineitem.js";
import { EcommerceOrderRefund } from "./ecommerceorderrefund.js";
import { EcommerceOrderStatus } from "./ecommerceorderstatus.js";
import { LinkedEcommerceCustomer } from "./linkedecommercecustomer.js";
import { TrackingItem } from "./trackingitem.js";
/**
 * Current payment status of the order.
 */
export declare const EcommerceOrderPaymentStatus: {
    readonly Pending: "pending";
    readonly Authorized: "authorized";
    readonly Paid: "paid";
    readonly Partial: "partial";
    readonly Refunded: "refunded";
    readonly Voided: "voided";
    readonly Unknown: "unknown";
    readonly PartiallyRefunded: "partially_refunded";
};
/**
 * Current payment status of the order.
 */
export type EcommerceOrderPaymentStatus = OpenEnum<typeof EcommerceOrderPaymentStatus>;
export declare const EcommerceOrderPaymentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    unknown: "unknown";
    pending: "pending";
    paid: "paid";
    voided: "voided";
    authorized: "authorized";
    partial: "partial";
    refunded: "refunded";
    partially_refunded: "partially_refunded";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Current fulfillment status of the order.
 */
export declare const FulfillmentStatus: {
    readonly Pending: "pending";
    readonly Shipped: "shipped";
    readonly Partial: "partial";
    readonly Delivered: "delivered";
    readonly Cancelled: "cancelled";
    readonly Returned: "returned";
    readonly Unknown: "unknown";
};
/**
 * Current fulfillment status of the order.
 */
export type FulfillmentStatus = OpenEnum<typeof FulfillmentStatus>;
export declare const FulfillmentStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    unknown: "unknown";
    cancelled: "cancelled";
    pending: "pending";
    partial: "partial";
    shipped: "shipped";
    delivered: "delivered";
    returned: "returned";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EcommerceOrder = {
    id: string;
    order_number?: string | null | undefined;
    currency?: Currency | null | undefined;
    discounts?: Array<EcommerceDiscount> | undefined;
    sub_total?: string | null | undefined;
    shipping_cost?: string | null | undefined;
    coupon_discount?: string | null | undefined;
    total_discount?: string | null | undefined;
    total_tax?: string | null | undefined;
    total_amount?: string | null | undefined;
    refunded_amount?: string | null | undefined;
    status?: EcommerceOrderStatus | null | undefined;
    payment_status?: EcommerceOrderPaymentStatus | null | undefined;
    fulfillment_status?: FulfillmentStatus | null | undefined;
    payment_method?: string | null | undefined;
    customer?: LinkedEcommerceCustomer | undefined;
    billing_address?: EcommerceAddress | undefined;
    shipping_address?: EcommerceAddress | undefined;
    tracking?: Array<TrackingItem> | undefined;
    line_items?: Array<EcommerceOrderLineItem> | undefined;
    note?: string | null | undefined;
    refunds?: Array<EcommerceOrderRefund> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const EcommerceOrder$zodSchema: z.ZodType<EcommerceOrder>;
//# sourceMappingURL=ecommerceorder.d.ts.map