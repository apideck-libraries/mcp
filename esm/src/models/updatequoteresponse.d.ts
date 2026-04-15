import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Quotes
 */
export type UpdateQuoteResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
};
export declare const UpdateQuoteResponse$zodSchema: z.ZodType<UpdateQuoteResponse>;
//# sourceMappingURL=updatequoteresponse.d.ts.map