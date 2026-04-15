import * as z from "zod";
import { OpenEnum } from "../types/enums.js";
import { Assignee } from "./assignee.js";
import { AssigneeInput } from "./assigneeinput.js";
import { CollectionTag } from "./collectiontag.js";
import { CollectionTagInput } from "./collectiontaginput.js";
import { PassThroughBody } from "./passthroughbody.js";
/**
 * Priority of the ticket
 */
export declare const TicketPriority: {
    readonly Low: "low";
    readonly Normal: "normal";
    readonly High: "high";
    readonly Urgent: "urgent";
};
/**
 * Priority of the ticket
 */
export type TicketPriority = OpenEnum<typeof TicketPriority>;
export declare const TicketPriority$zodSchema: z.ZodUnion<readonly [z.ZodEnum<{
    high: "high";
    low: "low";
    normal: "normal";
    urgent: "urgent";
}>, z.ZodPipe<z.ZodString, z.ZodTransform<import("../types/enums.js").Unrecognized<string>, string>>]>;
export type Ticket = {
    id: string;
    parent_id?: string | null | undefined;
    collection_id?: string | null | undefined;
    type?: string | null | undefined;
    subject?: string | null | undefined;
    description?: string | null | undefined;
    status?: string | null | undefined;
    priority?: TicketPriority | null | undefined;
    assignees?: Array<Assignee> | undefined;
    updated_at?: string | null | undefined;
    created_at?: string | null | undefined;
    created_by?: string | null | undefined;
    due_date?: string | null | undefined;
    completed_at?: string | null | undefined;
    tags?: Array<CollectionTag> | undefined;
    custom_mappings?: {
        [k: string]: any;
    } | null | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const Ticket$zodSchema: z.ZodType<Ticket>;
export type TicketInput = {
    parent_id?: string | null | undefined;
    type?: string | null | undefined;
    subject?: string | null | undefined;
    description?: string | null | undefined;
    status?: string | null | undefined;
    priority?: TicketPriority | null | undefined;
    assignees?: Array<AssigneeInput> | undefined;
    due_date?: string | null | undefined;
    tags?: Array<CollectionTagInput> | undefined;
    pass_through?: Array<PassThroughBody> | undefined;
};
export declare const TicketInput$zodSchema: z.ZodType<TicketInput>;
//# sourceMappingURL=ticket.d.ts.map