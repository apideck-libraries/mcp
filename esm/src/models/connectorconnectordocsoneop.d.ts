import * as z from "zod";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorConnectorDocsOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorConnectorDocsOneGlobals$zodSchema: z.ZodType<ConnectorConnectorDocsOneGlobals>;
export type ConnectorConnectorDocsOneRequest = {
    xApideckAppId?: string | undefined;
    id: string;
    doc_id: string;
};
export declare const ConnectorConnectorDocsOneRequest$zodSchema: z.ZodType<ConnectorConnectorDocsOneRequest>;
export type ConnectorConnectorDocsOneResponse = string | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnexpectedErrorResponse;
export declare const ConnectorConnectorDocsOneResponse$zodSchema: z.ZodType<ConnectorConnectorDocsOneResponse>;
//# sourceMappingURL=connectorconnectordocsoneop.d.ts.map