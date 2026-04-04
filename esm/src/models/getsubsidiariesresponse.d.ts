import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Subsidiary } from "./subsidiary.js";
/**
 * Subsidiaries
 */
export type GetSubsidiariesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Subsidiary>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetSubsidiariesResponse$zodSchema: z.ZodType<GetSubsidiariesResponse>;
//# sourceMappingURL=getsubsidiariesresponse.d.ts.map