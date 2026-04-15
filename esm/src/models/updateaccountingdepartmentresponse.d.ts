import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Department
 */
export type UpdateAccountingDepartmentResponse = {
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
export declare const UpdateAccountingDepartmentResponse$zodSchema: z.ZodType<UpdateAccountingDepartmentResponse>;
//# sourceMappingURL=updateaccountingdepartmentresponse.d.ts.map