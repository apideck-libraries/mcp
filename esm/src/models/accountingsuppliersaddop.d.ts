import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateSupplierResponse } from "./createsupplierresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { SupplierInput } from "./supplier.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSuppliersAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSuppliersAddGlobals$zodSchema: z.ZodType<AccountingSuppliersAddGlobals>;
export type AccountingSuppliersAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: SupplierInput;
};
export declare const AccountingSuppliersAddRequest$zodSchema: z.ZodType<AccountingSuppliersAddRequest>;
export type AccountingSuppliersAddResponse = CreateSupplierResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSuppliersAddResponse$zodSchema: z.ZodType<AccountingSuppliersAddResponse>;
//# sourceMappingURL=accountingsuppliersaddop.d.ts.map