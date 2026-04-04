import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Employees
 */
export type DeleteAccountingEmployeeResponse = {
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
export declare const DeleteAccountingEmployeeResponse$zodSchema: z.ZodType<DeleteAccountingEmployeeResponse>;
//# sourceMappingURL=deleteaccountingemployeeresponse.d.ts.map