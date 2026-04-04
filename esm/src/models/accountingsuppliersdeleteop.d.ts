import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteSupplierResponse } from "./deletesupplierresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSuppliersDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSuppliersDeleteGlobals$zodSchema: z.ZodType<AccountingSuppliersDeleteGlobals>;
export type AccountingSuppliersDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingSuppliersDeleteRequest$zodSchema: z.ZodType<AccountingSuppliersDeleteRequest>;
export type AccountingSuppliersDeleteResponse = DeleteSupplierResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSuppliersDeleteResponse$zodSchema: z.ZodType<AccountingSuppliersDeleteResponse>;
//# sourceMappingURL=accountingsuppliersdeleteop.d.ts.map