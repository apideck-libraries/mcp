import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateCreditNoteResponse } from "./createcreditnoteresponse.js";
import { CreditNoteInput } from "./creditnote.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCreditNotesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCreditNotesAddGlobals$zodSchema: z.ZodType<AccountingCreditNotesAddGlobals>;
export type AccountingCreditNotesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: CreditNoteInput;
};
export declare const AccountingCreditNotesAddRequest$zodSchema: z.ZodType<AccountingCreditNotesAddRequest>;
export type AccountingCreditNotesAddResponse = CreateCreditNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCreditNotesAddResponse$zodSchema: z.ZodType<AccountingCreditNotesAddResponse>;
//# sourceMappingURL=accountingcreditnotesaddop.d.ts.map