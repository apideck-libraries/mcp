import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Bank Account updated
 */
export type UpdateBankAccountResponse = {
    status_code: number;
    status: string;
    service?: string | undefined;
    resource?: string | undefined;
    operation?: string | undefined;
    data: UnifiedId;
};
export declare const UpdateBankAccountResponse$zodSchema: z.ZodType<UpdateBankAccountResponse>;
//# sourceMappingURL=updatebankaccountresponse.d.ts.map