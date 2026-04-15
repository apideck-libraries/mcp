import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { VaultCreateCallbackStateRequest } from "../models/vaultcreatecallbackstateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create Callback State
 *
 * @remarks
 * This endpoint creates a callback state that can be used to issue requests to the callback endpoint.
 */
export declare function vaultCreateCallbackState(client$: ApideckMcpCore, request: VaultCreateCallbackStateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vaultCreateCallbackState.d.ts.map