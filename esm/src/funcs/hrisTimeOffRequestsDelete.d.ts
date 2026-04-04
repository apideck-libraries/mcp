import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { HrisTimeOffRequestsDeleteRequest } from "../models/hristimeoffrequestsdeleteop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete Time Off Request
 *
 * @remarks
 * Delete Time Off Request
 */
export declare function hrisTimeOffRequestsDelete(client$: ApideckMcpCore, request: HrisTimeOffRequestsDeleteRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=hrisTimeOffRequestsDelete.d.ts.map