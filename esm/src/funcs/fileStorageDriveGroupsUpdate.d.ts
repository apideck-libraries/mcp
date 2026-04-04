import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { FileStorageDriveGroupsUpdateRequest } from "../models/filestoragedrivegroupsupdateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update DriveGroup
 *
 * @remarks
 * Update DriveGroup
 */
export declare function fileStorageDriveGroupsUpdate(client$: ApideckMcpCore, request: FileStorageDriveGroupsUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fileStorageDriveGroupsUpdate.d.ts.map