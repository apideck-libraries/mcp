import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Tracking category updated
 */
export type UpdateTrackingCategoryResponse = {
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
export declare const UpdateTrackingCategoryResponse$zodSchema: z.ZodType<UpdateTrackingCategoryResponse>;
//# sourceMappingURL=updatetrackingcategoryresponse.d.ts.map