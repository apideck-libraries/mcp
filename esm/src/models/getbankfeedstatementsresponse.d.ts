import * as z from "zod";
import { BankFeedStatement } from "./bankfeedstatement.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Bank Feed Statements
 */
export type GetBankFeedStatementsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<BankFeedStatement>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBankFeedStatementsResponse$zodSchema: z.ZodType<GetBankFeedStatementsResponse>;
//# sourceMappingURL=getbankfeedstatementsresponse.d.ts.map