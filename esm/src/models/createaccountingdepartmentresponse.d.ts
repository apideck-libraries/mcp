import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Department
 */
export type CreateAccountingDepartmentResponse = {
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
export declare const CreateAccountingDepartmentResponse$zodSchema: z.ZodType<CreateAccountingDepartmentResponse>;
//# sourceMappingURL=createaccountingdepartmentresponse.d.ts.map