import * as z from "zod";
import { UnifiedId } from "./unifiedid.js";
/**
 * Create a Ticket
 */
export type CreateTicketResponse = {
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
export declare const CreateTicketResponse$zodSchema: z.ZodType<CreateTicketResponse>;
//# sourceMappingURL=createticketresponse.d.ts.map