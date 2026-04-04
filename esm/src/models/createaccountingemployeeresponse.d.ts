import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Employees
 */
export type CreateAccountingEmployeeResponse = {
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
export declare const CreateAccountingEmployeeResponse$zodSchema: z.ZodType<CreateAccountingEmployeeResponse>;
//# sourceMappingURL=createaccountingemployeeresponse.d.ts.map