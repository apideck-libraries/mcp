import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Quotes
 */
export type DeleteQuoteResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
};
export declare const DeleteQuoteResponse$zodSchema: z.ZodType<DeleteQuoteResponse>;
//# sourceMappingURL=deletequoteresponse.d.ts.map