import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { IssueTrackingCollectionTicketsUpdateRequest } from "../models/issuetrackingcollectionticketsupdateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update Ticket
 *
 * @remarks
 * Update Ticket
 */
export declare function issueTrackingCollectionTicketsUpdate(client$: ApideckMcpCore, request: IssueTrackingCollectionTicketsUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=issueTrackingCollectionTicketsUpdate.d.ts.map