import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Activity deleted
 */
export type DeleteActivityResponse = {
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
export declare const DeleteActivityResponse$zodSchema: z.ZodType<DeleteActivityResponse>;
//# sourceMappingURL=deleteactivityresponse.d.ts.map