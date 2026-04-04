import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { FileStorageUploadSessionsAddRequest } from "../models/filestorageuploadsessionsaddop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Start Upload Session
 *
 * @remarks
 * Start an Upload Session. Upload sessions are used to upload large files, use the [Upload File](#operation/filesUpload) endpoint to upload smaller files (up to 100MB). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
 */
export declare function fileStorageUploadSessionsCreate(client$: ApideckMcpCore, request: FileStorageUploadSessionsAddRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fileStorageUploadSessionsCreate.d.ts.map