import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Lead deleted
 */
export type DeleteLeadResponse = {
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
export declare const DeleteLeadResponse$zodSchema: z.ZodType<DeleteLeadResponse>;
//# sourceMappingURL=deleteleadresponse.d.ts.map