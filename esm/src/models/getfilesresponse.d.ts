import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { UnifiedFile } from "./unifiedfile.js";
/**
 * Files
 */
export type GetFilesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<UnifiedFile>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetFilesResponse$zodSchema: z.ZodType<GetFilesResponse>;
//# sourceMappingURL=getfilesresponse.d.ts.map