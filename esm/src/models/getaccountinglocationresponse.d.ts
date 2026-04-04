import * as z from "zod";
import { AccountingLocation } from "./accountinglocation.js";
/**
 * Location
 */
export type GetAccountingLocationResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: AccountingLocation;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAccountingLocationResponse$zodSchema: z.ZodType<GetAccountingLocationResponse>;
//# sourceMappingURL=getaccountinglocationresponse.d.ts.map