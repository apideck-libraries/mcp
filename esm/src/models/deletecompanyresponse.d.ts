import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Company deleted
 */
export type DeleteCompanyResponse = {
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
export declare const DeleteCompanyResponse$zodSchema: z.ZodType<DeleteCompanyResponse>;
//# sourceMappingURL=deletecompanyresponse.d.ts.map