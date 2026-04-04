import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * JournalEntries
 */
export type UpdateJournalEntryResponse = {
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
export declare const UpdateJournalEntryResponse$zodSchema: z.ZodType<UpdateJournalEntryResponse>;
//# sourceMappingURL=updatejournalentryresponse.d.ts.map