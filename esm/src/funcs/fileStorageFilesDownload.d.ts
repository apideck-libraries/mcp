import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { FileStorageFilesDownloadRequest } from "../models/filestoragefilesdownloadop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum DownloadAcceptEnum {
    applicationJsonAccept = "application/json",
    wildcardRootWildcardAccept = "*/*"
}
/**
 * Download File
 *
 * @remarks
 * Download File
 */
export declare function fileStorageFilesDownload(client$: ApideckMcpCore, request: FileStorageFilesDownloadRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fileStorageFilesDownload.d.ts.map