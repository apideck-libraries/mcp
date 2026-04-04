import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Quotes
 */
export type CreateQuoteResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
};
export declare const CreateQuoteResponse$zodSchema: z.ZodType<CreateQuoteResponse>;
//# sourceMappingURL=createquoteresponse.d.ts.map