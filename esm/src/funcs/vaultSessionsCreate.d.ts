import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { VaultSessionsCreateRequest } from "../models/vaultsessionscreateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create Session
 *
 * @remarks
 * Making a POST request to this endpoint will initiate a Hosted Vault session. Redirect the consumer to the returned
 * URL to allow temporary access to manage their integrations and settings.
 *
 * Note: This is a short lived token that will expire after 1 hour (TTL: 3600).
 */
export declare function vaultSessionsCreate(client$: ApideckMcpCore, request?: VaultSessionsCreateRequest | undefined, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=vaultSessionsCreate.d.ts.map