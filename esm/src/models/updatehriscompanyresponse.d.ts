import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Companies
 */
export type UpdateHrisCompanyResponse = {
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
export declare const UpdateHrisCompanyResponse$zodSchema: z.ZodType<UpdateHrisCompanyResponse>;
//# sourceMappingURL=updatehriscompanyresponse.d.ts.map