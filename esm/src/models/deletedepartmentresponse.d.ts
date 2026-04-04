import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Departments
 */
export type DeleteDepartmentResponse = {
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
export declare const DeleteDepartmentResponse$zodSchema: z.ZodType<DeleteDepartmentResponse>;
//# sourceMappingURL=deletedepartmentresponse.d.ts.map