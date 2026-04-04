import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BillInput } from "./bill.js";
import { CreateBillResponse } from "./createbillresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingBillsAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillsAddGlobals$zodSchema: z.ZodType<AccountingBillsAddGlobals>;
export type AccountingBillsAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    body: BillInput;
};
export declare const AccountingBillsAddRequest$zodSchema: z.ZodType<AccountingBillsAddRequest>;
export type AccountingBillsAddResponse = CreateBillResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillsAddResponse$zodSchema: z.ZodType<AccountingBillsAddResponse>;
//# sourceMappingURL=accountingbillsaddop.d.ts.map