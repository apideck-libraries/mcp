import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { HrisEmployeeSchedulesAllRequest } from "../models/hrisemployeeschedulesallop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List Employee Schedules
 *
 * @remarks
 * List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.
 */
export declare function hrisEmployeeSchedulesList(client$: ApideckMcpCore, request: HrisEmployeeSchedulesAllRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=hrisEmployeeSchedulesList.d.ts.map