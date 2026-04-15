import * as z from "zod";
import { JournalEntry } from "./journalentry.js";
/**
 * JournalEntries
 */
export type GetJournalEntryResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: JournalEntry;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetJournalEntryResponse$zodSchema: z.ZodType<GetJournalEntryResponse>;
//# sourceMappingURL=getjournalentryresponse.d.ts.map