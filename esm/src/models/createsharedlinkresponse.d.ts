import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Shared Links
 */
export type CreateSharedLinkResponse = {
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
export declare const CreateSharedLinkResponse$zodSchema: z.ZodType<CreateSharedLinkResponse>;
//# sourceMappingURL=createsharedlinkresponse.d.ts.map