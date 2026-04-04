import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingTrackingCategoriesUpdateRequest } from "../models/accountingtrackingcategoriesupdateop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update Tracking Category
 *
 * @remarks
 * Update Tracking Category
 */
export declare function accountingTrackingCategoriesUpdate(client$: ApideckMcpCore, request: AccountingTrackingCategoriesUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingTrackingCategoriesUpdate.d.ts.map