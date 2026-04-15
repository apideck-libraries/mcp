import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CollectionsSort } from "./collectionssort.js";
import { GetCollectionsResponse } from "./getcollectionsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionsAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionsAllGlobals$zodSchema: z.ZodType<IssueTrackingCollectionsAllGlobals>;
export type IssueTrackingCollectionsAllRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    cursor?: string | null | undefined;
    limit?: number | undefined;
    sort?: CollectionsSort | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionsAllRequest$zodSchema: z.ZodType<IssueTrackingCollectionsAllRequest>;
export type IssueTrackingCollectionsAllResponseResult = GetCollectionsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionsAllResponseResult$zodSchema: z.ZodType<IssueTrackingCollectionsAllResponseResult>;
export type IssueTrackingCollectionsAllResponse = {
    Result: GetCollectionsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const IssueTrackingCollectionsAllResponse$zodSchema: z.ZodType<IssueTrackingCollectionsAllResponse>;
//# sourceMappingURL=issuetrackingcollectionsallop.d.ts.map