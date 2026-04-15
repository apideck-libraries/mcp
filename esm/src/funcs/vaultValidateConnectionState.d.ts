import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { VaultValidateConnectionStateRequest } from "../models/vaultvalidateconnectionstateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Validate Connection State
 *
 * @remarks
 * This endpoint validates the current state of a given connection. This will perform different checks based on the connection auth type. For basic and apiKey auth types, the presence of required fields is checked.
 * For connectors that implement OAuth2, this operation forces the refresh flow for an access token regardless of its expiry.
 *
 * Note:
 *   - Do not include any credentials in the request body. This operation does not persist changes, but only triggers the validation of connection state.
 *   - If a refresh token flow was performed and successful, the new access token will then be used for subsequent API requests.
 */
export declare function vaultValidateConnectionState(client$: ApideckMcpCore, request: VaultValidateConnectionStateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vaultValidateConnectionState.d.ts.map