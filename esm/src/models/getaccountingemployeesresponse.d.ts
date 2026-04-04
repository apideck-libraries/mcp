import * as z from "zod";
import { AccountingEmployee } from "./accountingemployee.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Employees
 */
export type GetAccountingEmployeesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<AccountingEmployee>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAccountingEmployeesResponse$zodSchema: z.ZodType<GetAccountingEmployeesResponse>;
//# sourceMappingURL=getaccountingemployeesresponse.d.ts.map