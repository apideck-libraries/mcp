import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { FileStorageUploadSessionsFinishRequest } from "../models/filestorageuploadsessionsfinishop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Finish Upload Session
 *
 * @remarks
 * Finish Upload Session. Only call this endpoint after all File parts have been uploaded to [Upload part of File](#operation/uploadSessionsUpload). Note that the base URL is upload.apideck.com instead of unify.apideck.com. For more information on uploads, refer to the [file upload guide](/guides/file-upload).
 */
export declare function fileStorageUploadSessionsFinish(client$: ApideckMcpCore, request: FileStorageUploadSessionsFinishRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fileStorageUploadSessionsFinish.d.ts.map