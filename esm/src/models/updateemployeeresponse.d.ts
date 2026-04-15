import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Employees
 */
export type UpdateEmployeeResponse = {
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
export declare const UpdateEmployeeResponse$zodSchema: z.ZodType<UpdateEmployeeResponse>;
//# sourceMappingURL=updateemployeeresponse.d.ts.map