import * as z from "zod";
import { SharedLinkOutput } from "./sharedlinkoutput.js";
/**
 * Shared Link
 */
export type GetSharedLinkResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: SharedLinkOutput;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetSharedLinkResponse$zodSchema: z.ZodType<GetSharedLinkResponse>;
//# sourceMappingURL=getsharedlinkresponse.d.ts.map