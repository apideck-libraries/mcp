import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of address.
 */
export declare const AddressType: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Home: "home";
    readonly Office: "office";
    readonly Shipping: "shipping";
    readonly Billing: "billing";
    readonly Work: "work";
    readonly Other: "other";
};
/**
 * The type of address.
 */
export type AddressType = OpenEnum<typeof AddressType>;
export declare const AddressType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    primary: "primary";
    secondary: "secondary";
    home: "home";
    office: "office";
    shipping: "shipping";
    billing: "billing";
    work: "work";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Address = {
    id?: string | null | undefined;
    type?: AddressType | null | undefined;
    string?: string | null | undefined;
    name?: string | null | undefined;
    line1?: string | null | undefined;
    line2?: string | null | undefined;
    line3?: string | null | undefined;
    line4?: string | null | undefined;
    line5?: string | null | undefined;
    street_number?: string | null | undefined;
    city?: string | null | undefined;
    state?: string | null | undefined;
    postal_code?: string | null | undefined;
    country?: string | null | undefined;
    latitude?: string | null | undefined;
    longitude?: string | null | undefined;
    county?: string | null | undefined;
    contact_name?: string | null | undefined;
    salutation?: string | null | undefined;
    phone_number?: string | null | undefined;
    fax?: string | null | undefined;
    email?: string | null | undefined;
    website?: string | null | undefined;
    notes?: string | null | undefined;
    row_version?: string | null | undefined;
};
export declare const Address$zodSchema: z.ZodType<Address>;
//# sourceMappingURL=address.d.ts.map