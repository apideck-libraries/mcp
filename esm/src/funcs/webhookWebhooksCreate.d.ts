import { ApideckMcpCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { APIError } from "../models/errors/apierror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { WebhookWebhooksAddRequest } from "../models/webhookwebhooksaddop.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Create webhook subscription
 *
 * @remarks
 * Create a webhook subscription to receive events.
 *
 * **Delivery URL Validation**: The provided `delivery_url` will be validated synchronously by sending an HTTP POST request with an HMAC signature. If validation fails (network error, timeout, non-2xx response), the webhook will still be created but with `status: "disabled"` and `disabled_reason: "delivery_url_validation_failed"`.
 *
 * **Important**: Always check the `status` and `disabled_reason` fields in the response to ensure the webhook is active.
 */
export declare function webhookWebhooksCreate(client$: ApideckMcpCore, request: WebhookWebhooksAddRequest, options?: RequestOptions): APIPromise<Result<Response, APIError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=webhookWebhooksCreate.d.ts.map