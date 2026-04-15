import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { AuthType } from "./authtype.js";
import { ConnectionState } from "./connectionstate.js";
import { ConsentRecord } from "./consentrecord.js";
import { ConsentRecordInput } from "./consentrecordinput.js";
import { ConsentState } from "./consentstate.js";
import { CustomMapping } from "./custommapping.js";
import { CustomMappingInput } from "./custommappinginput.js";
import { DataScopes } from "./datascopes.js";
import { DataScopesInput } from "./datascopesinput.js";
import { FormField } from "./formfield.js";
import { FormFieldOption } from "./formfieldoption.js";
import { IntegrationState } from "./integrationstate.js";
import { OAuthGrantType } from "./oauthgranttype.js";
import { WebhookSubscription } from "./webhooksubscription.js";
/**
 * Status of the connection.
 */
export declare const ConnectionStatus: {
    readonly Live: "live";
    readonly Upcoming: "upcoming";
    readonly Requested: "requested";
};
/**
 * Status of the connection.
 */
export type ConnectionStatus = OpenEnum<typeof ConnectionStatus>;
export declare const ConnectionStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    requested: "requested";
    live: "live";
    upcoming: "upcoming";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export declare const Target: {
    readonly CustomFields: "custom_fields";
    readonly Resource: "resource";
};
export type Target = OpenEnum<typeof Target>;
export declare const Target$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    resource: "resource";
    custom_fields: "custom_fields";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type ConnectionValue1 = string | number | number;
export declare const ConnectionValue1$zodSchema: z.ZodType<ConnectionValue1>;
export type ConnectionValue2 = string | number | number | boolean | Array<string | number | number>;
export declare const ConnectionValue2$zodSchema: z.ZodType<ConnectionValue2>;
export type Default = {
    target?: Target | undefined;
    id?: string | undefined;
    options?: Array<FormFieldOption> | undefined;
    value?: string | number | number | boolean | Array<string | number | number> | undefined;
};
export declare const Default$zodSchema: z.ZodType<Default>;
export type Configuration = {
    resource?: string | undefined;
    defaults?: Array<Default> | undefined;
};
export declare const Configuration$zodSchema: z.ZodType<Configuration>;
/**
 * Operational health status of the connection
 */
export declare const Health: {
    readonly Revoked: "revoked";
    readonly MissingSettings: "missing_settings";
    readonly NeedsConsent: "needs_consent";
    readonly NeedsAuth: "needs_auth";
    readonly PendingRefresh: "pending_refresh";
    readonly Ok: "ok";
};
/**
 * Operational health status of the connection
 */
export type Health = OpenEnum<typeof Health>;
export declare const Health$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    revoked: "revoked";
    missing_settings: "missing_settings";
    needs_consent: "needs_consent";
    needs_auth: "needs_auth";
    pending_refresh: "pending_refresh";
    ok: "ok";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Connection = {
    id?: string | undefined;
    service_id?: string | undefined;
    name?: string | undefined;
    tag_line?: string | undefined;
    unified_api?: string | undefined;
    state?: ConnectionState | undefined;
    integration_state?: IntegrationState | undefined;
    auth_type?: AuthType | undefined;
    oauth_grant_type?: OAuthGrantType | undefined;
    status?: ConnectionStatus | undefined;
    enabled?: boolean | undefined;
    website?: string | undefined;
    icon?: string | undefined;
    logo?: string | undefined;
    authorize_url?: string | null | undefined;
    revoke_url?: string | null | undefined;
    settings?: {
        [k: string]: any;
    } | null | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    form_fields?: Array<FormField> | undefined;
    configuration?: Array<Configuration> | undefined;
    configurable_resources?: Array<string> | undefined;
    resource_schema_support?: Array<string> | undefined;
    resource_settings_support?: Array<string> | undefined;
    validation_support?: boolean | undefined;
    schema_support?: boolean | undefined;
    settings_required_for_authorization?: Array<string> | undefined;
    subscriptions?: Array<WebhookSubscription> | undefined;
    has_guide?: boolean | undefined;
    custom_mappings?: Array<CustomMapping> | undefined;
    consent_state?: ConsentState | undefined;
    consents?: Array<ConsentRecord> | undefined;
    latest_consent?: ConsentRecord | undefined;
    application_data_scopes?: DataScopes | undefined;
    health?: Health | undefined;
    credentials_expire_at?: number | undefined;
    last_refresh_failed_at?: number | undefined;
    created_at?: number | undefined;
    updated_at?: number | null | undefined;
};
export declare const Connection$zodSchema: z.ZodType<Connection>;
export type DefaultInput = {
    id?: string | undefined;
    options?: Array<FormFieldOption> | undefined;
    value?: string | number | number | boolean | Array<string | number | number> | undefined;
};
export declare const DefaultInput$zodSchema: z.ZodType<DefaultInput>;
export type ConfigurationInput = {
    resource?: string | undefined;
    defaults?: Array<DefaultInput> | undefined;
};
export declare const ConfigurationInput$zodSchema: z.ZodType<ConfigurationInput>;
export type ConnectionInput = {
    enabled?: boolean | undefined;
    settings?: {
        [k: string]: any;
    } | null | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    configuration?: Array<ConfigurationInput> | undefined;
    custom_mappings?: Array<CustomMappingInput> | undefined;
    consent_state?: ConsentState | undefined;
    latest_consent?: ConsentRecordInput | undefined;
    application_data_scopes?: DataScopesInput | undefined;
};
export declare const ConnectionInput$zodSchema: z.ZodType<ConnectionInput>;
//# sourceMappingURL=connection.d.ts.map