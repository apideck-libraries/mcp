import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Custom object updated
 */
export type UpdateCustomObjectResponse = {
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
export declare const UpdateCustomObjectResponse$zodSchema: z.ZodType<UpdateCustomObjectResponse>;
//# sourceMappingURL=updatecustomobjectresponse.d.ts.map