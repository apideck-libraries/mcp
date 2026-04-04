import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The type of phone number
 */
export declare const PhoneNumberType: {
    readonly Primary: "primary";
    readonly Secondary: "secondary";
    readonly Home: "home";
    readonly Work: "work";
    readonly Office: "office";
    readonly Mobile: "mobile";
    readonly Assistant: "assistant";
    readonly Fax: "fax";
    readonly DirectDialIn: "direct-dial-in";
    readonly Personal: "personal";
    readonly Billing: "billing";
    readonly Other: "other";
};
/**
 * The type of phone number
 */
export type PhoneNumberType = OpenEnum<typeof PhoneNumberType>;
export declare const PhoneNumberType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    assistant: "assistant";
    other: "other";
    primary: "primary";
    secondary: "secondary";
    home: "home";
    office: "office";
    billing: "billing";
    work: "work";
    fax: "fax";
    personal: "personal";
    mobile: "mobile";
    "direct-dial-in": "direct-dial-in";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type PhoneNumber = {
    id?: string | null | undefined;
    country_code?: string | null | undefined;
    area_code?: string | null | undefined;
    number: string;
    extension?: string | null | undefined;
    type?: PhoneNumberType | null | undefined;
};
export declare const PhoneNumber$zodSchema: z.ZodType<PhoneNumber>;
//# sourceMappingURL=phonenumber.d.ts.map