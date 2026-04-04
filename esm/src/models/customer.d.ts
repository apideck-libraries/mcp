import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { BankAccount } from "./bankaccount.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { Email } from "./email.js";
import { LinkedLedgerAccount } from "./linkedledgeraccount.js";
import { LinkedParentCustomer } from "./linkedparentcustomer.js";
import { LinkedTaxRate } from "./linkedtaxrate.js";
import { LinkedTaxRateInput } from "./linkedtaxrateinput.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
import { Website } from "./website.js";
/**
 * Customer status
 */
export declare const CustomerStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Archived: "archived";
    readonly GdprErasureRequest: "gdpr-erasure-request";
    readonly Unknown: "unknown";
};
/**
 * Customer status
 */
export type CustomerStatus = OpenEnum<typeof CustomerStatus>;
export declare const CustomerStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    unknown: "unknown";
    active: "active";
    inactive: "inactive";
    archived: "archived";
    "gdpr-erasure-request": "gdpr-erasure-request";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Customer = {
    id: string;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    company_name?: string | null | undefined;
    company_id?: string | null | undefined;
    customer_category?: string | null | undefined;
    title?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    suffix?: string | null | undefined;
    individual?: boolean | null | undefined;
    project?: boolean | null | undefined;
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
    parent?: LinkedParentCustomer | null | undefined;
    status?: CustomerStatus | null | undefined;
    payment_method?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    channel?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Customer$zodSchema: z.ZodType<Customer>;
export type CustomerInput = {
    display_id?: string | null | undefined;
    display_name?: string | null | undefined;
    company_name?: string | null | undefined;
    company_id?: string | null | undefined;
    customer_category?: string | null | undefined;
    title?: string | null | undefined;
    first_name?: string | null | undefined;
    middle_name?: string | null | undefined;
    last_name?: string | null | undefined;
    suffix?: string | null | undefined;
    individual?: boolean | null | undefined;
    project?: boolean | null | undefined;
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
    parent?: LinkedParentCustomer | null | undefined;
    status?: CustomerStatus | null | undefined;
    payment_method?: string | null | undefined;
    terms?: string | null | undefined;
    terms_id?: string | null | undefined;
    channel?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    row_version?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const CustomerInput$zodSchema: z.ZodType<CustomerInput>;
//# sourceMappingURL=customer.d.ts.map