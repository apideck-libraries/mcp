import * as z from "zod";
import { TrackingCategory } from "./trackingcategory.js";
/**
 * Tracking category
 */
export type GetTrackingCategoryResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: TrackingCategory;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTrackingCategoryResponse$zodSchema: z.ZodType<GetTrackingCategoryResponse>;
//# sourceMappingURL=gettrackingcategoryresponse.d.ts.map