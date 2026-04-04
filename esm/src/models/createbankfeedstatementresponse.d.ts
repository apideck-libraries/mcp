import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Feed Statements
 */
export type CreateBankFeedStatementResponse = {
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
export declare const CreateBankFeedStatementResponse$zodSchema: z.ZodType<CreateBankFeedStatementResponse>;
//# sourceMappingURL=createbankfeedstatementresponse.d.ts.map