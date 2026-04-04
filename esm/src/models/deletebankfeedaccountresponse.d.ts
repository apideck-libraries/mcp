import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Feed Accounts
 */
export type DeleteBankFeedAccountResponse = {
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
export declare const DeleteBankFeedAccountResponse$zodSchema: z.ZodType<DeleteBankFeedAccountResponse>;
//# sourceMappingURL=deletebankfeedaccountresponse.d.ts.map