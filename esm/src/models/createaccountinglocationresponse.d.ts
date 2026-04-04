import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Location
 */
export type CreateAccountingLocationResponse = {
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
export declare const CreateAccountingLocationResponse$zodSchema: z.ZodType<CreateAccountingLocationResponse>;
//# sourceMappingURL=createaccountinglocationresponse.d.ts.map