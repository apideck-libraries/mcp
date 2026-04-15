import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Company updated
 */
export type UpdateCompanyResponse = {
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
export declare const UpdateCompanyResponse$zodSchema: z.ZodType<UpdateCompanyResponse>;
//# sourceMappingURL=updatecompanyresponse.d.ts.map