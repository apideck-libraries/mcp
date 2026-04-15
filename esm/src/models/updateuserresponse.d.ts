import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * User updated
 */
export type UpdateUserResponse = {
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
export declare const UpdateUserResponse$zodSchema: z.ZodType<UpdateUserResponse>;
//# sourceMappingURL=updateuserresponse.d.ts.map