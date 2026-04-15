import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expenses
 */
export type UpdateExpenseResponse = {
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
export declare const UpdateExpenseResponse$zodSchema: z.ZodType<UpdateExpenseResponse>;
//# sourceMappingURL=updateexpenseresponse.d.ts.map