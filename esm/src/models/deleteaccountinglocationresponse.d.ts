import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Location deleted
 */
export type DeleteAccountingLocationResponse = {
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
export declare const DeleteAccountingLocationResponse$zodSchema: z.ZodType<DeleteAccountingLocationResponse>;
//# sourceMappingURL=deleteaccountinglocationresponse.d.ts.map