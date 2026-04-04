import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingExpenseCategoriesDeleteRequest } from "../models/accountingexpensecategoriesdeleteop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete Expense Category
 *
 * @remarks
 * Delete Expense Category
 */
export declare function accountingExpenseCategoriesDelete(client$: ApideckMcpCore, request: AccountingExpenseCategoriesDeleteRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingExpenseCategoriesDelete.d.ts.map