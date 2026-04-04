import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expense Reports
 */
export type UpdateExpenseReportResponse = {
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
export declare const UpdateExpenseReportResponse$zodSchema: z.ZodType<UpdateExpenseReportResponse>;
//# sourceMappingURL=updateexpensereportresponse.d.ts.map