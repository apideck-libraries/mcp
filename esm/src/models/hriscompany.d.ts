import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Address } from "./address.js";
import { Currency } from "./currency.js";
import { Email } from "./email.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
import { Website } from "./website.js";
export declare const HrisCompanyStatus: {
    readonly Active: "active";
    readonly Inactive: "inactive";
    readonly Trial: "trial";
    readonly Other: "other";
};
export type HrisCompanyStatus = OpenEnum<typeof HrisCompanyStatus>;
export declare const HrisCompanyStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    active: "active";
    inactive: "inactive";
    trial: "trial";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type HrisCompany = {
    id?: string | undefined;
    legal_name: string | null;
    display_name?: string | null | undefined;
    subdomain?: string | null | undefined;
    status?: HrisCompanyStatus | undefined;
    company_number?: string | null | undefined;
    currency?: Currency | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    websites?: Array<Website> | undefined;
    debtor_id?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    deleted?: boolean | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const HrisCompany$zodSchema: z.ZodType<HrisCompany>;
export type HrisCompanyInput = {
    legal_name: string | null;
    display_name?: string | null | undefined;
    subdomain?: string | null | undefined;
    status?: HrisCompanyStatus | undefined;
    company_number?: string | null | undefined;
    currency?: Currency | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails?: Array<Email> | undefined;
    websites?: Array<Website> | undefined;
    debtor_id?: string | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const HrisCompanyInput$zodSchema: z.ZodType<HrisCompanyInput>;
//# sourceMappingURL=hriscompany.d.ts.map