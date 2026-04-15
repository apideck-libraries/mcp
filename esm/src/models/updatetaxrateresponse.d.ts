import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * TaxRate updated
 */
export type UpdateTaxRateResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateTaxRateResponse$zodSchema: z.ZodType<UpdateTaxRateResponse>;
//# sourceMappingURL=updatetaxrateresponse.d.ts.map