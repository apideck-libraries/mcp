import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCollectionUserResponse } from "./getcollectionuserresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionUsersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionUsersOneGlobals$zodSchema: z.ZodType<IssueTrackingCollectionUsersOneGlobals>;
export type IssueTrackingCollectionUsersOneRequest = {
    collection_id: string;
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionUsersOneRequest$zodSchema: z.ZodType<IssueTrackingCollectionUsersOneRequest>;
export type IssueTrackingCollectionUsersOneResponse = GetCollectionUserResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionUsersOneResponse$zodSchema: z.ZodType<IssueTrackingCollectionUsersOneResponse>;
//# sourceMappingURL=issuetrackingcollectionusersoneop.d.ts.map