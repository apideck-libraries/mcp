import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Expenses
 */
export type CreateExpenseResponse = {
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
export declare const CreateExpenseResponse$zodSchema: z.ZodType<CreateExpenseResponse>;
//# sourceMappingURL=createexpenseresponse.d.ts.map