import * as z from "zod";
import { CompanyInfo } from "./companyinfo.js";
/**
 * CompanyInfo
 */
export type GetCompanyInfoResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: CompanyInfo;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCompanyInfoResponse$zodSchema: z.ZodType<GetCompanyInfoResponse>;
//# sourceMappingURL=getcompanyinforesponse.d.ts.map