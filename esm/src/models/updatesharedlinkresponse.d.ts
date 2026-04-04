import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Shared Links
 */
export type UpdateSharedLinkResponse = {
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
export declare const UpdateSharedLinkResponse$zodSchema: z.ZodType<UpdateSharedLinkResponse>;
//# sourceMappingURL=updatesharedlinkresponse.d.ts.map