import * as z from "zod";
import { AgedCreditors } from "./agedcreditors.js";
/**
 * Aged Creditors
 */
export type GetAgedCreditorsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: AgedCreditors;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAgedCreditorsResponse$zodSchema: z.ZodType<GetAgedCreditorsResponse>;
//# sourceMappingURL=getagedcreditorsresponse.d.ts.map