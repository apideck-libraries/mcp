import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Delete a Ticket
 */
export type DeleteTicketResponse = {
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
export declare const DeleteTicketResponse$zodSchema: z.ZodType<DeleteTicketResponse>;
//# sourceMappingURL=deleteticketresponse.d.ts.map