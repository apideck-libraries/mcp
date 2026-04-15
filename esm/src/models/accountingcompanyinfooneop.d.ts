import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCompanyInfoResponse } from "./getcompanyinforesponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCompanyInfoOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCompanyInfoOneGlobals$zodSchema: z.ZodType<AccountingCompanyInfoOneGlobals>;
export type AccountingCompanyInfoOneRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingCompanyInfoOneRequest$zodSchema: z.ZodType<AccountingCompanyInfoOneRequest>;
export type AccountingCompanyInfoOneResponse = GetCompanyInfoResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCompanyInfoOneResponse$zodSchema: z.ZodType<AccountingCompanyInfoOneResponse>;
//# sourceMappingURL=accountingcompanyinfooneop.d.ts.map