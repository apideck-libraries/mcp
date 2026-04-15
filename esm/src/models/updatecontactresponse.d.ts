import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Contact updated
 */
export type UpdateContactResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateContactResponse$zodSchema: z.ZodType<UpdateContactResponse>;
//# sourceMappingURL=updatecontactresponse.d.ts.map