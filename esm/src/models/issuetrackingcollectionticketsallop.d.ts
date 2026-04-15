import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetTicketsResponse } from "./getticketsresponse.js";
import { IssuesFilter } from "./issuesfilter.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TicketsSort } from "./ticketssort.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTicketsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTicketsAllGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAllGlobals>;
export type IssueTrackingCollectionTicketsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    collection_id: string;
    sort?: TicketsSort | undefined;
    filter?: IssuesFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionTicketsAllRequest$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAllRequest>;
export type IssueTrackingCollectionTicketsAllResponseResult = GetTicketsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTicketsAllResponseResult$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAllResponseResult>;
export type IssueTrackingCollectionTicketsAllResponse = {
    Result: GetTicketsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const IssueTrackingCollectionTicketsAllResponse$zodSchema: z.ZodType<IssueTrackingCollectionTicketsAllResponse>;
//# sourceMappingURL=issuetrackingcollectionticketsallop.d.ts.map