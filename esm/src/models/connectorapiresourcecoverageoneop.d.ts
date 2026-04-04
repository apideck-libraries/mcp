import * as z from "zod";
import { GetApiResourceCoverageResponse } from "./getapiresourcecoverageresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
export type ConnectorApiResourceCoverageOneGlobals = {
    xApideckAppId?: string | undefined;
};
export declare const ConnectorApiResourceCoverageOneGlobals$zodSchema: z.ZodType<ConnectorApiResourceCoverageOneGlobals>;
export type ConnectorApiResourceCoverageOneRequest = {
    xApideckAppId?: string | undefined;
    id: string;
    resource_id: string;
};
export declare const ConnectorApiResourceCoverageOneRequest$zodSchema: z.ZodType<ConnectorApiResourceCoverageOneRequest>;
export type ConnectorApiResourceCoverageOneResponse = GetApiResourceCoverageResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnexpectedErrorResponse;
export declare const ConnectorApiResourceCoverageOneResponse$zodSchema: z.ZodType<ConnectorApiResourceCoverageOneResponse>;
//# sourceMappingURL=connectorapiresourcecoverageoneop.d.ts.map