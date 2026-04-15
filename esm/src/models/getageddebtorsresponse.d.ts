import * as z from "zod";
import { AgedDebtors } from "./ageddebtors.js";
/**
 * Aged Debtors
 */
export type GetAgedDebtorsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: AgedDebtors;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAgedDebtorsResponse$zodSchema: z.ZodType<GetAgedDebtorsResponse>;
//# sourceMappingURL=getageddebtorsresponse.d.ts.map