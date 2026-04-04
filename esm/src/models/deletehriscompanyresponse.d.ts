import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Companies
 */
export type DeleteHrisCompanyResponse = {
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
export declare const DeleteHrisCompanyResponse$zodSchema: z.ZodType<DeleteHrisCompanyResponse>;
//# sourceMappingURL=deletehriscompanyresponse.d.ts.map