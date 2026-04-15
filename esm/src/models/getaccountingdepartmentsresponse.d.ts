import * as z from "zod";
import { AccountingDepartment } from "./accountingdepartment.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Departments
 */
export type GetAccountingDepartmentsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<AccountingDepartment>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAccountingDepartmentsResponse$zodSchema: z.ZodType<GetAccountingDepartmentsResponse>;
//# sourceMappingURL=getaccountingdepartmentsresponse.d.ts.map