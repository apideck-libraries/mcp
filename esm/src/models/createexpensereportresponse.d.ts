import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expense Reports
 */
export type CreateExpenseReportResponse = {
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
export declare const CreateExpenseReportResponse$zodSchema: z.ZodType<CreateExpenseReportResponse>;
//# sourceMappingURL=createexpensereportresponse.d.ts.map