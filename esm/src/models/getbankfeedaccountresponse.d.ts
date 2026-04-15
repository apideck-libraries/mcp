import * as z from "zod";
import { BankFeedAccount } from "./bankfeedaccount.js";
/**
 * Bank Feed Accounts
 */
export type GetBankFeedAccountResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: BankFeedAccount;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBankFeedAccountResponse$zodSchema: z.ZodType<GetBankFeedAccountResponse>;
//# sourceMappingURL=getbankfeedaccountresponse.d.ts.map