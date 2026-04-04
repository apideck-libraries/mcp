import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Update a Ticket
 */
export type UpdateTicketResponse = {
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
export declare const UpdateTicketResponse$zodSchema: z.ZodType<UpdateTicketResponse>;
//# sourceMappingURL=updateticketresponse.d.ts.map