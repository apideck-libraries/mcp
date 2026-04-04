import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expenses
 */
export type DeleteExpenseResponse = {
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
export declare const DeleteExpenseResponse$zodSchema: z.ZodType<DeleteExpenseResponse>;
//# sourceMappingURL=deleteexpenseresponse.d.ts.map