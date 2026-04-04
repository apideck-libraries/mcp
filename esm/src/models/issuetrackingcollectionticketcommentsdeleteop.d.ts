import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteCommentResponse } from "./deletecommentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketCommentsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsDeleteGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsDeleteGlobals>;
export type IssueTrackingCollectionTicketCommentsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    collection_id: string;
    ticket_id: string;
};
export declare const IssueTrackingCollectionTicketCommentsDeleteRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsDeleteRequest>;
export type IssueTrackingCollectionTicketCommentsDeleteResponse = DeleteCommentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketCommentsDeleteResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsDeleteResponse>;
//# sourceMappingURL=issuetrackingcollectionticketcommentsdeleteop.d.ts.map