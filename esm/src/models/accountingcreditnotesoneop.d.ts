import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { GetCreditNoteResponse } from "./getcreditnoteresponse.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingCreditNotesOneGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingCreditNotesOneGlobals$zodSchema: z.ZodType<AccountingCreditNotesOneGlobals>;
export type AccountingCreditNotesOneRequest = {
    id: string;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    raw?: boolean | undefined;
    fields?: string | null | undefined;
};
export declare const AccountingCreditNotesOneRequest$zodSchema: z.ZodType<AccountingCreditNotesOneRequest>;
export type AccountingCreditNotesOneResponse = GetCreditNoteResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingCreditNotesOneResponse$zodSchema: z.ZodType<AccountingCreditNotesOneResponse>;
//# sourceMappingURL=accountingcreditnotesoneop.d.ts.map