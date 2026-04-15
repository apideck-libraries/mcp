import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expense Reports
 */
export type DeleteExpenseReportResponse = {
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
export declare const DeleteExpenseReportResponse$zodSchema: z.ZodType<DeleteExpenseReportResponse>;
//# sourceMappingURL=deleteexpensereportresponse.d.ts.map