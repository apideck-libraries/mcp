import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCommentResponse } from "./getcommentresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketCommentsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsOneGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsOneGlobals>;
export type IssueTrackingCollectionTicketCommentsOneRequest = {
    id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    collection_id: string;
    ticket_id: string;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsOneRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsOneRequest>;
export type IssueTrackingCollectionTicketCommentsOneResponseResult = GetCommentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketCommentsOneResponseResult$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsOneResponseResult>;
export type IssueTrackingCollectionTicketCommentsOneResponse = {
    Result: GetCommentResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const IssueTrackingCollectionTicketCommentsOneResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsOneResponse>;
//# sourceMappingURL=issuetrackingcollectionticketcommentsoneop.d.ts.map