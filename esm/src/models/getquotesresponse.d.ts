import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Quote } from "./quote.js";
/**
 * Quotes
 */
export type GetQuotesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Quote>;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetQuotesResponse$zodSchema: z.ZodType<GetQuotesResponse>;
//# sourceMappingURL=getquotesresponse.d.ts.map