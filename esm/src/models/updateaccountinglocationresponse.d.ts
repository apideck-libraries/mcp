import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Location
 */
export type UpdateAccountingLocationResponse = {
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
export declare const UpdateAccountingLocationResponse$zodSchema: z.ZodType<UpdateAccountingLocationResponse>;
//# sourceMappingURL=updateaccountinglocationresponse.d.ts.map