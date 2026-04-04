import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetSupplierResponse } from "./getsupplierresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingSuppliersOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingSuppliersOneGlobals$zodSchema: z.ZodType<AccountingSuppliersOneGlobals>;
export type AccountingSuppliersOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingSuppliersOneRequest$zodSchema: z.ZodType<AccountingSuppliersOneRequest>;
export type AccountingSuppliersOneResponse = GetSupplierResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingSuppliersOneResponse$zodSchema: z.ZodType<AccountingSuppliersOneResponse>;
//# sourceMappingURL=accountingsuppliersoneop.d.ts.map