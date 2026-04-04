import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteQuoteResponse } from "./deletequoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingQuotesDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingQuotesDeleteGlobals$zodSchema: z.ZodType<AccountingQuotesDeleteGlobals>;
export type AccountingQuotesDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingQuotesDeleteRequest$zodSchema: z.ZodType<AccountingQuotesDeleteRequest>;
export type AccountingQuotesDeleteResponse = DeleteQuoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingQuotesDeleteResponse$zodSchema: z.ZodType<AccountingQuotesDeleteResponse>;
//# sourceMappingURL=accountingquotesdeleteop.d.ts.map