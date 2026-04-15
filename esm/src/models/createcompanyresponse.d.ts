import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Company created
 */
export type CreateCompanyResponse = {
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
export declare const CreateCompanyResponse$zodSchema: z.ZodType<CreateCompanyResponse>;
//# sourceMappingURL=createcompanyresponse.d.ts.map