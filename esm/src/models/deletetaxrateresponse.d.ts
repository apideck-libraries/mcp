import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * TaxRates deleted
 */
export type DeleteTaxRateResponse = {
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
export declare const DeleteTaxRateResponse$zodSchema: z.ZodType<DeleteTaxRateResponse>;
//# sourceMappingURL=deletetaxrateresponse.d.ts.map