import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { ConsumerMetadata } from "./consumermetadata.js";
import { UnifiedApiId } from "./unifiedapiid.js";
export declare const AllowAction: {
    readonly Delete: "delete";
    readonly Disconnect: "disconnect";
    readonly Reauthorize: "reauthorize";
    readonly Disable: "disable";
};
export type AllowAction = OpenEnum<typeof AllowAction>;
export declare const AllowAction$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    delete: "delete";
    disconnect: "disconnect";
    reauthorize: "reauthorize";
    disable: "disable";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
/**
 * Settings to change the way the Vault is displayed.
 */
export type Settings = {
    unified_apis?: Array<UnifiedApiId> | undefined;
    hide_resource_settings?: boolean | undefined;
    sandbox_mode?: boolean | undefined;
    isolation_mode?: boolean | undefined;
    session_length?: string | undefined;
    show_logs?: boolean | undefined;
    show_suggestions?: boolean | undefined;
    show_sidebar?: boolean | undefined;
    auto_redirect?: boolean | undefined;
    hide_guides?: boolean | undefined;
    allow_actions?: Array<AllowAction> | undefined;
};
export declare const Settings$zodSchema: z.ZodType<Settings>;
/**
 * Theming options to change the look and feel of Vault.
 */
export type Theme = {
    favicon?: string | undefined;
    logo?: string | undefined;
    primary_color?: string | undefined;
    sidepanel_background_color?: string | undefined;
    sidepanel_text_color?: string | undefined;
    vault_name?: string | undefined;
    privacy_url?: string | undefined;
    terms_url?: string | undefined;
};
export declare const Theme$zodSchema: z.ZodType<Theme>;
export type Session = {
    consumer_metadata?: ConsumerMetadata | undefined;
    redirect_uri?: string | undefined;
    settings?: Settings | undefined;
    theme?: Theme | undefined;
    custom_consumer_settings?: {
        [k: string]: any;
    } | undefined;
};
export declare const Session$zodSchema: z.ZodType<Session>;
//# sourceMappingURL=session.d.ts.map