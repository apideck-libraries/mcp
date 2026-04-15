import * as z from "zod";
import { ProfitAndLoss } from "./profitandloss.js";
/**
 * Profit & Loss Report
 */
export type GetProfitAndLossResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: ProfitAndLoss;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetProfitAndLossResponse$zodSchema: z.ZodType<GetProfitAndLossResponse>;
//# sourceMappingURL=getprofitandlossresponse.d.ts.map