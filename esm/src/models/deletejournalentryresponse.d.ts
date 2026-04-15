import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * JournalEntries
 */
export type DeleteJournalEntryResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: UnifiedId;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const DeleteJournalEntryResponse$zodSchema: z.ZodType<DeleteJournalEntryResponse>;
//# sourceMappingURL=deletejournalentryresponse.d.ts.map