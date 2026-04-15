import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Activity updated
 */
export type UpdateActivityResponse = {
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
export declare const UpdateActivityResponse$zodSchema: z.ZodType<UpdateActivityResponse>;
//# sourceMappingURL=updateactivityresponse.d.ts.map