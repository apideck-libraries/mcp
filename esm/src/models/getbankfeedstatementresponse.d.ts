import * as z from "zod";
import { BankFeedStatement } from "./bankfeedstatement.js";
/**
 * Bank Feed Statements
 */
export type GetBankFeedStatementResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: BankFeedStatement;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBankFeedStatementResponse$zodSchema: z.ZodType<GetBankFeedStatementResponse>;
//# sourceMappingURL=getbankfeedstatementresponse.d.ts.map