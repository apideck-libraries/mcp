import * as z from "zod";
import { Company1 } from "./company1.js";
/**
 * Company
 */
export type GetCompanyResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Company1;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCompanyResponse$zodSchema: z.ZodType<GetCompanyResponse>;
//# sourceMappingURL=getcompanyresponse.d.ts.map