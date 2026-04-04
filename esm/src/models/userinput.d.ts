import * as z from "zod";
import { Address } from "./address.js";
import { Email } from "./email.js";
import { PassThroughBody } from "./passthroughbody.js";
import { PhoneNumber } from "./phonenumber.js";
export type UserInput = {
    parent_id?: string | null | undefined;
    username?: string | null | undefined;
    first_name?: string | null | undefined;
    last_name?: string | null | undefined;
    title?: string | null | undefined;
    division?: string | null | undefined;
    department?: string | null | undefined;
    company_name?: string | null | undefined;
    employee_number?: string | null | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    language?: string | null | undefined;
    status?: string | null | undefined;
    password?: string | null | undefined;
    addresses?: Array<Address> | undefined;
    phone_numbers?: Array<PhoneNumber> | undefined;
    emails: Array<Email>;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const UserInput$zodSchema: z.ZodType<UserInput>;
//# sourceMappingURL=userinput.d.ts.map