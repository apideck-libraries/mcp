import * as z from "zod";
import { CustomFieldFinder } from "./customfieldfinder.js";
/**
 * Custom mapping
 */
export type GetCustomFieldsResponse = {
    status_code: number;
    status: string;
    data: Array<CustomFieldFinder>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCustomFieldsResponse$zodSchema: z.ZodType<GetCustomFieldsResponse>;
//# sourceMappingURL=getcustomfieldsresponse.d.ts.map