import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Feed Statements
 */
export type DeleteBankFeedStatementResponse = {
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
export declare const DeleteBankFeedStatementResponse$zodSchema: z.ZodType<DeleteBankFeedStatementResponse>;
//# sourceMappingURL=deletebankfeedstatementresponse.d.ts.map