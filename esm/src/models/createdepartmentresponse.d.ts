import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Departments
 */
export type CreateDepartmentResponse = {
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
export declare const CreateDepartmentResponse$zodSchema: z.ZodType<CreateDepartmentResponse>;
//# sourceMappingURL=createdepartmentresponse.d.ts.map