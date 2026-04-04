import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { Email } from "./email.js";
import { PhoneNumber } from "./phonenumber.js";
import { TaxRate } from "./taxrate.js";
/**
 * Based on the status some functionality is enabled or disabled.
 */
export declare const CompanyStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
};
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type CompanyStatus = OpenEnum<typeof CompanyStatus>;
export declare const CompanyStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    active: "active";
    inactive: "inactive";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The start month of fiscal year.
 */
export declare const TheStartMonthOfFiscalYear: {
    readonly January: "January";
    readonly February: "February";
    readonly March: "March";
    readonly April: "April";
    readonly May: "May";
    readonly June: "June";
    readonly July: "July";
    readonly August: "August";
    readonly September: "September";
    readonly October: "October";
    readonly November: "November";
    readonly December: "December";
};
/**
 * The start month of fiscal year.
 */
export type TheStartMonthOfFiscalYear = OpenEnum<typeof TheStartMonthOfFiscalYear>;
export declare const TheStartMonthOfFiscalYear$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    January: "January";
    February: "February";
    March: "March";
    April: "April";
    May: "May";
    June: "June";
    July: "July";
    August: "August";
    September: "September";
    October: "October";
    November: "November";
    December: "December";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The mode of tracking categories for the company on transactions
 */
export declare const TrackingCategoriesMode: {
    readonly Transaction: "transaction";
    readonly Line: "line";
    readonly Both: "both";
    readonly Disabled: "disabled";
};
/**
 * The mode of tracking categories for the company on transactions
 */
export type TrackingCategoriesMode = OpenEnum<typeof TrackingCategoriesMode>;
export declare const TrackingCategoriesMode$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    transaction: "transaction";
    line: "line";
    both: "both";
    disabled: "disabled";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type CompanyInfo = {
    id?: string | undefined;
    company_name?: string | null | undefined;
    status?: CompanyStatus | undefined;
    legal_name?: string | undefined;
    country?: string | null | undefined;
    sales_tax_number?: string | null | undefined;
    automated_sales_tax?: boolean | undefined;
    sales_tax_enabled?: boolean | undefined;
    default_sales_tax?: TaxRate | undefined;
    currency?: Currency | null | undefined;
    language?: string | null | undefined;
    fiscal_year_start_month?: TheStartMonthOfFiscalYear | undefined;
    company_start_date?: string | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    tracking_categories_enabled?: boolean | undefined;
    tracking_categories_mode?: TrackingCategoriesMode | undefined;
    row_version?: string | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const CompanyInfo$zodSchema: z.ZodType<CompanyInfo>;
//# sourceMappingURL=companyinfo.d.ts.map