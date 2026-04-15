import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { WebhookWebhooksUpdateRequest } from "../models/webhookwebhooksupdateop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Update webhook subscription
 *
 * @remarks
 * Update a webhook subscription.
 *
 * **Delivery URL Validation**: When updating the `delivery_url`, it will be validated synchronously by sending an HTTP POST request with an HMAC signature. If validation fails (network error, timeout, non-2xx response), the webhook will still be updated but with `status: "disabled"` and `disabled_reason: "delivery_url_validation_failed"`. Validation only occurs when the URL is changed.
 *
 * **Important**: Always check the `status` and `disabled_reason` fields in the response to ensure the webhook is active.
 */
export declare function webhookWebhooksUpdate(client$: ApideckMcpCore, request: WebhookWebhooksUpdateRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=webhookWebhooksUpdate.d.ts.map