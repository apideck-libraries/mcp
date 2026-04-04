import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Applications
 */
export type DeleteApplicationResponse = {
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
export declare const DeleteApplicationResponse$zodSchema: z.ZodType<DeleteApplicationResponse>;
//# sourceMappingURL=deleteapplicationresponse.d.ts.map