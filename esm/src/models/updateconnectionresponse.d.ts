import * as z from "zod";
import { Connection } from "./connection.js";
/**
 * Connection updated
 */
export type UpdateConnectionResponse = {
    status_code: number;
    status: string;
    data: Connection;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const UpdateConnectionResponse$zodSchema: z.ZodType<UpdateConnectionResponse>;
//# sourceMappingURL=updateconnectionresponse.d.ts.map