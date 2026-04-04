import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { ProxyPostProxyRequest } from "../models/proxypostproxyop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum PostAcceptEnum {
    applicationJsonAccept = "application/json",
    textCsvAccept = "text/csv",
    textPlainAccept = "text/plain",
    applicationOctetStreamAccept = "application/octet-stream",
    applicationPdfAccept = "application/pdf",
    applicationXmlAccept = "application/xml",
    textHtmlAccept = "text/html"
}
/**
 * POST
 *
 * @remarks
 * Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
 * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
 */
export declare function proxyPost(client$: ApideckMcpCore, request: ProxyPostProxyRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=proxyPost.d.ts.map