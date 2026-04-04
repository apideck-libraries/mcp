import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * LedgerAccount created
 */
export type CreateLedgerAccountResponse = {
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
export declare const CreateLedgerAccountResponse$zodSchema: z.ZodType<CreateLedgerAccountResponse>;
//# sourceMappingURL=createledgeraccountresponse.d.ts.map