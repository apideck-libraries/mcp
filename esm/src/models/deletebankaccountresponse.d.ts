import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Account deleted
 */
export type DeleteBankAccountResponse = {
    status_code: number;
    status: string;
    service?: string | undefined;
    resource?: string | undefined;
    operation?: string | undefined;
    data: UnifiedId;
};
export declare const DeleteBankAccountResponse$zodSchema: z.ZodType<DeleteBankAccountResponse>;
//# sourceMappingURL=deletebankaccountresponse.d.ts.map