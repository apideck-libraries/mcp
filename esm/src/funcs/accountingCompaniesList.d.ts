import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { AccountingCompaniesAllRequest } from "../models/accountingcompaniesallop.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List companies
 *
 * @remarks
 * List all companies accessible through the current connection. Only connectors that support multi-company access (x-apideck-supports-multi-company) will return a list of companies. Use the returned company ID in the x-apideck-company-id header to scope subsequent requests to a specific company.
 */
export declare function accountingCompaniesList(client$: ApideckMcpCore, request?: AccountingCompaniesAllRequest | undefined, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountingCompaniesList.d.ts.map