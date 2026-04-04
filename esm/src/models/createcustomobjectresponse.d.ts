import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Custom object created
 */
export type CreateCustomObjectResponse = {
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
export declare const CreateCustomObjectResponse$zodSchema: z.ZodType<CreateCustomObjectResponse>;
//# sourceMappingURL=createcustomobjectresponse.d.ts.map