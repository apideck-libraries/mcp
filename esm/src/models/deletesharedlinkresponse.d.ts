import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Shared Links
 */
export type DeleteSharedLinkResponse = {
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
export declare const DeleteSharedLinkResponse$zodSchema: z.ZodType<DeleteSharedLinkResponse>;
//# sourceMappingURL=deletesharedlinkresponse.d.ts.map