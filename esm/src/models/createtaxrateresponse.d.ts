import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * TaxRate created
 */
export type CreateTaxRateResponse = {
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
export declare const CreateTaxRateResponse$zodSchema: z.ZodType<CreateTaxRateResponse>;
//# sourceMappingURL=createtaxrateresponse.d.ts.map