import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { IssueTrackingCollectionTicketsAllRequest } from "../models/issuetrackingcollectionticketsallop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List Tickets
 *
 * @remarks
 * List Tickets
 */
export declare function issueTrackingCollectionTicketsList(client$: ApideckMcpCore, request: IssueTrackingCollectionTicketsAllRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=issueTrackingCollectionTicketsList.d.ts.map