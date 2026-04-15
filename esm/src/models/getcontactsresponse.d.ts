import * as z from "zod";
import { Contact } from "./contact.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Contacts
 */
export type GetContactsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Contact>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetContactsResponse$zodSchema: z.ZodType<GetContactsResponse>;
//# sourceMappingURL=getcontactsresponse.d.ts.map