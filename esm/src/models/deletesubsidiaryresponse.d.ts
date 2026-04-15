import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Subsidiarys
 */
export type DeleteSubsidiaryResponse = {
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
export declare const DeleteSubsidiaryResponse$zodSchema: z.ZodType<DeleteSubsidiaryResponse>;
//# sourceMappingURL=deletesubsidiaryresponse.d.ts.map