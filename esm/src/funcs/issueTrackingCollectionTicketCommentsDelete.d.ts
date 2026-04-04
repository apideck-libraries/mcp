import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { IssueTrackingCollectionTicketCommentsDeleteRequest } from "../models/issuetrackingcollectionticketcommentsdeleteop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Delete Comment
 *
 * @remarks
 * Delete Comment
 */
export declare function issueTrackingCollectionTicketCommentsDelete(client$: ApideckMcpCore, request: IssueTrackingCollectionTicketCommentsDeleteRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=issueTrackingCollectionTicketCommentsDelete.d.ts.map