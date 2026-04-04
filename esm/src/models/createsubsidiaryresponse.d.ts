import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Subsidiaries
 */
export type CreateSubsidiaryResponse = {
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
export declare const CreateSubsidiaryResponse$zodSchema: z.ZodType<CreateSubsidiaryResponse>;
//# sourceMappingURL=createsubsidiaryresponse.d.ts.map