import * as z from "zod";
import { Contact } from "./contact.js";
/**
 * Contact
 */
export type GetContactResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Contact;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetContactResponse$zodSchema: z.ZodType<GetContactResponse>;
//# sourceMappingURL=getcontactresponse.d.ts.map