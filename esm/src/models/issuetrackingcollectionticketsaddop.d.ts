import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateTicketResponse } from "./createticketresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TicketInput } from "./ticket.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketsAddGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAddGlobals>;
export type IssueTrackingCollectionTicketsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    collection_id: string;
    body: TicketInput;
};
export declare const IssueTrackingCollectionTicketsAddRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAddRequest>;
export type IssueTrackingCollectionTicketsAddResponse = CreateTicketResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketsAddResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAddResponse>;
//# sourceMappingURL=issuetrackingcollectionticketsaddop.d.ts.map