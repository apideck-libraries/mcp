import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Employees
 */
export type CreateEmployeeResponse = {
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
export declare const CreateEmployeeResponse$zodSchema: z.ZodType<CreateEmployeeResponse>;
//# sourceMappingURL=createemployeeresponse.d.ts.map