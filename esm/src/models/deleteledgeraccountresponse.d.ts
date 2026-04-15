import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * LedgerAccount deleted
 */
export type DeleteLedgerAccountResponse = {
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
export declare const DeleteLedgerAccountResponse$zodSchema: z.ZodType<DeleteLedgerAccountResponse>;
//# sourceMappingURL=deleteledgeraccountresponse.d.ts.map