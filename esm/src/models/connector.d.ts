import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { ConnectorDoc } from "./connectordoc.js";
import { ConnectorEvent } from "./connectorevent.js";
import { ConnectorSetting } from "./connectorsetting.js";
import { ConnectorStatus } from "./connectorstatus.js";
import { LinkedConnectorResource } from "./linkedconnectorresource.js";
import { SchemaSupport } from "./schemasupport.js";
import { UnifiedApiId } from "./unifiedapiid.js";
import { WebhookSupport } from "./webhooksupport.js";
/**
 * Type of authorization used by the connector
 */
export declare const ConnectorAuthType: {
    readonly Oauth2: "oauth2";
    readonly ApiKey: "apiKey";
    readonly Basic: "basic";
    readonly Custom: "custom";
    readonly None: "none";
};
/**
 * Type of authorization used by the connector
 */
export type ConnectorAuthType = OpenEnum<typeof ConnectorAuthType>;
export declare const ConnectorAuthType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    custom: "custom";
    apiKey: "apiKey";
    none: "none";
    oauth2: "oauth2";
    basic: "basic";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export declare const ConnectorOauthGrantType: {
    readonly AuthorizationCode: "authorization_code";
    readonly ClientCredentials: "client_credentials";
    readonly Password: "password";
};
/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export type ConnectorOauthGrantType = OpenEnum<typeof ConnectorOauthGrantType>;
export declare const ConnectorOauthGrantType$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    password: "password";
    authorization_code: "authorization_code";
    client_credentials: "client_credentials";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
 */
export declare const OauthCredentialsSource: {
    readonly Integration: "integration";
    readonly Connection: "connection";
};
/**
 * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
 */
export type OauthCredentialsSource = OpenEnum<typeof OauthCredentialsSource>;
export declare const OauthCredentialsSource$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    connection: "connection";
    integration: "integration";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type OauthScope = {
    id?: string | undefined;
    label?: string | undefined;
    default_apis?: Array<string> | undefined;
};
export declare const OauthScope$zodSchema: z.ZodType<OauthScope>;
/**
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
 */
export type UnifiedApiOauthScope = {
    id?: string | undefined;
    label?: string | undefined;
};
export declare const UnifiedApiOauthScope$zodSchema: z.ZodType<UnifiedApiOauthScope>;
export type ConnectorUnifiedApi = {
    id?: UnifiedApiId | undefined;
    name?: string | undefined;
    auth_only?: boolean | undefined;
    oauth_scopes?: Array<UnifiedApiOauthScope> | undefined;
    supported_resources?: Array<LinkedConnectorResource> | undefined;
    downstream_unsupported_resources?: Array<string> | undefined;
    supported_events?: Array<ConnectorEvent> | undefined;
};
export declare const ConnectorUnifiedApi$zodSchema: z.ZodType<ConnectorUnifiedApi>;
export type TlsSupport = {
    type?: string | undefined;
    description?: string | undefined;
};
export declare const TlsSupport$zodSchema: z.ZodType<TlsSupport>;
export type Connector = {
    id?: string | undefined;
    name?: string | undefined;
    status?: ConnectorStatus | undefined;
    description?: string | null | undefined;
    icon_url?: string | undefined;
    logo_url?: string | undefined;
    website_url?: string | undefined;
    signup_url?: string | undefined;
    partner_signup_url?: string | undefined;
    free_trial_available?: boolean | undefined;
    auth_type?: ConnectorAuthType | undefined;
    auth_only?: boolean | undefined;
    blind_mapped?: boolean | undefined;
    oauth_grant_type?: ConnectorOauthGrantType | undefined;
    oauth_credentials_source?: OauthCredentialsSource | undefined;
    oauth_scopes?: Array<OauthScope> | undefined;
    custom_scopes?: boolean | undefined;
    has_sandbox_credentials?: boolean | undefined;
    settings?: Array<ConnectorSetting> | undefined;
    service_id?: string | undefined;
    unified_apis?: Array<ConnectorUnifiedApi> | undefined;
    supported_resources?: Array<LinkedConnectorResource> | undefined;
    configurable_resources?: Array<string> | undefined;
    supported_events?: Array<ConnectorEvent> | undefined;
    webhook_support?: WebhookSupport | undefined;
    schema_support?: SchemaSupport | undefined;
    docs?: Array<ConnectorDoc> | undefined;
    tls_support?: TlsSupport | undefined;
};
export declare const Connector$zodSchema: z.ZodType<Connector>;
//# sourceMappingURL=connector.d.ts.map