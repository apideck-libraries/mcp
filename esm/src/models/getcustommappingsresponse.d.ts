import * as z from "zod";
import { CustomMapping } from "./custommapping.js";
/**
 * Custom mapping
 */
export type GetCustomMappingsResponse = {
    status_code: number;
    status: string;
    data: Array<CustomMapping>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetCustomMappingsResponse$zodSchema: z.ZodType<GetCustomMappingsResponse>;
//# sourceMappingURL=getcustommappingsresponse.d.ts.map