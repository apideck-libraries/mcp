import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Drives
 */
export type CreateDriveResponse = {
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
export declare const CreateDriveResponse$zodSchema: z.ZodType<CreateDriveResponse>;
//# sourceMappingURL=createdriveresponse.d.ts.map