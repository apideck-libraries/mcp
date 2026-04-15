import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * The request as defined in OpenApi Spec.
 */
export type Operation = {
    id: string;
    name: string;
};
export declare const Operation$zodSchema: z.ZodType<Operation>;
/**
 * Apideck service provider associated with request.
 */
export type LogService = {
    id: string;
    name: string;
};
export declare const LogService$zodSchema: z.ZodType<LogService>;
/**
 * Which Unified Api request was made to.
 */
export declare const UnifiedApiEnum: {
    readonly Crm: "crm";
    readonly Lead: "lead";
    readonly Proxy: "proxy";
    readonly Vault: "vault";
    readonly Accounting: "accounting";
    readonly Hris: "hris";
    readonly Ats: "ats";
    readonly Ecommerce: "ecommerce";
    readonly IssueTracking: "issue-tracking";
    readonly Pos: "pos";
    readonly FileStorage: "file-storage";
    readonly Sms: "sms";
};
/**
 * Which Unified Api request was made to.
 */
export type UnifiedApiEnum = OpenEnum<typeof UnifiedApiEnum>;
export declare const UnifiedApiEnum$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    proxy: "proxy";
    vault: "vault";
    crm: "crm";
    lead: "lead";
    accounting: "accounting";
    hris: "hris";
    ats: "ats";
    ecommerce: "ecommerce";
    "issue-tracking": "issue-tracking";
    pos: "pos";
    "file-storage": "file-storage";
    sms: "sms";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Log = {
    api_style: string;
    base_url: string;
    child_request: boolean;
    consumer_id: string;
    duration: number;
    error_message?: string | null | undefined;
    execution: number;
    has_children: boolean;
    http_method: string;
    id: string;
    latency: number;
    operation: Operation;
    parent_id: string | null;
    path: string;
    sandbox: boolean;
    service: LogService;
    source_ip?: string | null | undefined;
    status_code: number;
    success: boolean;
    timestamp: string;
    unified_api: UnifiedApiEnum;
};
export declare const Log$zodSchema: z.ZodType<Log>;
//# sourceMappingURL=log.d.ts.map