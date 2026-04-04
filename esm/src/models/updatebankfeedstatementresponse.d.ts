import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Feed Statements
 */
export type UpdateBankFeedStatementResponse = {
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
export declare const UpdateBankFeedStatementResponse$zodSchema: z.ZodType<UpdateBankFeedStatementResponse>;
//# sourceMappingURL=updatebankfeedstatementresponse.d.ts.map