import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BalanceSheetFilter } from "./balancesheetfilter.js";
import { GetBalanceSheetResponse } from "./getbalancesheetresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBalanceSheetOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBalanceSheetOneGlobals$zodSchema: z.ZodType<AccountingBalanceSheetOneGlobals>;
export type AccountingBalanceSheetOneRequest = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    pass_through?: {
        [k: string]: any;
    } | undefined;
    filter?: BalanceSheetFilter | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingBalanceSheetOneRequest$zodSchema: z.ZodType<AccountingBalanceSheetOneRequest>;
export type AccountingBalanceSheetOneResponse = GetBalanceSheetResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBalanceSheetOneResponse$zodSchema: z.ZodType<AccountingBalanceSheetOneResponse>;
//# sourceMappingURL=accountingbalancesheetoneop.d.ts.map