import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * LedgerAccount updated
 */
export type UpdateLedgerAccountResponse = {
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
export declare const UpdateLedgerAccountResponse$zodSchema: z.ZodType<UpdateLedgerAccountResponse>;
//# sourceMappingURL=updateledgeraccountresponse.d.ts.map