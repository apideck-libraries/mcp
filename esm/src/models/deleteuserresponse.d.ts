import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * User deleted
 */
export type DeleteUserResponse = {
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
export declare const DeleteUserResponse$zodSchema: z.ZodType<DeleteUserResponse>;
//# sourceMappingURL=deleteuserresponse.d.ts.map