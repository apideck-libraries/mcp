import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { LinkedCustomer } from "./linkedcustomer.js";
import { LinkedCustomerInput } from "./linkedcustomerinput.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
import { QuoteLineItem, QuoteLineItemInput } from "./quotelineitem.js";
/**
 * Quote status
 */
export declare const QuoteStatus: {
    readonly Draft: "draft";
    readonly Sent: "sent";
    readonly Accepted: "accepted";
    readonly Rejected: "rejected";
    readonly Expired: "expired";
    readonly Converted: "converted";
    readonly Void: "void";
    readonly Deleted: "deleted";
};
/**
 * Quote status
 */
export type QuoteStatus = OpenEnum<typeof QuoteStatus>;
export declare const QuoteStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    void: "void";
    rejected: "rejected";
    draft: "draft";
    deleted: "deleted";
    sent: "sent";
    accepted: "accepted";
    expired: "expired";
    converted: "converted";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Quote = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    number?: string | null | undefined;
    customer?: LinkedCustomer | null | undefined;
    invoice_id?: string | undefined;
    sales_order_id?: string | null | undefined;
    company_id?: string | null | undefined;
    department_id?: string | null | undefined;
    project_id?: string | undefined;
    quote_date?: string | null | undefined;
    expiry_date?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    reference?: string | null | undefined;
    status?: QuoteStatus | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    tax_code?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    discount_amount?: number | null | undefined;
    total?: number | null | undefined;
    customer_memo?: string | null | undefined;
    line_items?: Array<QuoteLineItem> | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    template_id?: string | null | undefined;
    source_document_url?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Quote$zodSchema: z.ZodType<Quote>;
export type QuoteInput = {
    number?: string | null | undefined;
    customer?: LinkedCustomerInput | null | undefined;
    sales_order_id?: string | null | undefined;
    company_id?: string | null | undefined;
    department_id?: string | null | undefined;
    project_id?: string | undefined;
    quote_date?: string | null | undefined;
    expiry_date?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    reference?: string | null | undefined;
    status?: QuoteStatus | null | undefined;
    currency?: Currency | null | undefined;
    currency_rate?: number | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    sub_total?: number | null | undefined;
    total_tax?: number | null | undefined;
    tax_code?: string | null | undefined;
    discount_percentage?: number | null | undefined;
    discount_amount?: number | null | undefined;
    total?: number | null | undefined;
    customer_memo?: string | null | undefined;
    line_items?: Array<QuoteLineItemInput> | undefined;
    billing_address?: Address | undefined;
    shipping_address?: Address | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    template_id?: string | null | undefined;
    source_document_url?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const QuoteInput$zodSchema: z.ZodType<QuoteInput>;
//# sourceMappingURL=quote.d.ts.map