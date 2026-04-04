import * as z from "zod";
import { AccountingDepartment } from "./accountingdepartment.js";
/**
 * Location
 */
export type GetAccountingDepartmentResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: AccountingDepartment;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAccountingDepartmentResponse$zodSchema: z.ZodType<GetAccountingDepartmentResponse>;
//# sourceMappingURL=getaccountingdepartmentresponse.d.ts.map