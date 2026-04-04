import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Applications
 */
export type CreateApplicationResponse = {
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
export declare const CreateApplicationResponse$zodSchema: z.ZodType<CreateApplicationResponse>;
//# sourceMappingURL=createapplicationresponse.d.ts.map