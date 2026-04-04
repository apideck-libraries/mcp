import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { BankAccount } from "./bankaccount.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Email } from "./email.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedTaxDetail } from "./linkedtaxdetail.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { LinkedTaxStatusDetail } from "./linkedtaxstatusdetail.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
import { Website } from "./website.js";
/**
 * Supplier status
 */
export declare const SupplierStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
    readonly GdprErasureRequest: "gdpr-erasure-request";
    readonly Unknown: "unknown";
};
/**
 * Supplier status
 */
export type SupplierStatus = OpenEnum<typeof SupplierStatus>;
export declare const SupplierStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    unknown: "unknown";
    active: "active";
    inactive: "inactive";
    archived: "archived";
    "gdpr-erasure-request": "gdpr-erasure-request";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Supplier = {
    id: string;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    company_name?: string | null | undefined;
    company_id?: string | null | undefined;
    supplier_category?: string | null | undefined;
    title?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    suffix?: string | null | undefined;
    individual?: boolean | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    websites?: Array<Website> | undefined;
    bank_accounts?: Array<BankAccount> | undefined;
    notes?: string | null | undefined;
    tax_rate?: LinkedTaxRate | undefined;
    tax_number?: string | null | undefined;
    taxable?: boolean | null | undefined;
    currency?: Currency | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    status?: SupplierStatus | null | undefined;
    payment_method?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    channel?: string | null | undefined;
    issued_method?: string | null | undefined;
    issued_email?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    tax_details?: Array<LinkedTaxDetail | null> | undefined;
    tax_status_details?: Array<LinkedTaxStatusDetail | null> | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    subsidiary_id?: string | undefined;
    integration_system_id?: string | undefined;
};
export declare const Supplier$zodSchema: z.ZodType<Supplier>;
export type SupplierInput = {
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    company_name?: string | null | undefined;
    company_id?: string | null | undefined;
    supplier_category?: string | null | undefined;
    title?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    suffix?: string | null | undefined;
    individual?: boolean | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    websites?: Array<Website> | undefined;
    bank_accounts?: Array<BankAccount> | undefined;
    notes?: string | null | undefined;
    tax_rate?: LinkedTaxRateInput | undefined;
    tax_number?: string | null | undefined;
    taxable?: boolean | null | undefined;
    currency?: Currency | null | undefined;
    account?: LinkedLedgerAccount | null | undefined;
    status?: SupplierStatus | null | undefined;
    payment_method?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    channel?: string | null | undefined;
    issued_method?: string | null | undefined;
    issued_email?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    tax_details?: Array<LinkedTaxDetail | null> | undefined;
    tax_status_details?: Array<LinkedTaxStatusDetail | null> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
    subsidiary_id?: string | undefined;
    integration_system_id?: string | undefined;
};
export declare const SupplierInput$zodSchema: z.ZodType<SupplierInput>;
//# sourceMappingURL=supplier.d.ts.map