import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Contact deleted
 */
export type DeleteContactResponse = {
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
export declare const DeleteContactResponse$zodSchema: z.ZodType<DeleteContactResponse>;
//# sourceMappingURL=deletecontactresponse.d.ts.map