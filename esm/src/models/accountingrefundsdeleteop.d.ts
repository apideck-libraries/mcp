import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { DeleteRefundResponse } from "./deleterefundresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingRefundsDeleteGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingRefundsDeleteGlobals$zodSchema: z.ZodType<AccountingRefundsDeleteGlobals>;
export type AccountingRefundsDeleteRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
};
export declare const AccountingRefundsDeleteRequest$zodSchema: z.ZodType<AccountingRefundsDeleteRequest>;
export type AccountingRefundsDeleteResponse = DeleteRefundResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingRefundsDeleteResponse$zodSchema: z.ZodType<AccountingRefundsDeleteResponse>;
//# sourceMappingURL=accountingrefundsdeleteop.d.ts.map