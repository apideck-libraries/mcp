import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingAttachmentsDownloadRequest } from "../models/accountingattachmentsdownloadop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum DownloadAcceptEnum {
    applicationJsonAccept = "application/json",
    wildcardRootWildcardAccept = "*/*"
}
/**
 * Download Attachment
 *
 * @remarks
 * Download Attachment
 */
export declare function accountingAttachmentsDownload(client$: ApideckMcpCore, request: AccountingAttachmentsDownloadRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingAttachmentsDownload.d.ts.map