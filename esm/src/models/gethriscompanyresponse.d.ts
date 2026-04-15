import * as z from "zod";
import { HrisCompany } from "./hriscompany.js";
/**
 * Company
 */
export type GetHrisCompanyResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: HrisCompany;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetHrisCompanyResponse$zodSchema: z.ZodType<GetHrisCompanyResponse>;
//# sourceMappingURL=gethriscompanyresponse.d.ts.map