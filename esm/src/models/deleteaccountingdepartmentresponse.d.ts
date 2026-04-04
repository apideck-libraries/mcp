import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Department deleted
 */
export type DeleteAccountingDepartmentResponse = {
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
export declare const DeleteAccountingDepartmentResponse$zodSchema: z.ZodType<DeleteAccountingDepartmentResponse>;
//# sourceMappingURL=deleteaccountingdepartmentresponse.d.ts.map