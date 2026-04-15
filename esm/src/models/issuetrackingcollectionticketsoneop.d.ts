import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTicketResponse } from "./getticketresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketsOneGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketsOneGlobals>;
export type IssueTrackingCollectionTicketsOneRequest = {
    ticket_id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    collection_id: string;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionTicketsOneRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketsOneRequest>;
export type IssueTrackingCollectionTicketsOneResponse = GetTicketResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketsOneResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketsOneResponse>;
//# sourceMappingURL=issuetrackingcollectionticketsoneop.d.ts.map