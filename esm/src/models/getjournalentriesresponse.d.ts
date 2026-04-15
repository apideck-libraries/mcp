import * as z from "zod";
import { JournalEntry } from "./journalentry.js";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
/**
 * JournalEntry
 */
export type GetJournalEntriesResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<JournalEntry>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetJournalEntriesResponse$zodSchema: z.ZodType<GetJournalEntriesResponse>;
//# sourceMappingURL=getjournalentriesresponse.d.ts.map