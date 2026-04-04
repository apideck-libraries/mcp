import * as z from "zod";
import { AgedReportFilter } from "./agedreportfilter.js";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetAgedDebtorsResponse } from "./getageddebtorsresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingAgedDebtorsOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingAgedDebtorsOneGlobals$zodSchema: z.ZodType<AccountingAgedDebtorsOneGlobals>;
export type AccountingAgedDebtorsOneRequest = {
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
export declare const AccountingAgedDebtorsOneRequest$zodSchema: z.ZodType<AccountingAgedDebtorsOneRequest>;
export type AccountingAgedDebtorsOneResponse = GetAgedDebtorsResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingAgedDebtorsOneResponse$zodSchema: z.ZodType<AccountingAgedDebtorsOneResponse>;
//# sourceMappingURL=accountingageddebtorsoneop.d.ts.map