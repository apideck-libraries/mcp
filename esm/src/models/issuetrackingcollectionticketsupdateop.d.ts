import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TicketInput } from "./ticket.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateTicketResponse } from "./updateticketresponse.js";
export type IssueTrackingCollectionTicketsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketsUpdateGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketsUpdateGlobals>;
export type IssueTrackingCollectionTicketsUpdateRequest = {
    ticket_id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    collection_id: string;
    body: TicketInput;
};
export declare const IssueTrackingCollectionTicketsUpdateRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketsUpdateRequest>;
export type IssueTrackingCollectionTicketsUpdateResponse = UpdateTicketResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketsUpdateResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketsUpdateResponse>;
//# sourceMappingURL=issuetrackingcollectionticketsupdateop.d.ts.map