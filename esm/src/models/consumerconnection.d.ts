import * as z from "zod";
import { AuthType } from "./authtype.js";
import { ConnectionHealth } from "./connectionhealth.js";
import { ConnectionState } from "./connectionstate.js";
export type ConsumerConnection = {
    id?: string | undefined;
    name?: string | undefined;
    icon?: string | undefined;
    logo?: string | undefined;
    website?: string | undefined;
    tag_line?: string | undefined;
    service_id?: string | undefined;
    unified_api?: string | undefined;
    consumer_id?: string | undefined;
    auth_type?: AuthType | undefined;
    enabled?: boolean | undefined;
    settings?: {
        [k: string]: any;
    } | null | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    created_at?: string | undefined;
    updated_at?: string | null | undefined;
    state?: ConnectionState | undefined;
    health?: ConnectionHealth | undefined;
    credentials_expire_at?: string | null | undefined;
    last_refresh_failed_at?: string | null | undefined;
};
export declare const ConsumerConnection$zodSchema: z.ZodType<ConsumerConnection>;
//# sourceMappingURL=consumerconnection.d.ts.map