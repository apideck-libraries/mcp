import * as z from "zod";
import { TaxRate } from "./taxrate.js";
/**
 * TaxRate
 */
export type GetTaxRateResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: TaxRate;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTaxRateResponse$zodSchema: z.ZodType<GetTaxRateResponse>;
//# sourceMappingURL=gettaxrateresponse.d.ts.map