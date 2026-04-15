import * as z from "zod";
import { GetConnectorResponse } from "./getconnectorresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorConnectorsOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorConnectorsOneGlobals$zodSchema: z.ZodType<ConnectorConnectorsOneGlobals>;
export type ConnectorConnectorsOneRequest = {
    xApideckAppId?: string | undefined;
    id: string;
};
export declare const ConnectorConnectorsOneRequest$zodSchema: z.ZodType<ConnectorConnectorsOneRequest>;
export type ConnectorConnectorsOneResponse = GetConnectorResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnexpectedErrorResponse;
export declare const ConnectorConnectorsOneResponse$zodSchema: z.ZodType<ConnectorConnectorsOneResponse>;
//# sourceMappingURL=connectorconnectorsoneop.d.ts.map