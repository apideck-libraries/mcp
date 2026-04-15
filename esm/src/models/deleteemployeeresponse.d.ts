import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Employees
 */
export type DeleteEmployeeResponse = {
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
export declare const DeleteEmployeeResponse$zodSchema: z.ZodType<DeleteEmployeeResponse>;
//# sourceMappingURL=deleteemployeeresponse.d.ts.map