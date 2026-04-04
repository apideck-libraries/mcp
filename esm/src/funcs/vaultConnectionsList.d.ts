import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { VaultConnectionsAllRequest } from "../models/vaultconnectionsallop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get all connections
 *
 * @remarks
 * This endpoint includes all the configured integrations and contains the required assets
 * to build an integrations page where your users can install integrations.
 * OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
 */
export declare function vaultConnectionsList(client$: ApideckMcpCore, request?: VaultConnectionsAllRequest | undefined, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vaultConnectionsList.d.ts.map