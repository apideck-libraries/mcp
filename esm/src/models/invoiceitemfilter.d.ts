import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
 */
export declare const InvoiceItemFilterInvoiceItemType: {
    readonly Inventory: "inventory";
    readonly Service: "service";
    readonly Other: "other";
};
/**
 * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
 */
export type InvoiceItemFilterInvoiceItemType = OpenEnum<typeof InvoiceItemFilterInvoiceItemType>;
export declare const InvoiceItemFilterInvoiceItemType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    service: "service";
    other: "other";
    inventory: "inventory";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.
 */
export declare const InvoiceItemFilterTransactionType: {
    readonly Sale: "sale";
    readonly Purchase: "purchase";
};
/**
 * The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.
 */
export type InvoiceItemFilterTransactionType = OpenEnum<typeof InvoiceItemFilterTransactionType>;
export declare const InvoiceItemFilterTransactionType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    sale: "sale";
    purchase: "purchase";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type InvoiceItemFilter = {
    type?: InvoiceItemFilterInvoiceItemType | null | undefined;
    transaction_type?: InvoiceItemFilterTransactionType | null | undefined;
};
export declare const InvoiceItemFilter$zodSchema: z.ZodType<InvoiceItemFilter>;
//# sourceMappingURL=invoiceitemfilter.d.ts.map