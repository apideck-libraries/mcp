import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Tracking category deleted
 */
export type DeleteTrackingCategoryResponse = {
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
export declare const DeleteTrackingCategoryResponse$zodSchema: z.ZodType<DeleteTrackingCategoryResponse>;
//# sourceMappingURL=deletetrackingcategoryresponse.d.ts.map