import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { TrackingCategory } from "./trackingcategory.js";
/**
 * Tracking categories
 */
export type GetTrackingCategoriesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<TrackingCategory>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTrackingCategoriesResponse$zodSchema: z.ZodType<GetTrackingCategoriesResponse>;
//# sourceMappingURL=gettrackingcategoriesresponse.d.ts.map