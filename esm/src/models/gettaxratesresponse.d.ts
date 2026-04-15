import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { TaxRate } from "./taxrate.js";
/**
 * TaxRates
 */
export type GetTaxRatesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<TaxRate>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTaxRatesResponse$zodSchema: z.ZodType<GetTaxRatesResponse>;
//# sourceMappingURL=gettaxratesresponse.d.ts.map