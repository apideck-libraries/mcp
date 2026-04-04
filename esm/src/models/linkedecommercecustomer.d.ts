import * as z from "zod";
import { Email } from "./email.js";
import { PhoneNumber } from "./phonenumber.js";
/**
 * The customer this entity is linked to.
 */
export type LinkedEcommerceCustomer = {
    id?: string | null | undefined;
    name?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    company_name?: string | null | undefined;
    phone_numbers?: Array<PhoneNumber> | null | undefined;
    emails?: Array<Email> | null | undefined;
};
export declare const LinkedEcommerceCustomer$zodSchema: z.ZodType<LinkedEcommerceCustomer>;
//# sourceMappingURL=linkedecommercecustomer.d.ts.map