import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expense Categories
 */
export type DeleteExpenseCategoryResponse = {
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
export declare const DeleteExpenseCategoryResponse$zodSchema: z.ZodType<DeleteExpenseCategoryResponse>;
//# sourceMappingURL=deleteexpensecategoryresponse.d.ts.map