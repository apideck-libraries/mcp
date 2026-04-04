import * as z from "zod";
import { BankFeedAccount } from "./bankfeedaccount.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Bank Feed Accounts
 */
export type GetBankFeedAccountsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<BankFeedAccount>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBankFeedAccountsResponse$zodSchema: z.ZodType<GetBankFeedAccountsResponse>;
//# sourceMappingURL=getbankfeedaccountsresponse.d.ts.map