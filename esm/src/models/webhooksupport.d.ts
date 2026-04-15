import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Mode of the webhook support.
 */
export declare const WebhookSupportMode: {
    readonly Native: "native";
    readonly Virtual: "virtual";
    readonly None: "none";
};
/**
 * Mode of the webhook support.
 */
export type WebhookSupportMode = OpenEnum<typeof WebhookSupportMode>;
export declare const WebhookSupportMode$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    none: "none";
    native: "native";
    virtual: "virtual";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Received events are scoped to connection or across integration.
 */
export declare const SubscriptionLevel: {
    readonly Connection: "connection";
    readonly Integration: "integration";
};
/**
 * Received events are scoped to connection or across integration.
 */
export type SubscriptionLevel = OpenEnum<typeof SubscriptionLevel>;
export declare const SubscriptionLevel$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    connection: "connection";
    integration: "integration";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * How the subscription is managed in the downstream.
 */
export declare const ManagedVia: {
    readonly Manual: "manual";
    readonly Api: "api";
};
/**
 * How the subscription is managed in the downstream.
 */
export type ManagedVia = OpenEnum<typeof ManagedVia>;
export declare const ManagedVia$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    manual: "manual";
    api: "api";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The window unit for the rate.
 */
export declare const Unit: {
    readonly Second: "second";
    readonly Minute: "minute";
    readonly Hour: "hour";
    readonly Day: "day";
};
/**
 * The window unit for the rate.
 */
export type Unit = OpenEnum<typeof Unit>;
export declare const Unit$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    hour: "hour";
    second: "second";
    minute: "minute";
    day: "day";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * The rate at which requests for resources will be made to downstream.
 */
export type RequestRate = {
    rate: number;
    size: number;
    unit: Unit;
};
export declare const RequestRate$zodSchema: z.ZodType<RequestRate>;
export type WebhookSupportResources = {
    events?: Array<string> | undefined;
};
export declare const WebhookSupportResources$zodSchema: z.ZodType<WebhookSupportResources>;
/**
 * Virtual webhook config for the connector.
 */
export type VirtualWebhooks = {
    request_rate: RequestRate;
    resources?: {
        [k: string]: WebhookSupportResources;
    } | undefined;
};
export declare const VirtualWebhooks$zodSchema: z.ZodType<VirtualWebhooks>;
/**
 * How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
 */
export type WebhookSupport = {
    mode?: WebhookSupportMode | undefined;
    subscription_level?: SubscriptionLevel | undefined;
    managed_via?: ManagedVia | undefined;
    virtual_webhooks?: VirtualWebhooks | undefined;
};
export declare const WebhookSupport$zodSchema: z.ZodType<WebhookSupport>;
//# sourceMappingURL=webhooksupport.d.ts.map