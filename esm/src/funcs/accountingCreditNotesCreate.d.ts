import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingCreditNotesAddRequest } from "../models/accountingcreditnotesaddop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create Credit Note
 *
 * @remarks
 * Create Credit Note
 */
export declare function accountingCreditNotesCreate(client$: ApideckMcpCore, request: AccountingCreditNotesAddRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingCreditNotesCreate.d.ts.map