import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Activity created
 */
export type CreateActivityResponse = {
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
export declare const CreateActivityResponse$zodSchema: z.ZodType<CreateActivityResponse>;
//# sourceMappingURL=createactivityresponse.d.ts.map