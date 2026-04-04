import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * User created
 */
export type CreateUserResponse = {
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
export declare const CreateUserResponse$zodSchema: z.ZodType<CreateUserResponse>;
//# sourceMappingURL=createuserresponse.d.ts.map