import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { Email } from "./email.js";
import { LinkedEcommerceOrder } from "./linkedecommerceorder.js";
import { PhoneNumber } from "./phonenumber.js";
/**
 * The current status of the customer
 */
export declare const EcommerceCustomerCustomerStatus: {
    readonly Active: "active";
    readonly Archived: "archived";
};
/**
 * The current status of the customer
 */
export type EcommerceCustomerCustomerStatus = OpenEnum<typeof EcommerceCustomerCustomerStatus>;
export declare const EcommerceCustomerCustomerStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    archived: "archived";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export declare const EcommerceCustomerType: {
    readonly Billing: "billing";
    readonly Shipping: "shipping";
    readonly Other: "other";
};
export type EcommerceCustomerType = OpenEnum<typeof EcommerceCustomerType>;
export declare const EcommerceCustomerType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    shipping: "shipping";
    billing: "billing";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type EcommerceCustomerAddress = {
    type?: EcommerceCustomerType | undefined;
    id?: string | null | undefined;
    line1?: string | null | undefined;
    line2?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    postal_code?: string | null | undefined;
    country?: string | null | undefined;
};
export declare const EcommerceCustomerAddress$zodSchema: z.ZodType<EcommerceCustomerAddress>;
export type EcommerceCustomer = {
    id: string;
    name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    company_name?: string | null | undefined;
    status?: EcommerceCustomerCustomerStatus | null | undefined;
    currency?: Currency | null | undefined;
    emails?: Array<Email> | null | undefined;
    phone_numbers?: Array<PhoneNumber> | null | undefined;
    addresses?: Array<EcommerceCustomerAddress> | undefined;
    orders?: Array<LinkedEcommerceOrder> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
};
export declare const EcommerceCustomer$zodSchema: z.ZodType<EcommerceCustomer>;
//# sourceMappingURL=ecommercecustomer.d.ts.map