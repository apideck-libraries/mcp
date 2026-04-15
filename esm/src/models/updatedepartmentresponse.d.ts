import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Departments
 */
export type UpdateDepartmentResponse = {
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
export declare const UpdateDepartmentResponse$zodSchema: z.ZodType<UpdateDepartmentResponse>;
//# sourceMappingURL=updatedepartmentresponse.d.ts.map