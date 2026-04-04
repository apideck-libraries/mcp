import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { ConnectorsFilter } from "./connectorsfilter.js";
import { GetConnectorsResponse } from "./getconnectorsresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorConnectorsAllGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorConnectorsAllGlobals$zodSchema: z.ZodType<ConnectorConnectorsAllGlobals>;
export type ConnectorConnectorsAllRequest = {
    xApideckAppId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    filter?: ConnectorsFilter | undefined;
};
export declare const ConnectorConnectorsAllRequest$zodSchema: z.ZodType<ConnectorConnectorsAllRequest>;
export type ConnectorConnectorsAllResponseResult = GetConnectorsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | UnexpectedErrorResponse;
export declare const ConnectorConnectorsAllResponseResult$zodSchema: z.ZodType<ConnectorConnectorsAllResponseResult>;
export type ConnectorConnectorsAllResponse = {
    Result: GetConnectorsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | UnexpectedErrorResponse;
};
export declare const ConnectorConnectorsAllResponse$zodSchema: z.ZodType<ConnectorConnectorsAllResponse>;
//# sourceMappingURL=connectorconnectorsallop.d.ts.map