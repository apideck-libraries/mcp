import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { ProxyOptionsProxyRequest } from "../models/proxyoptionsproxyop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum OptionsAcceptEnum {
    applicationJsonAccept = "application/json",
    textCsvAccept = "text/csv",
    textPlainAccept = "text/plain",
    applicationOctetStreamAccept = "application/octet-stream",
    applicationPdfAccept = "application/pdf",
    applicationXmlAccept = "application/xml",
    textHtmlAccept = "text/html"
}
/**
 * OPTIONS
 *
 * @remarks
 * Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
 * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
 */
export declare function proxyOptions(client$: ApideckMcpCore, request: ProxyOptionsProxyRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=proxyOptions.d.ts.map