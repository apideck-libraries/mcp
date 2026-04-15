import * as z from "zod";
import { Connector } from "./connector.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Connectors
 */
export type GetConnectorsResponse = {
    status_code: number;
    status: string;
    data: Array<Connector>;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetConnectorsResponse$zodSchema: z.ZodType<GetConnectorsResponse>;
//# sourceMappingURL=getconnectorsresponse.d.ts.map