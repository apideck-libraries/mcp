import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Feed Accounts
 */
export type UpdateBankFeedAccountResponse = {
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
export declare const UpdateBankFeedAccountResponse$zodSchema: z.ZodType<UpdateBankFeedAccountResponse>;
//# sourceMappingURL=updatebankfeedaccountresponse.d.ts.map