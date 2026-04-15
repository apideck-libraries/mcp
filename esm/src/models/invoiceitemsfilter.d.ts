import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
 */
export declare const InvoiceItemsFilterInvoiceItemType: {
    readonly Inventory: "inventory";
    readonly Service: "service";
    readonly Other: "other";
};
/**
 * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
 */
export type InvoiceItemsFilterInvoiceItemType = OpenEnum<typeof InvoiceItemsFilterInvoiceItemType>;
export declare const InvoiceItemsFilterInvoiceItemType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    service: "service";
    other: "other";
    inventory: "inventory";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.
 */
export declare const InvoiceItemsFilterTransactionType: {
    readonly Sale: "sale";
    readonly Purchase: "purchase";
};
/**
 * The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.
 */
export type InvoiceItemsFilterTransactionType = OpenEnum<typeof InvoiceItemsFilterTransactionType>;
export declare const InvoiceItemsFilterTransactionType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    sale: "sale";
    purchase: "purchase";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type InvoiceItemsFilter = {
    updated_since?: string | undefined;
    name?: string | undefined;
    type?: InvoiceItemsFilterInvoiceItemType | null | undefined;
    transaction_type?: InvoiceItemsFilterTransactionType | null | undefined;
};
export declare const InvoiceItemsFilter$zodSchema: z.ZodType<InvoiceItemsFilter>;
//# sourceMappingURL=invoiceitemsfilter.d.ts.map