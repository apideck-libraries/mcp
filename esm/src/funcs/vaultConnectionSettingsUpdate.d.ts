import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { VaultConnectionSettingsUpdateRequest } from "../models/vaultconnectionsettingsupdateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update settings
 *
 * @remarks
 * Update default values for a connection's resource settings
 */
export declare function vaultConnectionSettingsUpdate(client$: ApideckMcpCore, request: VaultConnectionSettingsUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vaultConnectionSettingsUpdate.d.ts.map