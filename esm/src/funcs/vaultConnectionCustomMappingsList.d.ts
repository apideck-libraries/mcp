import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { VaultConnectionCustomMappingsAllRequest } from "../models/vaultconnectioncustommappingsallop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List connection custom mappings
 *
 * @remarks
 * This endpoint returns a list of custom mappings for a connection.
 */
export declare function vaultConnectionCustomMappingsList(client$: ApideckMcpCore, request: VaultConnectionCustomMappingsAllRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vaultConnectionCustomMappingsList.d.ts.map