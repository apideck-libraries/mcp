import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Status } from "./status.js";
import { UnifiedApiId } from "./unifiedapiid.js";
import { WebhookEventType } from "./webhookeventtype.js";
/**
 * Indicates why the webhook has been disabled. `retry_limit`: webhook reached its retry limit. `usage_limit`: account is over its usage limit. `delivery_url_validation_failed`: delivery URL failed validation during webhook creation or update.
 */
export declare const DisabledReason: {
    readonly None: "none";
    readonly RetryLimit: "retry_limit";
    readonly UsageLimit: "usage_limit";
    readonly DeliveryUrlValidationFailed: "delivery_url_validation_failed";
};
/**
 * Indicates why the webhook has been disabled. `retry_limit`: webhook reached its retry limit. `usage_limit`: account is over its usage limit. `delivery_url_validation_failed`: delivery URL failed validation during webhook creation or update.
 */
export type DisabledReason = OpenEnum<typeof DisabledReason>;
export declare const DisabledReason$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    none: "none";
    retry_limit: "retry_limit";
    usage_limit: "usage_limit";
    delivery_url_validation_failed: "delivery_url_validation_failed";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Webhook = {
    id?: string | undefined;
    description?: string | null | undefined;
    unified_api: UnifiedApiId;
    status: Status;
    disabled_reason?: DisabledReason | undefined;
    delivery_url: string;
    execute_base_url: string;
    events: Array<WebhookEventType>;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
};
export declare const Webhook$zodSchema: z.ZodType<Webhook>;
//# sourceMappingURL=webhook.d.ts.map