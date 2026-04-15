import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Tracking category created
 */
export type CreateTrackingCategoryResponse = {
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
export declare const CreateTrackingCategoryResponse$zodSchema: z.ZodType<CreateTrackingCategoryResponse>;
//# sourceMappingURL=createtrackingcategoryresponse.d.ts.map