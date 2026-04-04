import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateTrackingCategoryResponse } from "./createtrackingcategoryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TrackingCategoryInput } from "./trackingcategory.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTrackingCategoriesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTrackingCategoriesAddGlobals$zodSchema: z.ZodType<AccountingTrackingCategoriesAddGlobals>;
export type AccountingTrackingCategoriesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: TrackingCategoryInput;
};
export declare const AccountingTrackingCategoriesAddRequest$zodSchema: z.ZodType<AccountingTrackingCategoriesAddRequest>;
export type AccountingTrackingCategoriesAddResponse = CreateTrackingCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTrackingCategoriesAddResponse$zodSchema: z.ZodType<AccountingTrackingCategoriesAddResponse>;
//# sourceMappingURL=accountingtrackingcategoriesaddop.d.ts.map