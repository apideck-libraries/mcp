import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { BillInput } from "./bill.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateBillResponse } from "./updatebillresponse.js";
export type AccountingBillsUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingBillsUpdateGlobals$zodSchema: z.ZodType<AccountingBillsUpdateGlobals>;
export type AccountingBillsUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: BillInput;
};
export declare const AccountingBillsUpdateRequest$zodSchema: z.ZodType<AccountingBillsUpdateRequest>;
export type AccountingBillsUpdateResponse = UpdateBillResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingBillsUpdateResponse$zodSchema: z.ZodType<AccountingBillsUpdateResponse>;
//# sourceMappingURL=accountingbillsupdateop.d.ts.map