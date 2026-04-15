import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CommentsSort } from "./commentssort.js";
import { GetCommentsResponse } from "./getcommentsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketCommentsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsAllGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAllGlobals>;
export type IssueTrackingCollectionTicketCommentsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    collection_id: string;
    ticket_id: string;
    sort?: CommentsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionTicketCommentsAllRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAllRequest>;
export type IssueTrackingCollectionTicketCommentsAllResponseResult = GetCommentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketCommentsAllResponseResult$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAllResponseResult>;
export type IssueTrackingCollectionTicketCommentsAllResponse = {
    Result: GetCommentsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const IssueTrackingCollectionTicketCommentsAllResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketCommentsAllResponse>;
//# sourceMappingURL=issuetrackingcollectionticketcommentsallop.d.ts.map