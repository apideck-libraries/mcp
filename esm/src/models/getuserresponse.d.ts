import * as z from "zod";
import { UserOutput } from "./useroutput.js";
/**
 * User
 */
export type GetUserResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UserOutput;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetUserResponse$zodSchema: z.ZodType<GetUserResponse>;
//# sourceMappingURL=getuserresponse.d.ts.map