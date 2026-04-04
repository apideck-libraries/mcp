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
    script: "script";
    form: "form";
    accounting: "accounting";
    ats: "ats";
    calendar: "calendar";
    crm: "crm";
    csp: "csp";
    "customer-support": "customer-support";
    ecommerce: "ecommerce";
    "email-marketing": "email-marketing";
    "expense-management": "expense-management";
    "file-storage": "file-storage";
    hris: "hris";
    lead: "lead";
    payroll: "payroll";
    pos: "pos";
    procurement: "procurement";
    "project-management": "project-management";
    sms: "sms";
    spreadsheet: "spreadsheet";
    "team-messaging": "team-messaging";
    "issue-tracking": "issue-tracking";
    "time-registration": "time-registration";
    "transactional-email": "transactional-email";
    vault: "vault";
    "data-warehouse": "data-warehouse";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
//# sourceMappingURL=unifiedapiid.d.ts.map