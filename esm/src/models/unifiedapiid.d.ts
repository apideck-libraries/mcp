import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
/**
 * Name of Apideck Unified API
 */
export declare const UnifiedApiId: {
    readonly Accounting: "accounting";
    readonly Ats: "ats";
    readonly Calendar: "calendar";
    readonly Crm: "crm";
    readonly Csp: "csp";
    readonly CustomerSupport: "customer-support";
    readonly Ecommerce: "ecommerce";
    readonly Email: "email";
    readonly EmailMarketing: "email-marketing";
    readonly ExpenseManagement: "expense-management";
    readonly FileStorage: "file-storage";
    readonly Form: "form";
    readonly Hris: "hris";
    readonly Lead: "lead";
    readonly Payroll: "payroll";
    readonly Pos: "pos";
    readonly Procurement: "procurement";
    readonly ProjectManagement: "project-management";
    readonly Script: "script";
    readonly Sms: "sms";
    readonly Spreadsheet: "spreadsheet";
    readonly TeamMessaging: "team-messaging";
    readonly IssueTracking: "issue-tracking";
    readonly TimeRegistration: "time-registration";
    readonly TransactionalEmail: "transactional-email";
    readonly Vault: "vault";
    readonly DataWarehouse: "data-warehouse";
};
/**
 * Name of Apideck Unified API
 */
export type UnifiedApiId = OpenEnum<typeof UnifiedApiId>;
export declare const UnifiedApiId$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    email: "email";
    form: "form";
    script: "script";
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
    calendar: "calendar";
    csp: "csp";
    "customer-support": "customer-support";
    "email-marketing": "email-marketing";
    "expense-management": "expense-management";
    payroll: "payroll";
    procurement: "procurement";
    "project-management": "project-management";
    spreadsheet: "spreadsheet";
    "team-messaging": "team-messaging";
    "time-registration": "time-registration";
    "transactional-email": "transactional-email";
    "data-warehouse": "data-warehouse";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=unifiedapiid.d.ts.map