import * as z from "zod";
import { AccountingBankAccount } from "./accountingbankaccount.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Bank Accounts
 */
export type GetBankAccountsResponse = {
    status_code: number;
    status: string;
    service?: string | undefined;
    resource?: string | undefined;
    operation?: string | undefined;
    data: Array<AccountingBankAccount>;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetBankAccountsResponse$zodSchema: z.ZodType<GetBankAccountsResponse>;
//# sourceMappingURL=getbankaccountsresponse.d.ts.map