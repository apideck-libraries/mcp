import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteTicketResponse } from "./deleteticketresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketsDeleteGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketsDeleteGlobals>;
export type IssueTrackingCollectionTicketsDeleteRequest = {
    ticket_id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    collection_id: string;
};
export declare const IssueTrackingCollectionTicketsDeleteRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketsDeleteRequest>;
export type IssueTrackingCollectionTicketsDeleteResponse = DeleteTicketResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketsDeleteResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketsDeleteResponse>;
//# sourceMappingURL=issuetrackingcollectionticketsdeleteop.d.ts.map