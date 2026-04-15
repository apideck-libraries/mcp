import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Custom object deleted
 */
export type DeleteCustomObjectResponse = {
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
export declare const DeleteCustomObjectResponse$zodSchema: z.ZodType<DeleteCustomObjectResponse>;
//# sourceMappingURL=deletecustomobjectresponse.d.ts.map