import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetProfitAndLossResponse } from "./getprofitandlossresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { ProfitAndLossFilter } from "./profitandlossfilter.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingProfitAndLossOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingProfitAndLossOneGlobals$zodSchema: z.ZodType<AccountingProfitAndLossOneGlobals>;
export type AccountingProfitAndLossOneRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    filter?: ProfitAndLossFilter | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingProfitAndLossOneRequest$zodSchema: z.ZodType<AccountingProfitAndLossOneRequest>;
export type AccountingProfitAndLossOneResponse = GetProfitAndLossResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingProfitAndLossOneResponse$zodSchema: z.ZodType<AccountingProfitAndLossOneResponse>;
//# sourceMappingURL=accountingprofitandlossoneop.d.ts.map