import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCollectionResponse } from "./getcollectionresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type IssueTrackingCollectionsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const IssueTrackingCollectionsOneGlobals$zodSchema: z.ZodType<IssueTrackingCollectionsOneGlobals>;
export type IssueTrackingCollectionsOneRequest = {
    collection_id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const IssueTrackingCollectionsOneRequest$zodSchema: z.ZodType<IssueTrackingCollectionsOneRequest>;
export type IssueTrackingCollectionsOneResponse = GetCollectionResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const IssueTrackingCollectionsOneResponse$zodSchema: z.ZodType<IssueTrackingCollectionsOneResponse>;
//# sourceMappingURL=issuetrackingcollectionsoneop.d.ts.map