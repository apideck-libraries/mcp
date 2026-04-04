import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CrmCustomObjectSchemasUpdateRequest } from "../models/crmcustomobjectschemasupdateop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update custom object schema
 *
 * @remarks
 * Update custom object schema
 */
export declare function crmCustomObjectSchemasUpdate(client$: ApideckMcpCore, request: CrmCustomObjectSchemasUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=crmCustomObjectSchemasUpdate.d.ts.map