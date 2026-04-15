import * as z from "zod";
import { Ticket } from "./ticket.js";
/**
 * Get a Ticket
 */
export type GetTicketResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Ticket;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTicketResponse$zodSchema: z.ZodType<GetTicketResponse>;
//# sourceMappingURL=getticketresponse.d.ts.map