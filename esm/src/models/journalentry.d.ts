import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Currency } from "./currency.js";
import { CustomFieldUnion } from "./customfieldunion.js";
import { JournalEntryLineItem, JournalEntryLineItemInput } from "./journalentrylineitem.js";
import { LinkedTrackingCategory } from "./linkedtrackingcategory.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Journal entry status
 */
export declare const JournalEntryStatus: {
    readonly Draft: "draft";
    readonly PendingApproval: "pending_approval";
    readonly Approved: "approved";
    readonly Posted: "posted";
    readonly Voided: "voided";
    readonly Rejected: "rejected";
    readonly Deleted: "deleted";
    readonly Other: "other";
};
/**
 * Journal entry status
 */
export type JournalEntryStatus = OpenEnum<typeof JournalEntryStatus>;
export declare const JournalEntryStatus$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    other: "other";
    rejected: "rejected";
    draft: "draft";
    voided: "voided";
    deleted: "deleted";
    posted: "posted";
    approved: "approved";
    pending_approval: "pending_approval";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type JournalEntry = {
    id?: string | undefined;
    downstream_id?: string | null | undefined;
    display_id?: string | null | undefined;
    title?: string | null | undefined;
    currency_rate?: number | null | undefined;
    currency?: Currency | null | undefined;
    company_id?: string | null | undefined;
    line_items?: Array<JournalEntryLineItem> | undefined;
    status?: JournalEntryStatus | null | undefined;
    memo?: string | null | undefined;
    posted_at?: string | undefined;
    journal_symbol?: string | null | undefined;
    tax_type?: string | null | undefined;
    tax_code?: string | null | undefined;
    number?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    accounting_period?: string | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    source_type?: string | null | undefined;
    source_id?: string | null | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    updated_by?: string | null | undefined;
    created_by?: string | null | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    row_version?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const JournalEntry$zodSchema: z.ZodType<JournalEntry>;
export type JournalEntryInput = {
    display_id?: string | null | undefined;
    title?: string | null | undefined;
    currency_rate?: number | null | undefined;
    currency?: Currency | null | undefined;
    company_id?: string | null | undefined;
    line_items?: Array<JournalEntryLineItemInput> | undefined;
    status?: JournalEntryStatus | null | undefined;
    memo?: string | null | undefined;
    posted_at?: string | undefined;
    journal_symbol?: string | null | undefined;
    tax_type?: string | null | undefined;
    tax_code?: string | null | undefined;
    number?: string | null | undefined;
    tracking_categories?: Array<LinkedTrackingCategory | null> | null | undefined;
    accounting_period?: string | null | undefined;
    tax_inclusive?: boolean | null | undefined;
    source_type?: string | null | undefined;
    source_id?: string | null | undefined;
    row_version?: string | null | undefined;
    custom_fields?: Array<CustomFieldUnion> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const JournalEntryInput$zodSchema: z.ZodType<JournalEntryInput>;
//# sourceMappingURL=journalentry.d.ts.map