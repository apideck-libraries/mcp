import * as z from "zod";
import { AccountingBankAccount } from "./accountingbankaccount.js";
/**
 * Bank Account
 */
export type GetBankAccountResponse = {
    status_code: number;
    status: string;
    service?: string | undefined;
    resource?: string | undefined;
    operation?: string | undefined;
    data: AccountingBankAccount;
};
export declare const GetBankAccountResponse$zodSchema: z.ZodType<GetBankAccountResponse>;
//# sourceMappingURL=getbankaccountresponse.d.ts.map