import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Employees
 */
export type UpdateAccountingEmployeeResponse = {
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
export declare const UpdateAccountingEmployeeResponse$zodSchema: z.ZodType<UpdateAccountingEmployeeResponse>;
//# sourceMappingURL=updateaccountingemployeeresponse.d.ts.map