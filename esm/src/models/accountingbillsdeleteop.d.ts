import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteBillResponse } from "./deletebillresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillsDeleteGlobals$zodSchema: z.ZodType<AccountingBillsDeleteGlobals>;
export type AccountingBillsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingBillsDeleteRequest$zodSchema: z.ZodType<AccountingBillsDeleteRequest>;
export type AccountingBillsDeleteResponse = DeleteBillResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillsDeleteResponse$zodSchema: z.ZodType<AccountingBillsDeleteResponse>;
//# sourceMappingURL=accountingbillsdeleteop.d.ts.map