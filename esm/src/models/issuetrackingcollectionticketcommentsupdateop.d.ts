import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CollectionTicketCommentInput } from "./collectionticketcommentinput.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateCommentResponse } from "./updatecommentresponse.js";
export type IssueTrackingCollectionTicketCommentsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsUpdateGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsUpdateGlobals>;
export type IssueTrackingCollectionTicketCommentsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    collection_id: string;
    ticket_id: string;
    body: CollectionTicketCommentInput;
};
export declare const IssueTrackingCollectionTicketCommentsUpdateRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsUpdateRequest>;
export type IssueTrackingCollectionTicketCommentsUpdateResponse = UpdateCommentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketCommentsUpdateResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsUpdateResponse>;
//# sourceMappingURL=issuetrackingcollectionticketcommentsupdateop.d.ts.map