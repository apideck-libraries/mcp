import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Custom object schema updated
 */
export type UpdateCustomObjectSchemaResponse = {
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
export declare const UpdateCustomObjectSchemaResponse$zodSchema: z.ZodType<UpdateCustomObjectSchemaResponse>;
//# sourceMappingURL=updatecustomobjectschemaresponse.d.ts.map