import * as z from "zod";
import { HrisCompany } from "./hriscompany.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Companies
 */
export type GetHrisCompaniesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<HrisCompany>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetHrisCompaniesResponse$zodSchema: z.ZodType<GetHrisCompaniesResponse>;
//# sourceMappingURL=gethriscompaniesresponse.d.ts.map