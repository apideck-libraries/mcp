import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { IssueTrackingCollectionTicketCommentsOneRequest } from "../models/issuetrackingcollectionticketcommentsoneop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get Comment
 *
 * @remarks
 * Get Comment
 */
export declare function issueTrackingCollectionTicketCommentsGet(client$: ApideckMcpCore, request: IssueTrackingCollectionTicketCommentsOneRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=issueTrackingCollectionTicketCommentsGet.d.ts.map