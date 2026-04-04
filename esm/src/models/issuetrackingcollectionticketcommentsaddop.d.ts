import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CollectionTicketCommentInput } from "./collectionticketcommentinput.js";
import { CreateCommentResponse } from "./createcommentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketCommentsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsAddGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAddGlobals>;
export type IssueTrackingCollectionTicketCommentsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    collection_id: string;
    ticket_id: string;
    body: CollectionTicketCommentInput;
};
export declare const IssueTrackingCollectionTicketCommentsAddRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAddRequest>;
export type IssueTrackingCollectionTicketCommentsAddResponse = CreateCommentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketCommentsAddResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAddResponse>;
//# sourceMappingURL=issuetrackingcollectionticketcommentsaddop.d.ts.map