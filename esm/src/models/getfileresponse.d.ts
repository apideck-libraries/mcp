import * as z from "zod";
import { UnifiedFile } from "./unifiedfile.js";
/**
 * File
 */
export type GetFileResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedFile;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetFileResponse$zodSchema: z.ZodType<GetFileResponse>;
//# sourceMappingURL=getfileresponse.d.ts.map