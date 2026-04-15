import * as z from "zod";
import { GetApiResourceResponse } from "./getapiresourceresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorApiResourcesOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorApiResourcesOneGlobals$zodSchema: z.ZodType<ConnectorApiResourcesOneGlobals>;
export type ConnectorApiResourcesOneRequest = {
    xApideckAppId?: string | undefined;
    id: string;
    resource_id: string;
};
export declare const ConnectorApiResourcesOneRequest$zodSchema: z.ZodType<ConnectorApiResourcesOneRequest>;
export type ConnectorApiResourcesOneResponse = GetApiResourceResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnexpectedErrorResponse;
export declare const ConnectorApiResourcesOneResponse$zodSchema: z.ZodType<ConnectorApiResourcesOneResponse>;
//# sourceMappingURL=connectorapiresourcesoneop.d.ts.map