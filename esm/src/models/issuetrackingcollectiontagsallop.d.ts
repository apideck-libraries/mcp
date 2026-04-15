import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCollectionTagsResponse } from "./getcollectiontagsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionTagsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionTagsAllGlobals$zodSchema: z.ZodType<IssueTrackingCollectionTagsAllGlobals>;
export type IssueTrackingCollectionTagsAllRequest = {
    collection_id: string;
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionTagsAllRequest$zodSchema: z.ZodType<IssueTrackingCollectionTagsAllRequest>;
export type IssueTrackingCollectionTagsAllResponseResult = GetCollectionTagsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionTagsAllResponseResult$zodSchema: z.ZodType<IssueTrackingCollectionTagsAllResponseResult>;
export type IssueTrackingCollectionTagsAllResponse = {
    Result: GetCollectionTagsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const IssueTrackingCollectionTagsAllResponse$zodSchema: z.ZodType<IssueTrackingCollectionTagsAllResponse>;
//# sourceMappingURL=issuetrackingcollectiontagsallop.d.ts.map