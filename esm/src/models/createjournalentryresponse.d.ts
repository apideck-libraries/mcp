import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * JournalEntries
 */
export type CreateJournalEntryResponse = {
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
export declare const CreateJournalEntryResponse$zodSchema: z.ZodType<CreateJournalEntryResponse>;
//# sourceMappingURL=createjournalentryresponse.d.ts.map