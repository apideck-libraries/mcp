import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCollectionUsersResponse } from "./getcollectionusersresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionUsersAllGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionUsersAllGlobals$zodSchema: z.ZodType<IssueTrackingCollectionUsersAllGlobals>;
export type IssueTrackingCollectionUsersAllRequest = {
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
export declare const IssueTrackingCollectionUsersAllRequest$zodSchema: z.ZodType<IssueTrackingCollectionUsersAllRequest>;
export type IssueTrackingCollectionUsersAllResponseResult = GetCollectionUsersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionUsersAllResponseResult$zodSchema: z.ZodType<IssueTrackingCollectionUsersAllResponseResult>;
export type IssueTrackingCollectionUsersAllResponse = {
    Result: GetCollectionUsersResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
};
export declare const IssueTrackingCollectionUsersAllResponse$zodSchema: z.ZodType<IssueTrackingCollectionUsersAllResponse>;
//# sourceMappingURL=issuetrackingcollectionusersallop.d.ts.map