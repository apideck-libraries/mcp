import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteTrackingCategoryResponse } from "./deletetrackingcategoryresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingTrackingCategoriesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingTrackingCategoriesDeleteGlobals$zodSchema: z.ZodType<AccountingTrackingCategoriesDeleteGlobals>;
export type AccountingTrackingCategoriesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingTrackingCategoriesDeleteRequest$zodSchema: z.ZodType<AccountingTrackingCategoriesDeleteRequest>;
export type AccountingTrackingCategoriesDeleteResponse = DeleteTrackingCategoryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingTrackingCategoriesDeleteResponse$zodSchema: z.ZodType<AccountingTrackingCategoriesDeleteResponse>;
//# sourceMappingURL=accountingtrackingcategoriesdeleteop.d.ts.map