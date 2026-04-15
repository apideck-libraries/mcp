import * as z from "zod";
import { Quote } from "./quote.js";
/**
 * Quotes
 */
export type GetQuoteResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Quote;
};
export declare const GetQuoteResponse$zodSchema: z.ZodType<GetQuoteResponse>;
//# sourceMappingURL=getquoteresponse.d.ts.map