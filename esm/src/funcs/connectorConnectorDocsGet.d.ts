import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectorConnectorDocsOneRequest } from "../models/connectorconnectordocsoneop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum GetAcceptEnum {
    applicationJsonAccept = "application/json",
    textMarkdownAccept = "text/markdown"
}
/**
 * Get Connector Doc content
 *
 * @remarks
 * Get Connector Doc content
 */
export declare function connectorConnectorDocsGet(client$: ApideckMcpCore, request: ConnectorConnectorDocsOneRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=connectorConnectorDocsGet.d.ts.map