import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreditNoteInput } from "./creditnote.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
import { UpdateCreditNoteResponse } from "./updatecreditnoteresponse.js";
export type AccountingCreditNotesUpdateGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCreditNotesUpdateGlobals$zodSchema: z.ZodType<AccountingCreditNotesUpdateGlobals>;
export type AccountingCreditNotesUpdateRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    raw?: boolean | undefined;
    body: CreditNoteInput;
};
export declare const AccountingCreditNotesUpdateRequest$zodSchema: z.ZodType<AccountingCreditNotesUpdateRequest>;
export type AccountingCreditNotesUpdateResponse = UpdateCreditNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCreditNotesUpdateResponse$zodSchema: z.ZodType<AccountingCreditNotesUpdateResponse>;
//# sourceMappingURL=accountingcreditnotesupdateop.d.ts.map