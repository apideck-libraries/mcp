import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingLedgerAccountsAllRequest } from "../models/accountingledgeraccountsallop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List Ledger Accounts
 *
 * @remarks
 * List Ledger Accounts
 */
export declare function accountingLedgerAccountsList(client$: ApideckMcpCore, request?: AccountingLedgerAccountsAllRequest | undefined, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingLedgerAccountsList.d.ts.map