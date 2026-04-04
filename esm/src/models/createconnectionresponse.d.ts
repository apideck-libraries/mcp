import * as z from "zod";
import { Connection } from "./connection.js";
/**
 * Connection created
 */
export type CreateConnectionResponse = {
    status_code: number;
    status: string;
    data: Connection;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const CreateConnectionResponse$zodSchema: z.ZodType<CreateConnectionResponse>;
//# sourceMappingURL=createconnectionresponse.d.ts.map