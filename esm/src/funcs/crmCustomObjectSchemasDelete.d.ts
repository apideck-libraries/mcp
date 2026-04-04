import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { CrmCustomObjectSchemasDeleteRequest } from "../models/crmcustomobjectschemasdeleteop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete custom object schema
 *
 * @remarks
 * Delete custom object schema
 */
export declare function crmCustomObjectSchemasDelete(client$: ApideckMcpCore, request: CrmCustomObjectSchemasDeleteRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=crmCustomObjectSchemasDelete.d.ts.map