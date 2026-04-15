import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { ProxyDeleteProxyRequest } from "../models/proxydeleteproxyop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum DeleteAcceptEnum {
    applicationJsonAccept = "application/json",
    textCsvAccept = "text/csv",
    textPlainAccept = "text/plain",
    applicationOctetStreamAccept = "application/octet-stream",
    applicationPdfAccept = "application/pdf",
    applicationXmlAccept = "application/xml",
    textHtmlAccept = "text/html"
}
/**
 * DELETE
 *
 * @remarks
 * Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
 * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
 */
export declare function proxyDelete(client$: ApideckMcpCore, request: ProxyDeleteProxyRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=proxyDelete.d.ts.map