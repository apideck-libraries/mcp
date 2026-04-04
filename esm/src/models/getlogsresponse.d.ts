import * as z from "zod";
import { Links } from "./links.js";
import { Log } from "./log.js";
import { Meta } from "./meta.js";
/**
 * Logs
 */
export type GetLogsResponse = {
    status_code: number;
    status: string;
    data: Array<Log>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetLogsResponse$zodSchema: z.ZodType<GetLogsResponse>;
//# sourceMappingURL=getlogsresponse.d.ts.map