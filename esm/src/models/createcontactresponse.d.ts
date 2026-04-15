import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Contact created
 */
export type CreateContactResponse = {
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
export declare const CreateContactResponse$zodSchema: z.ZodType<CreateContactResponse>;
//# sourceMappingURL=createcontactresponse.d.ts.map