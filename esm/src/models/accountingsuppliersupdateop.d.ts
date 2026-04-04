import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SupplierInput } from "./supplier.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateSupplierResponse } from "./updatesupplierresponse.js";
export type AccountingSuppliersUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSuppliersUpdateGlobals$zodSchema: z.ZodType<AccountingSuppliersUpdateGlobals>;
export type AccountingSuppliersUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    body: SupplierInput;
};
export declare const AccountingSuppliersUpdateRequest$zodSchema: z.ZodType<AccountingSuppliersUpdateRequest>;
export type AccountingSuppliersUpdateResponse = UpdateSupplierResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSuppliersUpdateResponse$zodSchema: z.ZodType<AccountingSuppliersUpdateResponse>;
//# sourceMappingURL=accountingsuppliersupdateop.d.ts.map