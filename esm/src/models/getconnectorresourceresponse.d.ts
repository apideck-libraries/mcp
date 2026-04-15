import * as z from "zod";
import { ConnectorResource } from "./connectorresource.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * ConnectorResources
 */
export type GetConnectorResourceResponse = {
    status_code: number;
    status: string;
    data: ConnectorResource;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
    meta?: Meta | undefined;
    links?: Links | undefined;
};
export declare const GetConnectorResourceResponse$zodSchema: z.ZodType<GetConnectorResourceResponse>;
//# sourceMappingURL=getconnectorresourceresponse.d.ts.map