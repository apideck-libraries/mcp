import * as z from "zod";
import { LedgerAccount } from "./ledgeraccount.js";
/**
 * LedgerAccount
 */
export type GetLedgerAccountResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: LedgerAccount;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetLedgerAccountResponse$zodSchema: z.ZodType<GetLedgerAccountResponse>;
//# sourceMappingURL=getledgeraccountresponse.d.ts.map