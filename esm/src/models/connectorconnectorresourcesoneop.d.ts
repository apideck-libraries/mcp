import * as z from "zod";
import { GetConnectorResourceResponse } from "./getconnectorresourceresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnifiedApiId } from "./unifiedapiid.js";
export type ConnectorConnectorResourcesOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorConnectorResourcesOneGlobals$zodSchema: z.ZodType<ConnectorConnectorResourcesOneGlobals>;
export type ConnectorConnectorResourcesOneRequest = {
    xApideckAppId?: string | undefined;
    id: string;
    resource_id: string;
    unified_api?: UnifiedApiId | undefined;
};
export declare const ConnectorConnectorResourcesOneRequest$zodSchema: z.ZodType<ConnectorConnectorResourcesOneRequest>;
export type ConnectorConnectorResourcesOneResponse = GetConnectorResourceResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnexpectedErrorResponse;
export declare const ConnectorConnectorResourcesOneResponse$zodSchema: z.ZodType<ConnectorConnectorResourcesOneResponse>;
//# sourceMappingURL=connectorconnectorresourcesoneop.d.ts.map