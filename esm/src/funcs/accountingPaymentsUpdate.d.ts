import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingPaymentsUpdateRequest } from "../models/accountingpaymentsupdateop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update Payment
 *
 * @remarks
 * Update Payment
 */
export declare function accountingPaymentsUpdate(client$: ApideckMcpCore, request: AccountingPaymentsUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingPaymentsUpdate.d.ts.map