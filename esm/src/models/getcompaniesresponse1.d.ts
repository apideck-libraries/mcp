import * as z from "zod";
import { Company1 } from "./company1.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Companies
 */
export type GetCompaniesResponse1 = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Company1>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCompaniesResponse1$zodSchema: z.ZodType<GetCompaniesResponse1>;
//# sourceMappingURL=getcompaniesresponse1.d.ts.map