import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { UserOutput } from "./useroutput.js";
/**
 * Users
 */
export type GetUsersResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<UserOutput>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetUsersResponse$zodSchema: z.ZodType<GetUsersResponse>;
//# sourceMappingURL=getusersresponse.d.ts.map