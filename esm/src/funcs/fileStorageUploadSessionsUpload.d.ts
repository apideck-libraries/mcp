import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { FileStorageUploadSessionsUploadRequest } from "../models/filestorageuploadsessionsuploadop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Upload part of File to Upload Session
 *
 * @remarks
 * Upload part of File to Upload Session (max 100MB). Get `part_size` from [Get Upload Session](#operation/uploadSessionsOne) first. Every File part (except the last one) uploaded to this endpoint should have Content-Length equal to `part_size`. Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
 */
export declare function fileStorageUploadSessionsUpload(client$: ApideckMcpCore, request: FileStorageUploadSessionsUploadRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fileStorageUploadSessionsUpload.d.ts.map