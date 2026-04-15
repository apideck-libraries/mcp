import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Custom object schema deleted
 */
export type DeleteCustomObjectSchemaResponse = {
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
export declare const DeleteCustomObjectSchemaResponse$zodSchema: z.ZodType<DeleteCustomObjectSchemaResponse>;
//# sourceMappingURL=deletecustomobjectschemaresponse.d.ts.map