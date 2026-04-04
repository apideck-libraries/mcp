import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Lead created
 */
export type CreateLeadResponse = {
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
export declare const CreateLeadResponse$zodSchema: z.ZodType<CreateLeadResponse>;
//# sourceMappingURL=createleadresponse.d.ts.map