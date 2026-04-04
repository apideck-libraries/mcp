import * as z from "zod";
import { Subsidiary } from "./subsidiary.js";
/**
 * Subsidiary
 */
export type GetSubsidiaryResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Subsidiary;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetSubsidiaryResponse$zodSchema: z.ZodType<GetSubsidiaryResponse>;
//# sourceMappingURL=getsubsidiaryresponse.d.ts.map