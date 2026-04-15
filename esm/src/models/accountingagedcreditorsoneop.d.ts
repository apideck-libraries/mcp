import * as z from "zod";
import { AgedReportFilter } from "./agedreportfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAgedCreditorsResponse } from "./getagedcreditorsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingAgedCreditorsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAgedCreditorsOneGlobals$zodSchema: z.ZodType<AccountingAgedCreditorsOneGlobals>;
export type AccountingAgedCreditorsOneRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    filter?: AgedReportFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingAgedCreditorsOneRequest$zodSchema: z.ZodType<AccountingAgedCreditorsOneRequest>;
export type AccountingAgedCreditorsOneResponse = GetAgedCreditorsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAgedCreditorsOneResponse$zodSchema: z.ZodType<AccountingAgedCreditorsOneResponse>;
//# sourceMappingURL=accountingagedcreditorsoneop.d.ts.map