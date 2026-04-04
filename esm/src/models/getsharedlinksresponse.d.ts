import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { SharedLinkOutput } from "./sharedlinkoutput.js";
/**
 * Shared Links
 */
export type GetSharedLinksResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<SharedLinkOutput>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetSharedLinksResponse$zodSchema: z.ZodType<GetSharedLinksResponse>;
//# sourceMappingURL=getsharedlinksresponse.d.ts.map