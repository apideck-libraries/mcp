import * as z from "zod";
import { Links } from "./links.js";
import { Meta } from "./meta.js";
import { Ticket } from "./ticket.js";
/**
 * List Tickets
 */
export type GetTicketsResponse = {
    status_code: number;
    status: string;
    service: string;
    resource: string;
    operation: string;
    data: Array<Ticket>;
    meta?: Meta | undefined;
    links?: Links | undefined;
    _raw?: {
        [k: string]: any;
    } | null | undefined;
};
export declare const GetTicketsResponse$zodSchema: z.ZodType<GetTicketsResponse>;
//# sourceMappingURL=getticketsresponse.d.ts.map