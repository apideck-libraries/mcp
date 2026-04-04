import * as z from "zod";
import { AccountingEmployee } from "./accountingemployee.js";
/**
 * Employees
 */
export type GetAccountingEmployeeResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: AccountingEmployee;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAccountingEmployeeResponse$zodSchema: z.ZodType<GetAccountingEmployeeResponse>;
//# sourceMappingURL=getaccountingemployeeresponse.d.ts.map