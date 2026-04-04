import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { TrackingCategoryInput } from "./trackingcategory.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateTrackingCategoryResponse } from "./updatetrackingcategoryresponse.js";
export type AccountingTrackingCategoriesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTrackingCategoriesUpdateGlobals$zodSchema: z.ZodType<AccountingTrackingCategoriesUpdateGlobals>;
export type AccountingTrackingCategoriesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: TrackingCategoryInput;
};
export declare const AccountingTrackingCategoriesUpdateRequest$zodSchema: z.ZodType<AccountingTrackingCategoriesUpdateRequest>;
export type AccountingTrackingCategoriesUpdateResponse = UpdateTrackingCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTrackingCategoriesUpdateResponse$zodSchema: z.ZodType<AccountingTrackingCategoriesUpdateResponse>;
//# sourceMappingURL=accountingtrackingcategoriesupdateop.d.ts.map