import * as z from "zod";
import { AccountingConnectionCompany } from "./accountingconnectioncompany.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Companies
 */
export type GetCompaniesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<AccountingConnectionCompany>;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetCompaniesResponse$zodSchema: z.ZodType<GetCompaniesResponse>;
//# sourceMappingURL=getcompaniesresponse.d.ts.map