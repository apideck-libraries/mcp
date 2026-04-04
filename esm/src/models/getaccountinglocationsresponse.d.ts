import * as z from "zod";
import { AccountingLocation } from "./accountinglocation.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Locations
 */
export type GetAccountingLocationsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<AccountingLocation>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetAccountingLocationsResponse$zodSchema: z.ZodType<GetAccountingLocationsResponse>;
//# sourceMappingURL=getaccountinglocationsresponse.d.ts.map