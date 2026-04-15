import * as z from "zod";
import { BadRequestResponse } from "./badrequestresponse.js";
import { CreateJournalEntryResponse } from "./createjournalentryresponse.js";
import { JournalEntryInput } from "./journalentry.js";
import { NotFoundResponse } from "./notfoundresponse.js";
import { PaymentRequiredResponse } from "./paymentrequiredresponse.js";
import { UnauthorizedResponse } from "./unauthorizedresponse.js";
import { UnexpectedErrorResponse } from "./unexpectederrorresponse.js";
import { UnprocessableResponse } from "./unprocessableresponse.js";
export type AccountingJournalEntriesAddGlobals = {
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
};
export declare const AccountingJournalEntriesAddGlobals$zodSchema: z.ZodType<AccountingJournalEntriesAddGlobals>;
export type AccountingJournalEntriesAddRequest = {
    raw?: boolean | undefined;
    xApideckConsumerId?: string | undefined;
    xApideckAppId?: string | undefined;
    xApideckServiceId?: string | undefined;
    xApideckCompanyId?: string | undefined;
    body: JournalEntryInput;
};
export declare const AccountingJournalEntriesAddRequest$zodSchema: z.ZodType<AccountingJournalEntriesAddRequest>;
export type AccountingJournalEntriesAddResponse = CreateJournalEntryResponse | BadRequestResponse | UnauthorizedResponse | PaymentRequiredResponse | NotFoundResponse | UnprocessableResponse | UnexpectedErrorResponse;
export declare const AccountingJournalEntriesAddResponse$zodSchema: z.ZodType<AccountingJournalEntriesAddResponse>;
//# sourceMappingURL=accountingjournalentriesaddop.d.ts.map