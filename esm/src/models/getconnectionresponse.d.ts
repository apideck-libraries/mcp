import * as z from "zod";
import { Connection } from "./connection.js";
/**
 * Connection
 */
export type GetConnectionResponse = {
    status_code: number;
    status: string;
    data: Connection;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetConnectionResponse$zodSchema: z.ZodType<GetConnectionResponse>;
//# sourceMappingURL=getconnectionresponse.d.ts.map