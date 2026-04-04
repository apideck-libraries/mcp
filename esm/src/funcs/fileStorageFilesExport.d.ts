import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { FileStorageFilesExportRequest } from "../models/filestoragefilesexportop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
export declare enum ExportAcceptEnum {
    applicationJsonAccept = "application/json",
    wildcardRootWildcardAccept = "*/*"
}
/**
 * Export File
 *
 * @remarks
 * Export File
 */
export declare function fileStorageFilesExport(client$: ApideckMcpCore, request: FileStorageFilesExportRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fileStorageFilesExport.d.ts.map