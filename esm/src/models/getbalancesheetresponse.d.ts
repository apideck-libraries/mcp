import * as z from "zod";
import { BalanceSheet } from "./balancesheet.js";
/**
 * BalanceSheet
 */
export type GetBalanceSheetResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: BalanceSheet;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetBalanceSheetResponse$zodSchema: z.ZodType<GetBalanceSheetResponse>;
//# sourceMappingURL=getbalancesheetresponse.d.ts.map