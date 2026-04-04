import * as z from "zod";
import { CustomObject } from "./customobject.js";
/**
 * Custom object
 */
export type GetCustomObjectResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: CustomObject;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCustomObjectResponse$zodSchema: z.ZodType<GetCustomObjectResponse>;
//# sourceMappingURL=getcustomobjectresponse.d.ts.map