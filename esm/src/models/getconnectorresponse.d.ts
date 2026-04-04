import * as z from "zod";
import { Connector } from "./connector.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * Connectors
 */
export type GetConnectorResponse = {
    status_code: number;
    status: string;
    data: Connector;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetConnectorResponse$zodSchema: z.ZodType<GetConnectorResponse>;
//# sourceMappingURL=getconnectorresponse.d.ts.map