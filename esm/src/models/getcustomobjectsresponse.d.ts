import * as z from "zod";
import { CustomObject } from "./customobject.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Custom objects
 */
export type GetCustomObjectsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<CustomObject>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetCustomObjectsResponse$zodSchema: z.ZodType<GetCustomObjectsResponse>;
//# sourceMappingURL=getcustomobjectsresponse.d.ts.map