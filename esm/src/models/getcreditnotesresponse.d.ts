import * as z from "zod";
import { CreditNote } from "./creditnote.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Credit Notes
 */
export type GetCreditNotesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<CreditNote>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCreditNotesResponse$zodSchema: z.ZodType<GetCreditNotesResponse>;
//# sourceMappingURL=getcreditnotesresponse.d.ts.map