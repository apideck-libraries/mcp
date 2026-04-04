import * as z from "zod";
import { Connection } from "./connection.js";
/**
 * Connections
 */
export type GetConnectionsResponse = {
    status_code: number;
    status: string;
    data: Array<Connection>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetConnectionsResponse$zodSchema: z.ZodType<GetConnectionsResponse>;
//# sourceMappingURL=getconnectionsresponse.d.ts.map