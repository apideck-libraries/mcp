import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expense Categories
 */
export type UpdateExpenseCategoryResponse = {
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
export declare const UpdateExpenseCategoryResponse$zodSchema: z.ZodType<UpdateExpenseCategoryResponse>;
//# sourceMappingURL=updateexpensecategoryresponse.d.ts.map